import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeSound } from '../actions/sounds';

const Sound = ({ id, title, description, author, published, dispatch }) => (
    <div>
        <Link to={`/sound/${id}`}>
            <h4>{title} ({published})</h4>
        </Link>
        <p>Author: {author}</p>
        {description && <p>{description}</p>}
        <button onClick={() => {
            dispatch(removeSound({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(Sound);