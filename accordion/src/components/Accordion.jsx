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
    const [selectedElements, setSelectedElements] = useState([0])
    const [multiSelection, setMultiSelection] = useState(false)

    const toggleSelection = () => {
        setMultiSelection(!multiSelection)
        setSelectedElements([0])
    }
    return (
        <div className="accordion">
            <div className="toggle-button" onClick={() => toggleSelection()}>
                <div className={`toggle-dot ${multiSelection ? "active" : ""}`}></div>
            </div>
            {
                items.map((item, index) => (
                    <AccordionItem
                        item={item}
                        index={index}
                        selectedElements={selectedElements}
                        setSelectedElements={setSelectedElements}
                        multiSelection={multiSelection}
                        key={index}
                    />
                ))
            }
            <p>{multiSelection ? "Multi-selection mode" : "Mono-selection mode"}</p>
        </div>
    )
}

const AccordionItem = ({ item, index, selectedElements, setSelectedElements, multiSelection }) => {
    var active = selectedElements.includes(index)

    const addElement = () => {
        if (multiSelection) {
            if (selectedElements.includes(index)) {
                setSelectedElements(selectedElements.filter(item => item != index))
            } else {
                setSelectedElements([...selectedElements, index])
            }
        } else {
            setSelectedElements(selectedElements.includes(index) ? [] : [index])
        }
    }

    return (
        <div className="accordion-item">
            <div className="accordion-item-header" onClick={() => addElement()}>
                <p>{item.title}</p>
                <div className="accordion-item-header-buttons">
                    <FaMinus className={`accordion-minus ${active ? "active" : "s"}`} />
                    <FaPlus className={`accordion-plus ${!active ? "active" : "s"}`} />
                </div>
            </div>
            <div className={`accordion-item-content ${active ? "active" : "s"}`}>
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