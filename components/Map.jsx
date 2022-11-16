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
    console.log(ll);
    setAddress(value);
    setCoordinates(ll);
    setCenter(ll);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS,
    libraries: googleLibraries,
  });

  const googleMapsOptions = {
    styles: mapStyles,
    fullscreenControl: false,
    mapTypeControl: false,
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.input_container}>
        <p>Lat: {coordinates.lat}</p>
        <p>Lng: {coordinates.lng}</p>
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
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className='autocomplete-dropdown-container'>
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
    </section>
  );
}

export default Map;
