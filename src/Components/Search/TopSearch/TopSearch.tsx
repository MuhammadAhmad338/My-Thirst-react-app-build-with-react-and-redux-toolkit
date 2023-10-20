/* eslint-disable @typescript-eslint/no-unused-vars */
import { KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSearch } from '../../../Services/toggleSearchService';
import { useAppDispatch } from '../../../hooks/hooks';
import { topSearchBytitle } from '../../../Services/searchService';
import { useNavigate } from 'react-router-dom';
import './TopSearch.css';

const TopSearchContainer = () => {

    const dispatch = useDispatch();
    const searchDispatch = useAppDispatch();
    const navigate = useNavigate();

    const searchIt = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission
            const searchValue = e.currentTarget.value;
            searchDispatch(topSearchBytitle(searchValue));
            navigate("/search");
            dispatch(toggleSearch(false));
        }
    }

    const toggleSearchState = () => {
        dispatch(toggleSearch(false));
    }

    return (
        <div className='top-search'>
            <p>Thirst Search</p>
            <input type="text" className='input-search' placeholder='Search by product title' onKeyDown={searchIt} />
            <div className='closeSearch' onClick={toggleSearchState}>x</div>
        </div>
    );
}

export default TopSearchContainer