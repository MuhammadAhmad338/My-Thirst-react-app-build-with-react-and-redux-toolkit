import { ChangeEvent } from 'react';
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

    const searchIt = (e: ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        searchDispatch(topSearchBytitle(searchValue));
        navigate("/search");
    }

    const toggleSearchState = () => {
        dispatch(toggleSearch(false));
    }

    return (
        <div className='top-search'>
            <p>Thirst Search</p>
            <form action=" 
            ">
                <input
                    className='top-search-bar'
                    type="text"
                    placeholder='Search'
                    onChange={(e) => searchIt(e)}
                />
            </form>
            <div className='closeSearch' onClick={toggleSearchState}>X</div>
        </div>
    );
}

export default TopSearchContainer