import React from 'react'

function FilterControl({filterStatus, setFilterStatus}) {

    const handleFilter = (e) => {
        setFilterStatus(e.target.innerText.toLowerCase());
    }

    return (
        <div className="items-statuses">
            <div className="items-statuses__item active" onClick={handleFilter}>   All </div>
            <div className="items-statuses__item" onClick={handleFilter}>   Active </div>  
            <div className="items-statuses__item" onClick={handleFilter}>   Completed </div>
        </div>
    )
}

// function FilterCotrol() {
//     return (
//         <div className="items-statuses">
//             <div className="items-statuses__item active">   All </div>
//             <div className="items-statuses__item">   Active </div>  
//             <div className="items-statuses__item">   Completed </div>
//         </div>
//     )
// }

export default FilterControl