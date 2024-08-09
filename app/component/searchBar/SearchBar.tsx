"use client";
import searchBarStyles from './SearchBar.module.css';

interface SearchBarProps {
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className={searchBarStyles['search-bar-wrap']}>
                <input type='search' className={searchBarStyles['search-bar-input']} placeholder='Search in here' />
                <img className={searchBarStyles['search-bar-icon']} src='/searchBar/magnifying-glass.svg' alt='Magnifying glass icon' />
                <img className={searchBarStyles['shopping-cart-icon']} src='/searchBar/shopping-cart.svg' alt='Shopping cart icon' />
            </div>
        </div>
    )
}

export default SearchBar;