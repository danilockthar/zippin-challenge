import { PointAssigned } from "$types/index";

export const AssignedPoints = ({ points }: { points: PointAssigned[] }) => {
    return (
        <>
            {points.length > 0 ? (
                points.map((point) => (
                    <div className="assigned-content" key={point.id}>
                        <p className="assigned-point">
                            {"Latitud: "}
                            {point.lat}
                        </p>
                        <p className="assigned-point">
                            {"Longitud: "}
                            {point.lng}
                        </p>
                    </div>
                ))
            ) : (
                <p className="assigned-point">No tiene puntos asignados</p>
            )}
        </>
    );
};
