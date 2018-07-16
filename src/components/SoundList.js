import React from 'react'
import { connect } from 'react-redux'
//import Sound from './Sound'
import getVisibleSounds from '../selectors/sounds'
import { Link } from 'react-router-dom';
import { removeSound } from '../actions/sounds'
import ReactTable from "react-table"
import "react-table/react-table.css"
import Album from '../assets/logo.png'
import AudioFixture from '../assets/audio/audioTest.mp3'
import ReactAudioPlayer from 'react-audio-player'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css' 

const style = {
    subComponent: {
        border: 'solid 1px #6c757d',
        padding: '10px 10px',
        fontWeight: '200',
        color: '#fff'
    },
    header: {
        textAlign: 'left',
        color: '#ffffff',
        backgroundColor: '#000'
    }

}

const SubComponent = () => {
    return (
        <div className="row" style={style.subComponent}>
            <div className="col-2">
                <img src={Album} alt="album" width="200px" />
            </div>
            <div className="col-4">
                Title : Across The Border <br />
                Tags : jazz, blues, rock <br />
                loops details : details des boucles disponiblent <br />
            </div>
            <div className="col-4">
                <ReactAudioPlayer
                    src={AudioFixture}
                    autoPlay
                />
            </div>
            <div className="col-2">
                tune actions
            </div>
        </div>
    )
}

const editRow = (value) => {
    console.log(value.original.id)
}
const remove = () => {
    confirmAlert({
      title: 'Confirmation de suppression',
      message: 'Etes vous certain de vouloir supprimer définitivement ce morceau ?',
      buttons: [
        {
          label: 'Oui',
          onClick: () => console.log('le morceau a été supprimé')
        },
        {
          label: 'Non',
          onClick: () => console.log('la suppression a été annulée !')
        }
      ]
    })
  };


const SoundList = (props) => (
    <div className="pt-5">

        <div>
            <ReactTable
                data={props.sounds}
                columns={[
                    {

                        columns: [
                            {
                                expander: true,
                                width: 65,
                                Expander: ({ isExpanded, ...rest }) =>
                                    <div>
                                        {isExpanded
                                            ? <span>&#x229D;</span>
                                            : <span>&#x2295;</span>}
                                    </div>,
                                style: {
                                    cursor: "pointer",
                                    fontSize: 25,
                                    padding: "0",
                                    textAlign: "left",
                                    userSelect: "none"
                                },
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                accessor: "play",
                                width: 25
                            },
                            {
                                Header: "Title",
                                accessor: "title",
                                minWidth: 300,
                            },
                            {
                                Header: "Author",
                                accessor: "author",

                            },

                            {
                                Header: "BPM",
                                accessor: "bpm",

                            },
                            {
                                Header: "Lenght",
                                accessor: "lenght",

                            },
                            {
                                Header: "Loops",
                                accessor: "loops",
                                style: {
                                    cursor: "pointer",
                                    textAlign: "left",

                                },
                            },
                            {
                                Header: "Description",
                                accessor: "description",

                            },
                            {

                                id: 'edit',
                                Cell: (({ original }) => <Link to={`/sound/${original.id}`} className="btn btn-primary">Edit</Link>),
                              
                            },
                            {

                                id: 'delete',
                                Cell: (({ original }) => <button onClick={remove}>Delete</button>),
                                
                            },

                        ]
                    },
                ]}
                defaultPageSize={10}
                headerStyle={style.header}
                sortable={true}
                noDataText="No data found !"
                className="-striped -highlight"
                SubComponent={() => <div style={{ padding: '10px' }}><SubComponent /></div>}
            />
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        sounds: getVisibleSounds(state.sounds, state.filters)
    };
}

export default connect(mapStateToProps)(SoundList);