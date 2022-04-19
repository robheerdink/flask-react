import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FPSTable from '../components/fps.table';
import ChannelService from '../service/channel';


function PageTableFPS() {
    const navigate = useNavigate();
    const [channels, setChannels] = useState([]);

    const getData = () => {
        ChannelService.getAll()
        .then( (response) => {
            setChannels(response.data);
        });
    }
    
    useEffect(() => {
        getData();
	}, []);

    const onEdit = (data) => {
        data.update = true
        navigate('/form_channels', { state: data});
    }

    const onDelete = (data) => {
        ChannelService.remove(data.id)
        .then( () => {
            getData();
        });
    }

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
                   <button onClick={() => onEdit(originalRow)}>Edit</button>
                   <button onClick={() => onDelete(originalRow)}>Delete</button>
               </div>
            ),
            id: 'action',
        },
	];

    return (
		<div>
			<h3>Filter Paginate Sort Table</h3>
			<FPSTable columns={columns} data={channels} />
		</div>
    )
  }
  
export default PageTableFPS