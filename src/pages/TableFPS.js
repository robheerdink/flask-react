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
            Header: 'Timezone',
            accessor: 'timezone',
        },
        {
            Header: 'Title',
            accessor: 'title',
        },
	];
  
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