import { Driver } from "$types/index";
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import { AssignedPoints } from "../AssignedPoints";

export const DriverAccordionItem = ({ driver }: { driver: Driver }) => {
    return (
      <AccordionItem key={driver.id}>
        <h2>
          <AccordionButton background={driver.color}>
            {driver.name} ({driver.pointsAssigned.length})
            <AccordionIcon />
          </AccordionButton>
        </h2>
  
        <AccordionPanel pb={4} className="accordion-content">
          <AssignedPoints points={driver.pointsAssigned || []} />
        </AccordionPanel>
      </AccordionItem>
    );
  };