import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import api from "../service/http-common";

export default function Create() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    console.log("---on change data---")
    console.log("firstName: " + firstName)
    console.log("lastName: " + lastName)
    console.log("checkbox: " + checkbox)
    
    const postData = (event) => {
        // important: prevent default behaviour
        event.preventDefault();
        
        console.log("---on post data---")
        console.log("firstName: " + firstName)
        console.log("lastName: " + lastName)
        console.log("checkbox: " + checkbox)

        api.post(`/fakeData`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            console.log("post is done, navigate /api_read")
            navigate(`/api_read`); 
        }).catch((error) => {
            console.log(error.toJSON());
        });
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
                <button onClick={postData} type="submit">submit</button>

            </form>
        </div>
    )
}

