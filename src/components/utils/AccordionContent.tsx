import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function AccordionContent(props :any) {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 0}>
        <AccordionHeader onClick={() => handleOpen(1)}>{props.title}</AccordionHeader>
        <AccordionBody>
         {props.content}
        </AccordionBody>
      </Accordion>

    </>
  );
}