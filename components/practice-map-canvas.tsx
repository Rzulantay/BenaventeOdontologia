"use client";

import { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import { divIcon } from "leaflet";
import type { PracticeLocation } from "@/data/site";
import { practiceLocations } from "@/data/site";

type PracticeMapCanvasProps = {
  selectedLocation: PracticeLocation;
  onSelectLocation: (location: PracticeLocation) => void;
};

const locationIcon = divIcon({
  className: "practice-map-leaflet-icon",
  html: '<span class="practice-map-pin" aria-hidden="true"></span>',
  iconSize: [28, 36],
  iconAnchor: [14, 34],
  popupAnchor: [0, -32],
});

function MapFocus({ location }: { location: PracticeLocation }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo([location.latitude, location.longitude], 11, {
      duration: 0.6,
    });
  }, [location, map]);

  return null;
}

export default function PracticeMapCanvas({
  selectedLocation,
  onSelectLocation,
}: PracticeMapCanvasProps) {
  return (
    <MapContainer
      center={[
        practiceLocations[0].latitude,
        practiceLocations[0].longitude,
      ]}
      zoom={10}
      minZoom={5}
      maxZoom={18}
      scrollWheelZoom={false}
      aria-label="Mapa de las zonas de atención"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      <MapFocus location={selectedLocation} />
      {practiceLocations.map((location) => (
        <Marker
          position={[location.latitude, location.longitude]}
          icon={locationIcon}
          key={location.id}
          eventHandlers={{
            click: () => onSelectLocation(location),
          }}
        >
          <Popup>
            <strong>{location.name}</strong>
            <br />
            Zona de atención aproximada
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
