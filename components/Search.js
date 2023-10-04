import React from "react";
import { MdSearch } from "react-icons/md";
export default function({handleSearchChange}){
    
    return(
        <div className="search">
            <MdSearch className="search-icons"size="1.3em"/>
            <input type="text" placeholder="type for search ..." onChange={handleSearchChange}/>
        </div>
    );
}