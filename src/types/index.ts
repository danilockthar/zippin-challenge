export type Markers = Array<SingleMarker>;

export interface SingleMarker {
    id: number;
    position: { lat: number; lng: number };
    driverAssigned: null | {
        name: string;
        id: number;
        color: string;
    };
}

export interface MapProps {
    style?: { width: number; height: number };
    center?: { lat: number; lng: number };
    zoom?: number;
}

export type ContextMarkers = {
    markers: Markers;
    updateMarkers: (newVal: SingleMarker | null) => void;
    drivers: Array<Driver>;
};

export interface Driver {
    name: string;
    id: number;
    color: string;
    pointsAssigned: Array<PointAssigned>;
}

export type PointAssigned = { id: number; lat: number; lng: number };
