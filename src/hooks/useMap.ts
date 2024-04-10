import {
  GeometryType,
  type TAddShapeToMap,
  type TRemoveShapeFromMap,
  type TPointCoords,
  type TPolygonCoords
} from 'types';

import L from 'leaflet';

import { useCallback, useEffect, useRef } from 'react';

const useMap = () => {
  const initializeMap = useCallback(() => {
    const map = L.map('map-id', { zoomControl: false }).setView([50, 50], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    mapRef.current = map;
  }, []);

  useEffect(() => {
    initializeMap();
  }, [initializeMap]);

  const mapRef = useRef<L.Map>(null as unknown as L.Map);

  const addShapeToMap: TAddShapeToMap = useCallback(shape => {
    switch (shape.geometry.type) {
      case GeometryType.Point:
        return L.marker(shape.geometry.coordinates as TPointCoords).addTo(mapRef.current);
      case GeometryType.Polygon:
        return L.polygon(shape.geometry.coordinates as TPolygonCoords).addTo(mapRef.current);
    }
  }, []);
	
  const removeShapeFromMap: TRemoveShapeFromMap = marker => {
    marker.remove();
  };

  return { addShapeToMap, removeShapeFromMap };
};
export default useMap;
