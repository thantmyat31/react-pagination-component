import React from 'react';
import styles from './CSStyledPagination.module.css';

const CSStyledPagination = ({dataLength, dataPerPage, pageNumber, setPageNumber}) => {
    const totalPage = Math.ceil(dataLength/dataPerPage);
    let pages = [];
    let vbiggest = pageNumber + 2;
    let vsmallest = pageNumber - 2;
    for(let i = 1; i <= totalPage; i++) {
        pages.push(i);
    }
    return ( 
        <div className={styles.pagination}>
            {
                pageNumber > 1 ?
                <span 
                    className={styles.item}
                    onClick={() => {
                        if(pageNumber > 1) setPageNumber(pageNumber - 1);
                    }}
                >&#11164;</span> :
                null
            }

            {vsmallest > pages[0] && (
                <span 
                    className={styles.item}
                    onClick={() => setPageNumber(pages[0])}
                >{pages[0]}</span>
            )}
            {vsmallest - 1 > pages[0] && (
                <span className={styles.dots}>
                    <b></b>
                    <b></b>
                    <b></b>
                </span>
            )}

            {pages.map((page, index) => page <= vbiggest && page >= vsmallest ? (
                <span 
                    key={index} 
                    className={`${styles.item} ${pageNumber === page ? styles.active : ''}`}
                    onClick={() => setPageNumber(page)}
                >{page}</span>
            ) : null)}

            {vbiggest + 1 < pages[pages.length - 1] && (
                <span className={styles.dots}>
                    <b></b>
                    <b></b>
                    <b></b>
                </span>
            )}
            {vbiggest < pages[pages.length - 1] && (
                <span 
                    className={styles.item}
                    onClick={() => setPageNumber(pages[pages.length - 1])}
                >{pages[pages.length - 1]}</span>
            )}

            {
                pageNumber < totalPage ?
                <span
                    className={styles.item}
                    onClick={() => {
                        if(pageNumber < totalPage) setPageNumber(pageNumber + 1);
                    }}
                >&#11166;</span> :
                null
            }
        </div>
     );
}
 
export default CSStyledPagination;