import React, { useState, useEffect } from 'react';
import BasicTable from '../components/basic.table';
import axios from "axios"

function PageTableSimple() {
    const columns = [
      {
        // header needs to have a name, removins seems bit tricky
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
      //axios.get('/api/get_channels').then(res => setChannels(res.data) )
    }, []);
  
    return (
    <div>
      <h3>Basic Table using</h3>
      <BasicTable columns={columns} data={channels} />
    </div>
    )
  }

  export default PageTableSimple  
  
