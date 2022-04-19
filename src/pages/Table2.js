import React, { useState, useEffect } from 'react';
import FilterTable from '../components/filter.table';
import ChannelService from '../service/channel';

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
      ChannelService.getAll().then(res => setChannels(res.data))
    }, []);
  
    return (
    <div>
      <h3>Filtering Table</h3>
      <FilterTable columns={columns} data={channels} />
    </div>
    )
  }

  export default TableFilter
  