import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeSound } from '../actions/sounds';

const style = {
    subComponent: {
        border: 'solid 1px #6c757d',
        padding: '10px 10px',
        fontWeight: '200',
        color: '#fff'
    },

}

const Sound = ({ id, title, filename, description, author, bpm, loops, moods, genres, dispatch }) => (

    <div>
        <Link to={`/sound/${id}`}>
            <h4>{title} ({loops})</h4>
        </Link>
        <p>Author: {author}</p>
        {description && <p>{description}</p>}
        <button onClick={() => {
            dispatch(removeSound({ id }))
        }}>Remove</button>
    </div>

);

export default connect()(Sound);