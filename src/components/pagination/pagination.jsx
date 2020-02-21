import React from 'react';
import PaginateItem from './paginate-item';

import './pagination.css';

const Pagination = ({ total, onPaginate, currentPage, move, handleGoToEnd }) => {
	let pages = [];
	for (let i = 1; i <= total; i++) {
		pages.push(i);
	}

	return (
		<div className="pagination-container">
			<span className="paginate-item-start" onClick={() => handleGoToEnd('start')}>
				&#xab;
			</span>
			<div className="pagination">
				<div className="paginate-item-wrapper" style={{ marginLeft: `-${move}` }}>
					{pages ? (
						pages.map((page) => (
							<PaginateItem currentPage={currentPage} onPaginate={onPaginate} key={page} page={page} />
						))
					) : null}
				</div>
			</div>
			<span className="paginate-item-end" onClick={() => handleGoToEnd('end')}>
				&#xbb;
			</span>
		</div>
	);
};

export default Pagination;
