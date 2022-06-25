import React, {useState, useEffect} from 'react';
import CSStyledPagination from './../components/CSSyledPagination/CSSyledPagination';

export default function CSStyledPaginationExample() {
    const [apiData, setApiData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
			.then((response) => response.json())
			.then((result) => {
				setApiData(result);
			});
    }, []);
    
    const dataPerPage = 10;
    let paginate = [];

    if(apiData.length) {
        paginate = apiData.filter((item, index) => index + 1 > (pageNumber - 1)*dataPerPage &&  index + 1 <= pageNumber*dataPerPage);
    }
    
    return (
        <div style={{marginTop: '50px', padding:'20px'}}>
            <h2>Custom Style Pagination</h2>
            <ul>
                {paginate.length ? (
                    paginate.map((item, index) => (
                        <li key={index}>
                            {item.id} {item.title}
                        </li>
                    ))
                ) : (
                    <li>There is no album.</li>
                )}
            </ul>

            {paginate.length ? (
                <CSStyledPagination 
                    dataLength={apiData.length} 
                    dataPerPage={dataPerPage} 
                    setPageNumber={setPageNumber}
                    pageNumber={pageNumber} />
            ) : null}
        </div>
    )
}
