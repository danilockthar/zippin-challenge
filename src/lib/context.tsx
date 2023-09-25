// MarkersContext.tsx

import { createContext, ReactNode, useState } from "react";
import markersJSON from "./markers.json";
import { ContextMarkers, Driver, Markers, SingleMarker } from "$types/index";

export const MarkersContext: any = createContext<ContextMarkers>({
    markers: [],
    updateMarkers: (val) => val,
    drivers: [],
});

const driversData = [
    {
        name: "Dani",
        id: 1,
        color: "blue",
        pointsAssigned: [],
    },
    {
        name: "Lucho",
        id: 2,
        color: "red",
        pointsAssigned: [],
    },
    {
        name: "Pepe",
        id: 3,
        color: "pink",
        pointsAssigned: [],
    },
    {
        name: "Carlos",
        id: 4,
        color: "gold",
        pointsAssigned: [],
    },
    {
        name: "Teofilo",
        id: 5,
        color: "green",
        pointsAssigned: [],
    },
];
export const MarkersProvider = ({ children }: { children: ReactNode }) => {
    const [markers, setMarkers] = useState<Markers>(markersJSON);
    const [drivers, setDrivers] = useState<Array<Driver>>(driversData);

    const updateMarkers = (newValue: SingleMarker | null) => {
        const updatedArray: any = markers.map((obj) => {
            if (obj.id === newValue?.id) {
                return { ...obj, ...newValue };
            }
            return obj;
        });
        const newDrivers = drivers.map((driver: Driver) => {
            if (driver.id === newValue?.driverAssigned?.id) {
                return {
                    ...driver,
                    pointsAssigned: [
                        ...driver.pointsAssigned,
                        {
                            id: newValue?.id,
                            lat: newValue?.position.lat,
                            lng: newValue?.position.lng,
                        },
                    ],
                };
            }
            if (newValue?.driverAssigned === null) {
                const newPoints = driver?.pointsAssigned.filter(
                    (point) => point.id !== newValue.id
                );
                return {
                    ...driver,
                    pointsAssigned: newPoints,
                };
            }
            return driver;
        });
        setMarkers(updatedArray);
        setDrivers(newDrivers);
    };
    return (
        <MarkersContext.Provider value={{ markers, updateMarkers, drivers }}>
            {children}
        </MarkersContext.Provider>
    );
};

export default MarkersContext;
