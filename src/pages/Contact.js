import React, { useState, useEffect } from 'react';

function Contact() {
    const [firstname, setFirstname] = useState('Your firstname here');
    const [firstnameError, setfirstnameError] = useState(true);
    const [lastname, setLastname] = useState('Your lastname here');
    const [lastnameError, setlastnameError] = useState(true);
    const [email, setEmail] = useState('Your email here');
    const [emailError, setEmailError] = useState(true);
    const [telephone, setTelephone] = useState('Your phone number here');
    const [telephoneError, setTelephoneError] = useState(true);

    useEffect(() => {
        (firstname !== '') ? setfirstnameError(false) : setfirstnameError(true);
    }, [firstname])

    useEffect(() => {
        (lastname !== '') ? setlastnameError(false) : setlastnameError(true);
    }, [lastname])

    useEffect(() => {
        let emailPattern = /^([A-Za-z0-9_\-])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        (emailPattern.test(email)) ? setEmailError(false) : setEmailError(true);
    }, [email])

    useEffect(() => {
        let phonePattern = /^([0-9]{8})$/;
        (phonePattern.test(telephone)) ? setTelephoneError(false) : setTelephoneError(true);
    }, [telephone])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(firstnameError === false && lastnameError === false && emailError === false && telephoneError === false){
            alert('form validated!')
        } else {
            alert('Non-valid values in form')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                </label>
                <input name="firstname" value={firstname} type="text"
                onChange={(e) => setFirstname(e.target.value)}/>
                <p>{firstnameError === true ? 'Not a valid firstname' : null}</p>
                <br/>
                <label>
                    Last name:
                </label>
                <input name="lastname" value={lastname}type="text"
                onChange={(e) => setLastname(e.target.value)}/>
                <p>{lastnameError === true ? 'Not a valid lastname' : null}</p>
                <br/>
                <label>
                    Email: 
                </label>
                <input name="email" value={email} type="text"
                onChange={(e) => setEmail(e.target.value)}/>
                <p>{emailError === true ? 'Not a valid email' : null}</p>
                <br/>
                <label>
                    Phone:
                </label>
                <input name="telephone" value={telephone} type="text"
                onChange={(e) => setTelephone(e.target.value)}/>
                <p>{telephoneError === true ? 'Not a valid phone number' : null}</p>
                <br/>
                <label></label>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}

export default Contact;
