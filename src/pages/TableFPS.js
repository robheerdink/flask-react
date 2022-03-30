import React, { useState, useEffect } from 'react';
import FPSTable from '../components/fps.table';

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
        fetch('/api/get_channels').then(res => res.json()).then(data => {
            setChannels(data);
        });
    }, []);
  
    return (
		<div>
			<h3>Filter Paginate Sort Table</h3>
			<FPSTable columns={columns} data={channels} />
		</div>
    )
  }
  
export default PageTableFPS