import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../service/mock";

export default function Update() {
    const navigate = useNavigate();
    
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('FNAME'));
        setLastName(localStorage.getItem('LNAME'));
        setCheckbox(localStorage.getItem('CB'));
        // console.log("initial checkbox in update:")
        // console.log(localStorage.getItem('CB'))
        // console.log(checkbox)
    }, []);

    const updateAPIData = (event) => {
        event.preventDefault();
        api.put(`/fakeData/${id}`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            navigate('/api_read')
        })
    }

    return (
        
        <div className="main">
            <form className="create-form">
                <div>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>I agree to the Terms and Conditions</label>
                    <input type="checkbox" id="agree" name="agree" checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                </div>
                <button onClick={updateAPIData} type="submit">update</button>
            </form>
        </div>
    )
}