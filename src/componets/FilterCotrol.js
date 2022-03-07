import React from 'react'

function FilterControl({ filterStatus, setFilterStatus }) {
    // console.log(filterStatus);

    const handleFilter = (status) => {
        setFilterStatus(status);
    }

    return (
        <div className="items-statuses">
            <div className="items-statuses__item" onClick={() => handleFilter('all')}>   All </div>
            <div className="items-statuses__item" onClick={() => handleFilter('active')}>   Active </div>
            <div className="items-statuses__item" onClick={() => handleFilter('completed')}>   Completed </div>
        </div>
    )
}

export default FilterControl