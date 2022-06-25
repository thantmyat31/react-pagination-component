import React from 'react';
import './BSStyledPagination.css';

const BSStyledPaginationItem = ({ page, onPaginate, currentPage }) => {
	return (
		<span
			className={page === currentPage ? 'paginate-item active' : 'paginate-item'}
			onClick={() => onPaginate(page)}
		>
			{page}
		</span>
	);
};

export default BSStyledPaginationItem;
