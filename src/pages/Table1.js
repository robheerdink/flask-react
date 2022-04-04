import React, { useState, useEffect } from 'react';
import BasicTable from '../components/basic.table';
import ChannelService from '../service/channel';

function PageTableSimple() {
	const columns = [
		{
			Header: 'Example multi header ',
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
		
		// fetch('/api/get_channels').then(res => res.json()).then(data => {
		// 	setChannels(data);
		// });

		//axios.get('/api/get_channels').then(res => setChannels(res.data) )

		ChannelService.getAll().then(res => setChannels(res.data))
	}, []);

	return (
		<div>
			<h3>Basic Table using</h3>
			<BasicTable columns={columns} data={channels} />
		</div>
	)
}

export default PageTableSimple  
	
