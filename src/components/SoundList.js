import React from 'react';
import { connect } from 'react-redux';
import Sound from './Sound';
import getVisibleSounds from '../selectors/sounds';
import { Link } from 'react-router-dom';
import { removeSound } from '../actions/sounds';

const SoundList = (props) => (
    <div className="pt-5">

        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Titre</th>
                    <th scope="col">Auteur</th>
                    <th scope="col">BPM</th>
                    <th scope="col">Durée</th>
                    <th scope="col">Loops</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>

                </tr>
            </thead>
            <tbody>
                {props.sounds.map(sound => {

                    return (

                        <tr key={sound.id} >

                            <td>{sound.title}</td>
                            <td>{sound.author}</td>
                            <td>{sound.bpm}</td>
                            <td></td>
                            <td>{sound.loops}</td>
                            <td>{sound.description}</td>
                            <td>
                                <Link to={`/sound/${sound.id}`} className="text-primary">Editer</Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>


    </div>
);

const mapStateToProps = (state) => {
    return {
        sounds: getVisibleSounds(state.sounds, state.filters)
    };
}



export default connect(mapStateToProps)(SoundList);