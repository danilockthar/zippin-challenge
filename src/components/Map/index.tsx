import React, { useContext, useState } from "react";
import {
    GoogleMap,
    useJsApiLoader,
    Marker,
} from "@react-google-maps/api";
import DriversPanel from "../Drivers";
import MarkersContext from "@lib/context";
import { ContextMarkers, MapProps, SingleMarker } from "$types/index";

const Map = (props: MapProps) => {
    const [map, setMap] = React.useState(null);
    const [selectedMarker, setSelectedMarker] = useState<SingleMarker | null>(
        null
    );
    const { markers } = useContext<ContextMarkers>(MarkersContext);
    const areMarkersValid = markers && markers.length > 0;
    const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const {
        style,
        center = {
            lat: -34.563772,
            lng: -58.455199,
        },
        zoom = 12,
    } = props;

    const modifyMarker = (marker: SingleMarker) => {
        setSelectedMarker(marker);
    };

    const { isLoaded } = useJsApiLoader({
        id: "zippin-challenge",
        googleMapsApiKey: googleMapsApiKey,
    });

    const onUnmount = React.useCallback(function callback() {
        setMap(null);
    }, []);


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={style}
            center={center}
            zoom={zoom}
            onUnmount={onUnmount}
            options={{ maxZoom: zoom, minZoom: zoom }}
        >
            <DriversPanel selectedMarker={selectedMarker} />
            {areMarkersValid &&
                markers.map((elem: SingleMarker) => {
                    return (
                        <Marker
                            icon={`/arrow_${elem.driverAssigned?.color ?? 'grey'}.svg`}
                            key={elem.id}
                            position={{
                                lat: elem.position.lat,
                                lng: elem.position.lng,
                            }}
                            onClick={() => modifyMarker(elem)}
                        />
                    );
                })}
        </GoogleMap>
    ) : (
        <></>
    );
};

export default Map;
