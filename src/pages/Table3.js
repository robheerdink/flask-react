import React, { useState, useEffect } from 'react';
import PaginationTable from '../components/pagination.table';

function PageTableFilter() {
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
		<PaginationTable columns={columns} data={channels} />
	</div>
	)
}
	
export default PageTableFilter