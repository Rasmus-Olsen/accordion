"use client";

import { useState } from "react";

import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div className="accordion max-w-[600px] mt-[100px] mx-auto grid">
      <div className="heading-text mb-4">
        <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
        <p>Here are some Frequently Asked Questions</p>
      </div>
      <div className="accordion-container grid gap-[10px]">
        <AccordionItem isOpen={isOpen} setIsOpen={setIsOpen} item={1} headline="Headline her" answer="answer her" />
        <AccordionItem isOpen={isOpen} setIsOpen={setIsOpen} item={2} headline="Headline-2 her" answer="answer-2 her" />
        <AccordionItem isOpen={isOpen} setIsOpen={setIsOpen} item={3} headline="Headline-3 her" answer="answer-3 her" />
      </div>
    </div>
  );
};

export default Accordion;
