import React, { Component } from 'react';
import { Toolbar } from '../Toolbar/Toolbar.jsx';
import { ProjectList } from '../ProjectList/ProjectList.jsx';
import { dataDisplay, filters } from '../data.js';
import './Portfolio.css';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'All'
        };
        this.onSelectFilter = this.onSelectFilter.bind(this);
    }

    onSelectFilter(filter) {
        this.setState({ selected: filter });
    }

    render() {
        const { selected } = this.state;
        const projects = selected === 'All'
            ? dataDisplay
            : dataDisplay.filter(project => project.category === selected);

        return (
            <div className="portfolio">
                <Toolbar
                    filters={filters}
                    selected={selected}
                    onSelectFilter={this.onSelectFilter}
                />
                <ProjectList projects={projects} />
            </div>
        );
    }
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

if (document.getElementById('root')) {
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <Portfolio />
        </StrictMode>,
    );
}
