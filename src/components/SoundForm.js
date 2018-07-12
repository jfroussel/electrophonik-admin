import React from 'react';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Genres from './Genres'
import Moods from './Moods'


export default class SoundForm extends React.Component {
    constructor(props) {
        super(props)
        this.onTitleChange = this.onTitleChange.bind(this)
        this.onAuthorChange = this.onAuthorChange.bind(this)
        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onBpmChange = this.onBpmChange.bind(this)
        this.onGenresChange = this.onGenresChange.bind(this)
        this.onMoodsChange = this.onMoodsChange.bind(this)
        this.onLoopsChange = this.onLoopsChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        


        this.state = {
            title: props.sound ? props.sound.title : '',
            author: props.sound ? props.sound.author : '',
            description: props.sound ? props.sound.description : '',
            bpm: props.sound ? props.sound.bpm : '',
            genres: props.sound ? props.sound.genres : '',
            moods: props.sound ? props.sound.moods : '',
            loops: props.sound ? props.sound.loops : '',
            error: ''
        };
    }

    onTitleChange(e) {
        const title = e.target.value
        this.setState(() => ({ title: title }))
    }

    onAuthorChange(e) {
        const author = e.target.value
        this.setState(() => ({ author: author }))
    }

    onDescriptionChange(e) {
        const description = e.target.value
        this.setState(() => ({ description: description }))
    }

    onBpmChange(e) {
        const bpm = parseInt(e.target.value, 10)
        this.setState(() => ({ bpm: bpm }))
    }

    onLoopsChange(e) {
        const loops = parseInt(e.target.value, 10)
        this.setState(() => ({ loops: loops }))
    }

    onGenresChange = (genres) => {
        this.setState({ genres })
        // selectedOption can be null when the `x` (close) button is clicked
        if (genres) {
            console.log(`Selected: ${genres[0].value}`);
        }
    }

    onMoodsChange = (moods) => {
        this.setState({ moods });
        // selectedOption can be null when the `x` (close) button is clicked
        if (moods) {
            console.log(`Selected: ${moods[0].value}`);
        }
    }


    onSubmit(e) {
        e.preventDefault()

        if (!this.state.title || !this.state.author) {
            this.setState(() => ({ error: 'Please set title & author & published!' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmitSound(
                {
                    title: this.state.title,
                    author: this.state.author,
                    description: this.state.description,
                    bpm: this.state.bpm,
                    genres: this.state.genres,
                    moods: this.state.moods,
                    loops: this.state.loops,
                }
            );

            console.log(this.props.onSubmitSound)
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}

                <form onSubmit={this.onSubmit}>
                    <div className="form-group col-6">
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            aria-describedby="emailHelp"
                            placeholder="Titre"
                            autoFocus
                            value={this.state.title}
                            onChange={this.onTitleChange}
                        />
                        <small id="titleHelp" className="form-text text-muted">Saisir le titre du morceau</small>
                    </div>
                    <div className="form-group col-6">
                        <input
                            type="text"
                            className="form-control"
                            id="auteur"
                            aria-describedby="auteurHelp"
                            placeholder="Auteur"
                            value={this.state.author}
                            onChange={this.onAuthorChange}
                        />
                        <small id="auteurHelp" className="form-text text-muted">Saisir l'auteur du morceau Nom/prenom ou pseudo</small>
                    </div>
                    <div className="form-group col-6">
                        <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            placeholder="description"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        ></textarea>
                        <small id="descriptionHelp" className="form-text text-muted">Description detaillée du morceau</small>
                    </div>
                    <div className="form-group col-6">
                        <input
                            type="text"
                            className="form-control"
                            id="BPM"
                            aria-describedby="BPMHelp"
                            placeholder="Saisir le tempo du morceau"
                            value={this.state.bpm ? this.state.bpm : 0}
                            onChange={this.onBpmChange}
                        />
                        <small id="auteurHelp" className="form-text text-muted">Saisir le BPM du titre</small>
                    </div>
                    <div className="form-group col-6">
                        <input
                            type="text"
                            className="form-control"
                            id="loops"
                            aria-describedby="LoopsHelp"
                            placeholder="Combien de boucle(s) disponibles pour ce morceaux"
                            value={this.state.loops ? this.state.loops : 0}
                            onChange={this.onLoopsChange}
                        />
                        <small id="auteurHelp" className="form-text text-muted">Saisir le BPM du titre</small>
                    </div>
                    <div className="form-group col-6">
                        <Select
                            name="genres"
                            placeholder="Selectionner le(s) genre(s)"
                            multi={true}
                            value={this.state.genres}
                            onChange={this.onGenresChange}
                            options={Genres}
                        />
                    </div>

                    <div className="form-group col-6">
                        <Select
                            name="moods"
                            placeholder="Selectionner le(s) ambiance(s)"
                            multi={true}
                            value={this.state.moods}
                            onChange={this.onMoodsChange}
                            options={Moods}
                        />
                    </div>


                    <button type="submit" className="btn btn-primary">Ajouter le morceau</button>
                </form>
            </div>
        );
    }
}