import React, { useState } from "react";

function Search({handleSearchChange, searchValue}) {


    return (
        <div>
            <form className="search-plants">
                <input type="text" placeholder="Search plants..." value={searchValue} onChange={handleSearchChange}/>
            </form>
        </div>
    )

}

export default Search