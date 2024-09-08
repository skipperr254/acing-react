import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

import './Accordion.css'

const Accordion = ({ items }) => {
    return (
        <div className="accordion">
            {
                items.map((item, index) => (
                    <AccordionItem
                        item={item}
                        index={index}
                    />
                ))
            }
        </div>
    )
}

const AccordionItem = ({ item }) => {
    const [active, setActive] = useState(false);
    return (
        <div className="accordion-item" onClick={() => setActive(!active)}>
            <div className="accordion-item-header">
                <p>{item.title}</p>
                {/* {
                    active ?
                        <FaMinus className={`accordion-minus ${active && "active"}`} /> :
                        < FaPlus className={`accordion-plus ${!active && "active"}`} />
                } */}
                <div className="accordion-item-header-buttons">
                    <FaMinus className={`accordion-minus ${active ? "active" : ""}`} />
                    <FaPlus className={`accordion-plus ${!active ? "active" : ""}`} />
                </div>
            </div>
            <div className={`accordion-item-content ${active && "active"}`}>
                <p>{item.content}</p>
            </div>
        </div>
    )
}

export default Accordion;