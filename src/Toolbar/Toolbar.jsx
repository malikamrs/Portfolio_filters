import React from 'react';
import './Toolbar.css';

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
    return (
        <div className="toolbar">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={`toolbar-btn ${selected === filter ? 'active' : ''}`}
                    onClick={() => onSelectFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};
