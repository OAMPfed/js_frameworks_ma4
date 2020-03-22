import React from 'react';

const Accordion = (props) => {
    const { title, text, open, toggleAccordion, index } = props;

    return(
    <div>
        <h2>{title}<button type="button" onClick={() => toggleAccordion(index, open)}> {!open ? 'Open' : 'Close' } </button></h2>
        <p style={open === true ? {display: 'block'} : {display: 'none'}}>{text}</p>
    </div>
    )
};

export default Accordion;