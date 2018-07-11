import React from 'react';
import SoundForm from './SoundForm';
import { connect } from 'react-redux';
import { addSound } from '../actions/sounds';

const AddSound = (props) => (
    <div>
        <h3>Set Sound information:</h3>
        <SoundForm
            onSubmitBook={(sound) => {
                props.dispatch(addSound(sound));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddSound);
