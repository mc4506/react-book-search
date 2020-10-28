import React, {useState, useEffect} from 'react';

function Pagination(props) {
    // console.log(props)
    function RenderPagination() {
        const [maxPages, setMaxPages] = useState(10)
        useEffect(() => {
            const setMaxPageValue = () => {
                console.log(window.innerWidth);
                if(window.innerWidth < 576) {
                    setMaxPages(5);
                } else {
                    setMaxPages(10);
                }
            };
            window.addEventListener('resize', setMaxPageValue);
            return () => window.removeEventListener("resize", setMaxPageValue);
            
        },[]);

        let pages = [];
        let numOfPages = Math.min(props.totalPages, maxPages);
        for(let i=0; i<numOfPages; i++) {
            pages.push(
                <li className={`page-item ${props.currentPage === i+1 ? "active" : ""}`} aria-current="page"
                    onClick={handlePageChange} key={`page-${i}`}>
                    <span className="page-link">{i+1}</span>
                </li>
            )
        };
        return pages;
    }

    function handlePageChange(event) {
        event.stopPropagation();
        // console.log(event.target.textContent);
        let index = (parseInt(event.target.textContent)-1) * 10;
        // console.log("page change");
        // console.log(index);
        if(props.search) {
            props.search(props.term, props.param, index);
        } else if(props.loadBooks) {
            props.loadBooks(index);
        }
    };

    function handlePreviousPageClick(event) {
        event.stopPropagation();
        let index = (props.currentPage-2) *10;
        if(props.search) {
            props.search(props.term, props.param, index);
        } else if(props.loadBooks) {
            props.loadBooks(index);
        }
    };

    function handleNextPageClick(event) {
        event.stopPropagation();
        let index = (props.currentPage) * 10;
        if(props.search) {
            props.search(props.term, props.param, index);
        } else if(props.loadBooks) {
            props.loadBooks(index);
        }
    };

    return (
        <nav aria-label="Page navigation">
        <ul className="pagination justify-content-end">
            <li className={`page-item ${props.currentPage === 1 ? "disabled" : ""}`} onClick={handlePreviousPageClick}>
            <span className="page-link">Previous</span>
            </li>
            <RenderPagination/>
            <li className={`page-item ${(props.currentPage === props.totalPages || props.totalPages === 1) ? "disabled" : ""}`} onClick={handleNextPageClick}>
            <span className="page-link">Next</span>
            </li>
        </ul>
        </nav>
    )
}

export default Pagination;