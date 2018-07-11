import React from 'react';
import SoundForm from './SoundForm';
import { connect } from 'react-redux';
import { editSound } from '../actions/sounds';

const EditSound = (props) => (
    <div className='container__box'>
        <SoundForm
            sound={props.sound}
            onSubmitSound={(sound) => {
                props.dispatch(editSound(props.sound.id, sound));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        sound: state.sounds.find((sound) =>
            sound.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditSound);