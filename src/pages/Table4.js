import React, { useState, useEffect } from 'react';
import SortingTable from '../components/sorting.table';
import ChannelService from '../service/channel';

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
		ChannelService.getAll().then(res => setChannels(res.data))
	}, []);

	return (
		<div>
			<h3>Filtering Table</h3>
			<SortingTable columns={columns} data={channels} />
		</div>
	)
}

export default PageTableSorting