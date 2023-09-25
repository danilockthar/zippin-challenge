import { ContextMarkers, Driver, SingleMarker } from "$types/index";
import { useContext, useEffect, useState } from "react";
import "./index.css";
import MarkersContext from "@lib/context";
import { Select } from "@chakra-ui/react";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useToast,
} from "@chakra-ui/react";
import { Accordion } from "@chakra-ui/react";
import { DriverAccordionItem } from "./DriverAccordionItem";

interface Props {
    selectedMarker: SingleMarker | null;
}

const DriversPanel = ({ selectedMarker }: Props) => {
    const toast = useToast();
    const [tabIndex, setTabIndex] = useState(0);
    const [markedSelected, setMarkerSelected] = useState<SingleMarker | null>(
        null
    );

    useEffect(() => {
        if (selectedMarker === null) {
            setTabIndex(0);
        } else {
            setTabIndex(1);
        }
        setMarkerSelected(selectedMarker);
    }, [selectedMarker]);

    const { updateMarkers, drivers } =
        useContext<ContextMarkers>(MarkersContext);

    const driversNotAssigned = markedSelected && !markedSelected.driverAssigned;

    const handleSelect = (driver: Driver) => {
        if (selectedMarker) {
            setMarkerSelected({
                ...selectedMarker,
                driverAssigned: { ...driver },
            });
            updateMarkers({ ...selectedMarker, driverAssigned: { ...driver } });
            toast({
                title: "Chofer asignado correctamente",
                status: "success",
                duration: 4000,
                isClosable: true
            });
        }
    };

    const handleRemove = () => {
        if (markedSelected) {
            updateMarkers({ ...markedSelected, driverAssigned: null });
            setMarkerSelected({ ...markedSelected, driverAssigned: null });
        }
    };

    return (
        <div className="root-drivers">
            <Tabs index={tabIndex}>
                <TabList>
                    <Tab onClick={() => setTabIndex(0)}>Choferes</Tab>
                    <Tab isDisabled={tabIndex === 0}>Puntos</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Accordion>
                            {drivers.map((driver) => (
                                <DriverAccordionItem
                                    key={driver.id}
                                    driver={driver}
                                />
                            ))}
                        </Accordion>
                    </TabPanel>
                    <TabPanel>
                        {driversNotAssigned ? (
                            <>
                                <p>
                                    {" "}
                                    Este punto aún no tiene un chofer asignado.
                                </p>

                                <div className="drivers-grid">
                                    <Select
                                        placeholder="Selecciona un chofer"
                                        onChange={(event) =>
                                            handleSelect(
                                                JSON.parse(event.target.value)
                                            )
                                        }
                                    >
                                        {drivers.length > 0 &&
                                            drivers.map((driver) => {
                                                return (
                                                    <option
                                                        key={driver.id}
                                                        value={JSON.stringify(
                                                            driver
                                                        )}
                                                    >
                                                        {driver.name}
                                                    </option>
                                                );
                                            })}
                                    </Select>
                                </div>
                            </>
                        ) : (
                            <div className="assigned">
                                <p>
                                    Chofer asignado:{" "}
                                    <b>
                                        {" "}
                                        {markedSelected?.driverAssigned?.name}
                                    </b>{" "}
                                </p>
                                <button onClick={() => handleRemove()}>
                                    {" "}
                                    X
                                </button>
                            </div>
                        )}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default DriversPanel;
