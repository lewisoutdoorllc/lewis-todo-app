import React from 'react'

function FilterControl({ filterStatus, setFilterStatus }) {
    // console.log(filterStatus);

    const handleFilter = (status) => {
        setFilterStatus(status);
    } 

    return (
        <div className="items-statuses">
            <div className="items-statuses__item active" onClick={() => handleFilter('all')}>   All </div>
            <div className="items-statuses__item" onClick={() => handleFilter('active')}>   Active </div>
            <div className="items-statuses__item" onClick={() => handleFilter('completed')}>   Completed </div>
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