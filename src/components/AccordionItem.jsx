import { IoMdClose, IoMdRemove } from "react-icons/io";

const AccordionItem = ({ headline, answer, isOpen, setIsOpen, item }) => {
  return (
    <button
      onClick={() => {
        isOpen === item ? setIsOpen(0) : setIsOpen(item);
      }}
      className="border-2 p-4 border-black rounded-xl text-left"
    >
      <div className="top flex justify-between">
        <div className="headline font-bold w-[80%]">{headline}</div>
        <div className="icons">{isOpen === item ? <IoMdClose size={20} /> : <IoMdRemove size={20} />}</div>
      </div>
      {isOpen === item && <div className="answer mt-2">{answer}</div>}
    </button>
  );
};

export default AccordionItem;
