import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../service/http-common";

export default function Update() {
    const navigate = useNavigate();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);

    const updateAPIData = (event) => {
        // important: prevent default behaviour
        event.preventDefault();

        api.put(`/fakeData/${id}`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            console.log("update done, navigate /api_read")
            navigate('/api_read')
        })
    }
    return (
        <div className="main">
            <form className="create-form">
                <div>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>I agree to the Terms and Conditions</label>
                    <input type="checkbox" id="agree" name="agree" onChange={(e) => setCheckbox(!checkbox)}/>
                </div>
                <button onClick={updateAPIData} type="submit">update</button>
            </form>
        </div>
    )
}