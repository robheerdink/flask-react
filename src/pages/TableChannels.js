import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FPSTable from '../components/fps.table';
import ChannelService from '../service/channel';


function PageTableFPS() {
    const navigate = useNavigate();
    const [channels, setChannels] = useState([]);

    const getData = () => {
        ChannelService.getAll().then(response => setChannels(response.data))
    }
    
    useEffect(() => {
        getData();
	}, []);

    const columns = [
        {
            Header: 'Name',
            accessor: 'name',
        },{
            Header: 'Title',
            accessor: 'title',
        },{
            Header: 'Timezone',
            accessor: 'timezone',
        },{
            Header: '',
            disableFilters: true,
            accessor: (originalRow, rowIndex) => (
               <div>
                   <button onClick={() => handleEdit(originalRow)}>Edit</button>
                   <button onClick={() => handleDelete(originalRow)}>Delete</button>
               </div>
            ),
            id: 'action',
        },
	];

    const handleEdit = (data) => {
        localStorage.setItem('ID', id);
        localStorage.setItem('NAME', firstName);
        localStorage.setItem('TITLE', lastName);
        localStorage.setItem('TIMEZONE', checkbox)
        navigate('/form_channels', { state: data});
    }

    const handleDelete = (data) => {
                ChannelService.remove(data.id).then(getData());
    }

    return (
		<div>
			<h3>Filter Paginate Sort Table</h3>
			<FPSTable columns={columns} data={channels} />
		</div>
    )
  }
  
export default PageTableFPS