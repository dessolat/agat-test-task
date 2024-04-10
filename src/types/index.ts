export type TPolygonCoords = [number, number][][];
export type TPointCoords = [number, number];

export type TGeometryCoords = TPolygonCoords | TPointCoords;
export enum GeometryType {
  Polygon = 'Polygon',
  Point = 'Point'
}

export type TShape = {
  geometry: {
    coordinates: TGeometryCoords;
    type: GeometryType;
  };
  properties: { id: number; name: string };
  type: 'Feature';
};

export type TMarker = L.Marker | L.Polygon;

export type TAddShapeToMap = (shape: TShape) => TMarker;
export type TRemoveShapeFromMap = (marker: TMarker) => void;

export type TAddShapeToStore = (shape: TShape) => void;
export type TRemoveShape = (id: number, marker: TMarker) => void;
