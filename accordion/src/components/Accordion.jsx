import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

import './Accordion.css'

// const Accordion = ({ items }) => {
//     return (
//         <div className="accordion">
//             {
//                 items.map((item, index) => (
//                     <AccordionItem
//                         item={item}
//                         index={index}
//                     />
//                 ))
//             }
//         </div>
//     )
// }

// const AccordionItem = ({ item }) => {
//     const [active, setActive] = useState(false);
//     return (
//         <div className="accordion-item" onClick={() => setActive(!active)}>
//             <div className="accordion-item-header">
//                 <p>{item.title}</p>
//                 {/* {
//                     active ?
//                         <FaMinus className={`accordion-minus ${active && "active"}`} /> :
//                         < FaPlus className={`accordion-plus ${!active && "active"}`} />
//                 } */}
//                 <div className="accordion-item-header-buttons">
//                     <FaMinus className={`accordion-minus ${active ? "active" : ""}`} />
//                     <FaPlus className={`accordion-plus ${!active ? "active" : ""}`} />
//                 </div>
//             </div>
//             <div className={`accordion-item-content ${active && "active"}`}>
//                 <p>{item.content}</p>
//             </div>
//         </div>
//     )
// }

// --------------------------------------------------------------------------------------------------------------------------------//

const Accordion = ({ items }) => {
    const [activeElements, setActiveElements] = useState([]);

    return (
        <div className="accordion">
            {
                items.map((item, index) => (
                    <AccordionItem
                        key={item.title}
                        item={item}
                        index={index}
                        activeElemets={activeElements}
                        setActiveElements={setActiveElements}
                    />
                ))
            }
        </div>
    )
}

const AccordionItem = ({ item, index, activeElements, setActiveElements }) => {
    // const active = index in activeElements;

    const active = false;
    console.log("Global", index)

    const updateActiveElements = () => {
        console.log("updateElements", activeElements)
        setActiveElements(elements => {
            const newElements = elements
            if (!(index in newElements)) {
                newElements.push(index)
            } else {
                newElements.filter(() => index)
            }
            return newElements;
        })
    }

    return (
        <div className="accordion-item" onClick={() => updateActiveElements()}>
            <div className="accordion-item-header">
                <p>{item.title}</p>
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

// const Accordion = ({ items }) => {
//     const [multiSelection, setMultiSelection] = useState(false);
//     const [activeElement, setActiveElement] = useState(items[0].title);

//     // if (multiSelection) {
//     //     setActiveElement(items[0].title)
//     // } else {
//     //     setActiveElement([items[0].title])
//     // }

//     // const [activeElements, setActiveElements] = useState([items[0].title]);
//     console.log(multiSelection);
//     console.log(activeElement);

//     const multiSelect = () => {
//         setMultiSelection((prevMultiSelection) => {
//             const newMultiSelection = !prevMultiSelection;
//             if (newMultiSelection) {
//                 setActiveElement([items[0].title])
//             } else {
//                 setActiveElement(items[0].title)
//             }
//             return newMultiSelection;
//         });
//     }

//     return (
//         <div className="accordion">
//             <div className="toggle-button" onClick={() => multiSelect()}>
//                 <div className={`toggle-dot ${multiSelection ? "active" : ""}`}></div>
//             </div>
//             {
//                 items.map((item, index) => (
//                     <AccordionItem
//                         key={item.title}
//                         item={item}
//                         index={index}
//                         activeElement={activeElement}
//                         // activeElements={activeElements}
//                         setActiveElement={setActiveElement}
//                     // setActiveElements={setActiveElements}
//                     />
//                 ))
//             }
//             <p>{multiSelection ? "Multiselection" : "Not in multiselection"}</p>
//         </div>
//     )
// }

// const AccordionItem = ({ item, activeElement, setActiveElement }) => {
//     var active = false;

//     if (typeof (activeElement) === "string") {
//         active = activeElement === item.title;
//     } else if (typeof (activeElement) === "object") {
//         active = activeElement.includes(item.title);
//         console.log(active)
//     }
//     // let active = activeElement === item.title;

//     const activate = () => {
//         if (typeof (activeElement) === "string") {
//             setActiveElement(item.title);
//         } else if (typeof (activeElement) === "object") {
//             var activeEls = activeElement;
//             if (activeEls.includes(item.title)) {
//                 activeEls.filter(() => item.title);
//                 console.log(activeEls)
//             } else {
//                 console.log(activeEls)
//                 activeEls.push(item.title)
//             }
//             setActiveElement(activeEls);
//         }
//     }

//     return (
//         <div className="accordion-item" onClick={() => activate()}>
//             <div className="accordion-item-header">
//                 <p>{item.title}</p>
//                 {/* {
//                     active ?
//                         <FaMinus className={`accordion-minus ${active && "active"}`} /> :
//                         < FaPlus className={`accordion-plus ${!active && "active"}`} />
//                 } */}
//                 <div className="accordion-item-header-buttons">
//                     <FaMinus className={`accordion-minus ${active ? "active" : ""}`} />
//                     <FaPlus className={`accordion-plus ${!active ? "active" : ""}`} />
//                 </div>
//             </div>
//             <div className={`accordion-item-content ${active && "active"}`}>
//                 <p>{item.content}</p>
//             </div>
//         </div>
//     )
// }


// use the prevState that is brought by setState insteas of directly using the state itself

export default Accordion;