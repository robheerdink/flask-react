import React, { useState, useEffect } from 'react';
import FilterTable from '../components/filter.table';

function TableFilter() {
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
      <h3>Filtering Table</h3>
      <FilterTable columns={columns} data={channels} />
    </div>
    )
  }

  export default TableFilter
  