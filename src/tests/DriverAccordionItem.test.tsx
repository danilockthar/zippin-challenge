import { Accordion, ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import { Driver } from "$types/index";
import { DriverAccordionItem } from "@components/Drivers/DriverAccordionItem";

describe("DriverAccordionItem", () => {
    it("renders driver information correctly", () => {
        const mockDriver: Driver = {
            id: 1,
            name: "Daniel",
            color: "blue",
            pointsAssigned: [
                { id: 1, lat: 123, lng: 456 },
                { id: 2, lat: 789, lng: 101 },
            ],
        };

        const { getByText } = render(
            <ChakraProvider>
                <Accordion>
                    <DriverAccordionItem driver={mockDriver} />
                </Accordion>
            </ChakraProvider>
        );
        
        const accordionButton = getByText(`Daniel (${mockDriver.pointsAssigned.length})`);
        expect(accordionButton).toBeInTheDocument();

        const assignedPointLat = getByText("Latitud: 123");
        expect(assignedPointLat).toBeInTheDocument();
        const assignedPointLng = getByText("Longitud: 456");
        expect(assignedPointLng).toBeInTheDocument();
    });

});
