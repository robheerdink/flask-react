import React, { useState, useEffect } from 'react';
import SortingTable from '../components/sorting.table';

function PageTableSorting() {
    const columns = [
      {
        Header: ' ',
        columns: [
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
        ],
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
      <SortingTable columns={columns} data={channels} />
    </div>
    )
  }
  
  export default PageTableSorting