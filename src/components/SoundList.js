import React from 'react';
import { connect } from 'react-redux';
import Sound from './Sound';
import getVisibleSounds from '../selectors/sounds';

const SoundList = (props) => (
    <div>
        Sound List:
        <ul>
            {props.sounds.map(sound => {
                return (
                    <li key={sound.id}>
                        <Sound {...sound} />
                    </li>
                );
            })}
        </ul>
    </div>
);

const mapStateToProps = (state) => {
    return {
        sounds: getVisibleSounds(state.sounds, state.filters)
    };
}

export default connect(mapStateToProps)(SoundList);