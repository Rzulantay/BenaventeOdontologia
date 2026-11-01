"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { practiceLocations } from "@/data/site";

const PracticeMapCanvas = dynamic(
  () => import("@/components/practice-map-canvas"),
  {
    ssr: false,
    loading: () => (
      <div className="practice-map-loading" role="status">
        Cargando mapa…
      </div>
    ),
  },
);

export function PracticeMap() {
  const [selectedLocation, setSelectedLocation] = useState(
    practiceLocations[0],
  );

  return (
    <div className="practice-map">
      <p className="map-disclaimer">
        Zonas de atención aproximadas. El marcador indica la ciudad, no una
        dirección de consulta.
      </p>
      <div className="practice-map-frame">
        <PracticeMapCanvas
          selectedLocation={selectedLocation}
          onSelectLocation={setSelectedLocation}
        />
      </div>
      <div className="map-location-list" aria-label="Zonas de atención">
        {practiceLocations.map((location) => (
          <button
            type="button"
            className={
              selectedLocation.id === location.id
                ? "map-location-button map-location-selected"
                : "map-location-button"
            }
            key={location.id}
            aria-pressed={selectedLocation.id === location.id}
            onClick={() => setSelectedLocation(location)}
          >
            <span className="map-location-pin" aria-hidden="true" />
            {location.name}
          </button>
        ))}
      </div>
      <p className="map-attribution">
        Mapa ©{" "}
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenStreetMap
        </a>
        {" · "}
        <a
          href="https://www.openstreetmap.org/fixthemap"
          target="_blank"
          rel="noopener noreferrer"
        >
          Colaboradores
        </a>
      </p>
    </div>
  );
}
