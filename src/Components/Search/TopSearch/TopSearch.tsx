import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSearch } from '../../../Services/toggleSearchService';
import './TopSearch.css';

const TopSearchContainer = () => {

    const dispatch = useDispatch();
    const submitIt = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(value);
    }

    const toggleSearchState = () => {
        dispatch(toggleSearch(false));
    }

    return (
        <div className='top-search'>
            <p>Thirst Search</p>
            <input
                className='top-search-bar'
                type="text"
                placeholder='Search'
                onChange={submitIt}
            />
            <div className='closeSearch' onClick={toggleSearchState}>X</div>
        </div>
    );
}

export default TopSearchContainer