import React from 'react';
import BSStyledPagination from './../components/BSStyledPagination/BSStyledPagination';

class BSStyledPaginationExample extends React.Component {
	state = {
		data: [],
		page: 1,
		count: 10,
		total: null,
		move: ''
	};

	async componentDidMount() {
		await fetch('https://jsonplaceholder.typicode.com/albums')
			.then((response) => response.json())
			.then((resData) => {
				const { count } = this.state;
				this.setState({ data: resData, total: Math.ceil(resData.length / count) });
			});
	}

	handlePaginate = (page) => {
		const { total } = this.state;
		if (page >= 3 && page < total - 1) {
			const move = page * 32 - 96 + 'px';
			this.setState({ move });
		} else if (page === 2) {
			this.setState({ move: '0px' });
		} else if (page === total - 1) {
			this.setState({ move: total * 32 - 160 + 'px' });
		}
		this.setState({ page });
	};

	handleGoToEnd = (value) => {
		const { total } = this.state;
		const page = value === 'start' ? 1 : total;
		const move = value === 'start' ? '0px' : total * 32 - 160 + 'px';
		this.setState({ page, move });
	};

	render() {
		const { data, count, page, move, total } = this.state;
		const dataFiltered = data.filter(
			(data, index) => (page > 1 ? index >= (page - 1) * count && index < page * count : index < page * count)
		);

		return (
			<div style={{padding:'20px'}}>
				<h2>Bootstrap Style Pagination</h2>
				<ul>
					{dataFiltered ? (
						dataFiltered.map((data) => (
							<li key={data.id}>
								{data.id} {data.title}
							</li>
						))
					) : (
						<li>There is no album.</li>
					)}
				</ul>
				<BSStyledPagination
					move={move}
					total={total}
					currentPage={page}
					onPaginate={this.handlePaginate}
					handleGoToEnd={this.handleGoToEnd}
				/>
			</div>
		);
	}
}

export default BSStyledPaginationExample;
