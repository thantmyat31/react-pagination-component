import React, { useState, useEffect } from 'react';
import PaginateItem from './paginate-item';

import './pagination.css';

const Pagination = ({ total, onPaginate, currentPage, move, handleGoToEnd }) => {
	let pages = [];
	for (let i = 1; i <= total; i++) {
		pages.push(i);
	}

	const [ showLeftArrow, setShowLeftArrow ] = useState(false);
	const [ showRightArrow, setShowRightArrow ] = useState(true);
	useEffect(
		() => {
			setShowLeftArrow(currentPage > 3 ? true : false);
			let estimatePage = total - 2;
			setShowRightArrow(estimatePage > currentPage ? true : false);
		},
		[ currentPage, total ]
	);

	return (
		<div className="pagination-container">
			{showLeftArrow && (
				<span className="paginate-item-start" onClick={() => handleGoToEnd('start')}>
					&#xab;
				</span>
			)}
			<div className="pagination">
				<div className="paginate-item-wrapper" style={{ marginLeft: `-${move}` }}>
					{pages ? (
						pages.map((page) => (
							<PaginateItem currentPage={currentPage} onPaginate={onPaginate} key={page} page={page} />
						))
					) : null}
				</div>
			</div>
			{showRightArrow && (
				<span className="paginate-item-end" onClick={() => handleGoToEnd('end')}>
					&#xbb;
				</span>
			)}
		</div>
	);
};

export default Pagination;
