import React, { useState, useEffect } from 'react';
import FPSTable from '../components/fps.table';
import ChannelService from '../service/channel';


function PageTableFPS() {
    const columns = [
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Timezone',
            accessor: 'timezone',
        },
        {
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
        console.log("EDIT")
        // let { id, firstName, lastName, checkbox } = data;
        // localStorage.setItem('ID', id);
        // localStorage.setItem('FNAME', firstName);
        // localStorage.setItem('LNAME', lastName);
        // localStorage.setItem('CB', checkbox)
        // navigate('/api_update');
    }

    const handleDelete = (data) => {
        console.log("UPDATE")
    }

  
    const [channels, setChannels] = useState([]);
  
    useEffect(() => {
	    ChannelService.getAll().then(res => setChannels(res.data))
	}, []);
        
    return (
		<div>
			<h3>Filter Paginate Sort Table</h3>
			<FPSTable columns={columns} data={channels} />
		</div>
    )
  }
  
export default PageTableFPS