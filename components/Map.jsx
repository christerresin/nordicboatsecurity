import styles from '../styles/Map.module.scss';
import { markersList } from '../markersList';
import { mapStyles } from '../mapStyles';

import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api';
import { useState } from 'react';

function Map({ grid }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS,
  });

  const [selectedRetailer, setSelectedRetailer] = useState(null);

  const center = { lat: 65.58456, lng: 22.14785 };

  const googleMapsOptions = {
    styles: mapStyles,
    fullscreenControl: false,
    streetView: false,
    mapTypeControl: false,
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className={`${styles.container} ${grid}`}>
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
