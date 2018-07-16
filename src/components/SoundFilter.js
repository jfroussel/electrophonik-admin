import React from 'react';
import { connect } from 'react-redux';
import { filterText, sortBy } from '../actions/filters';

class SoundFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {
        return (
            <div style={{ marginBottom: 15 }}>
                <input type='text' placeholder='search'
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(filterText(e.target.value));
                    }}></input>

                sorted By:
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        this.props.dispatch(sortBy(e.target.value));
                    }}>
                    <option value='none'>---</option>
                    <option value='title'>Title</option>
                    <option value='published'>Published</option>
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(SoundFilters);

