import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Read() {
    const navigate = useNavigate();
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://624594416b7ecf057c20719c.mockapi.io/fakeData`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);


    const getData = () => {
        axios.get(`https://624594416b7ecf057c20719c.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
        console.log("Clicked update button, navigate /api_update")
        navigate('/api_update');
    }

    const onDelete = (id) => {
        axios.delete(`https://624594416b7ecf057c20719c.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div className="main">
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Checkbox Value</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {APIData.map((data) => {
                        return (
                            <tr key={data.id}> 
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                                <td> 
                                    <button onClick={() => setData(data)}>Update</button>
                                </td>
                                <td>
                                    <button onClick={() => onDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
