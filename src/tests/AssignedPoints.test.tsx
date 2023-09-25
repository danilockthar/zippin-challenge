import { render, screen } from "@testing-library/react";
import { AssignedPoints } from "@components/Drivers/AssignedPoints";
import { PointAssigned } from "$types/index";

describe("AssignedPoints", () => {
    it("should render correctly with assigned points", () => {
        const points = [
            { id: 1, lat: 123, lng: 456 },
            { id: 2, lat: 789, lng: 1011 },
        ];

        render(<AssignedPoints points={points} />);

        expect(screen.getByText("Latitud: 123")).toBeVisible();
        expect(screen.getByText("Longitud: 456")).toBeVisible();
        expect(screen.getByText("Latitud: 789")).toBeVisible();
        expect(screen.getByText("Longitud: 1011")).toBeVisible();
    });

    it("should render correctly with no assigned points", () => {
        const points: PointAssigned[] = [];

        render(<AssignedPoints points={points} />);

        expect(screen.getByText("No tiene puntos asignados")).toBeVisible();
    });
});
