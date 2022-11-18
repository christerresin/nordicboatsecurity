import styles from '../styles/Map.module.scss';
import { markersList } from '../markersList';
import { mapStyles } from '../mapStyles';

import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api';

import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import PlacesAutocomplete from 'react-places-autocomplete';

import { useEffect, useState } from 'react';

function Map({ grid }) {
  const [selectedRetailer, setSelectedRetailer] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [center, setCenter] = useState({ lat: 65.58456, lng: 22.14785 });
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const googleLibraries = ['places'];
  const searchOptions = {
    componentRestrictions: { country: ['se'] },
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    setCenter(ll);
  };

  const handleLocateMe = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const locatedCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setAddress('');
      setCenter(locatedCoords);
    });
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS,
    libraries: googleLibraries,
  });

  const googleMapsOptions = {
    styles: mapStyles,
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.locate_container}>
        <div className={styles.locate_button} onClick={handleLocateMe}>
          <img className={styles.locate_me_pin} src='/pin.png'></img>
          <span>Min position</span>
        </div>
      </div>
      <GoogleMap
        zoom={8}
        center={center}
        mapContainerClassName={styles.map_container}
        options={googleMapsOptions}
      >
        {markersList.map((marker) => (
          <MarkerF
            key={marker.companyName}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: '/pin.png',
              scaledSize: new window.google.maps.Size(25, 25),
            }}
            onClick={() => {
              setSelectedRetailer(marker);
            }}
          />
        ))}
        {selectedRetailer && (
          <InfoWindowF
            position={{ lat: selectedRetailer.lat, lng: selectedRetailer.lng }}
            onCloseClick={() => {
              setSelectedRetailer(null);
            }}
          >
            <div>
              <h4>{selectedRetailer.companyName}</h4>
              <p>{selectedRetailer.adress}</p>
              <p>{selectedRetailer.phone}</p>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
      <div className={styles.input_container}>
        <PlacesAutocomplete
          searchOptions={searchOptions}
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div className={`${styles.form_group} ${styles.field}`}>
              <input
                name='address'
                id='address'
                className={styles.form_field}
                {...getInputProps({
                  placeholder: 'Adress... ',
                })}
              />
              <label htmlFor='address' className={styles.form_label}>
                Adress
              </label>
              <div className={styles.drop_down_autocomplete}>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion, index) => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      key={index}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    </section>
  );
}

export default Map;
