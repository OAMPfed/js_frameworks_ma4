import React, {useState} from 'react';
import Accordion from '../components/Accordion';

function About() {
    const [accordion_1, setAccordion_1] = useState(false);
    const [accordion_2, setAccordion_2] = useState(false);
    const [accordion_3, setAccordion_3] = useState(false);

    const toggleAccordion = (index, bool) => {
        switch(index){
            case 1:
                setAccordion_1(!bool)
                break;
            case 2:
                setAccordion_2(!bool)
                break;
            case 3:
                setAccordion_3(!bool)
                break;
            default:
                return null;
        }
    }
        
    return (
        <div>
            <Accordion 
                title="Who are we?"
                text="Lorem ipsum nonsense"
                open={accordion_1}
                toggleAccordion={toggleAccordion}
                index={1}/>
            <Accordion 
                title="What do we do?"
                text="Lorem ipsum nonsense"
                open={accordion_2}
                toggleAccordion={toggleAccordion}
                index={2}/>
            <Accordion 
                title="Whyyyy do we do?"
                text="Lorem ipsum nonsense"
                open={accordion_3}
                toggleAccordion={toggleAccordion}
                index={3}/>
        </div>
    );
}

export default About;
