import React from 'react';
import {Consumer} from '../App';

const SearchForm = props => {

    return (
        <Consumer>
            {value => {
                return (
                    <form className="from-inline my-2 my-md-0 ml-auto search" onSubmit = {e => value.onSubmit(e)}>
                        <input 
                            onChange = {event => value.onChange(event.target.value)} 
                            type="search" className="search__field" 
                            placeholder="Search over 1,000,000 recipes..." aria-label="Search"
                            value={value.query}
                        />
                        <input 
                            className="btn btn btn-secondary btn-sm" 
                            type="submit" value="Search" 
                        />
                    </form>
                );
            }}
        </Consumer>
    );
}

export default SearchForm;