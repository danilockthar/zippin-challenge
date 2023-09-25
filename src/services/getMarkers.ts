import markersJSON from "./markers.json";

export const getMarkers = (): Promise<
    Array<{ position?: { lat: number; lng: number } }>
> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(markersJSON);
        }, 300);
    });
};
