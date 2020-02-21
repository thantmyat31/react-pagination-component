import React from 'react';

const PaginateItem = ({ page, onPaginate, currentPage }) => {
	return (
		<span
			className={page === currentPage ? 'paginate-item active' : 'paginate-item'}
			onClick={() => onPaginate(page)}
		>
			{page}
		</span>
	);
};

export default PaginateItem;
