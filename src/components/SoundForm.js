import React from 'react';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Genres from './Genres'
import Moods from './Moods'
import Tones from './Tones'
import Instruments from './Instruments'
import Upload from './Upload'


export default class SoundForm extends React.Component {
    constructor(props) {
        super(props)
        this.onTitleChange = this.onTitleChange.bind(this)
        this.onFilenameChange = this.onFilenameChange.bind(this)
        this.onAuthorChange = this.onAuthorChange.bind(this)
        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onBpmChange = this.onBpmChange.bind(this)
        this.onToneChange = this.onToneChange.bind(this)
        this.onLenghtChange = this.onLenghtChange.bind(this)
        this.onGenresChange = this.onGenresChange.bind(this)
        this.onMoodsChange = this.onMoodsChange.bind(this)
        this.onLoopsChange = this.onLoopsChange.bind(this)
        this.onInstrumentsChange = this.onInstrumentsChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
       

        this.state = {
           
            title: props.sound ? props.sound.title : '',
            filename: props.sound ? props.sound.filename :'',
            author: props.sound ? props.sound.author : '',
            description: props.sound ? props.sound.description : '',
            bpm: props.sound ? props.sound.bpm : '',
            tone: props.sound ? props.sound.tone : '',
            lenght: props.sound ? props.sound.lenght : '',
            genres: props.sound ? props.sound.genres : '',
            moods: props.sound ? props.sound.moods : '',
            loops: props.sound ? props.sound.loops : '',
            instruments: props.sound ? props.sound.instruments : '',
            error: ''
        };
    }

    
    componentWillMount() {
        console.log('component will mount : ',this)
        
    }
    componentWillUpdate() {
        console.log('component will update : ',this.props)
        
    }

    componentDidMount() {
        console.log('component did mount : ',this.props)

    }

    componentDidUpdate() {
        console.log('component did update : ',this.props)

    }

    componentWillReceiveProps() {
        console.log('component will receive props : ',this.props)

    }

    

    onTitleChange(e) {
        const title = e.target.value
        this.setState(() => ({ title: title }))
    }
    onFilenameChange(e) {
        const filename = e.target.value
        this.setState(() => ({ filename: filename }))
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

    onToneChange(tone) {
        this.setState(() => ({ tone: tone }))
    }
    onLenghtChange(e) {
        const lenght = e.target.value
        this.setState(() => ({ lenght: lenght }))
    }

    onLoopsChange(e) {
        const loops = parseInt(e.target.value, 10)
        this.setState(() => ({ loops: loops }))
    }

    onGenresChange = (genres) => {
        this.setState({ genres })

    }

    onMoodsChange = (moods) => {
        this.setState({ moods });
    }

    onInstrumentsChange = (instruments) => {
        this.setState({ instruments });
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
                    filename: this.state.filename ? this.state.filename : '',
                    author: this.state.author,
                    description: this.state.description,
                    bpm: this.state.bpm,
                    tone: this.state.tone,
                    lenght: this.state.lenght,
                    genres: this.state.genres ? this.state.genres : '',
                    moods: this.state.moods ? this.state.moods : '',
                    loops: this.state.loops ? this.state.loops : '',
                    instruments: this.state.instruments ? this.state.instruments : '',
                }
            );
        }
    }

    render() {
        return (
            <div className="pt-5">
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group col-6">
                        <label>Titre</label>
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
                    </div>
                    <div className="form-group col-6">
                        <label>Auteur</label>
                        <input
                            type="text"
                            className="form-control"
                            id="auteur"
                            aria-describedby="auteurHelp"
                            placeholder="Auteur"
                            value={this.state.author}
                            onChange={this.onAuthorChange}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label>Nom du fichier</label>
                        <input
                            type="text"
                            className="form-control"
                            id="filename"
                            aria-describedby="filenameHelp"
                            placeholder="Nom du fichier"
                            value={this.state.filename}
                            onChange={this.onFilenameChange}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label>Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            placeholder="description"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        ></textarea>
                    </div>
                    <div className="row col-6">

                        <div className="form-group col-2">
                            <label>Bpm</label>
                            <input
                                type="number"
                                className="form-control"
                                id="BPM"
                                aria-describedby="BPMHelp"
                                value={this.state.bpm ? this.state.bpm : 0}
                                onChange={this.onBpmChange}
                            />
                        </div>
                        <div className="form-group col-2">
                            <label>Durée</label>
                            <input
                                type="number"
                                className="form-control"
                                id="lenght"
                                placeholder="0.01"
                                step="0.01"
                                min="0"
                                max="10"
                                aria-describedby="LenghtHelp"
                                value={this.state.lenght}
                                onChange={this.onLenghtChange}

                            />
                        </div>
                        <div className="form-group col-2">
                            <label>Nombre de boucles</label>
                            <input
                                type="number"
                                className="form-control"
                                id="loops"
                                aria-describedby="LoopsHelp"
                                value={this.state.loops ? this.state.loops : 0}
                                onChange={this.onLoopsChange}
                            />
                        </div>
                        <div className="form-group col-2">
                            <label>Tone</label>
                            <Select
                                name="tones"
                                placeholder="Selectionner tonalité"
                                multi={false}
                                value={this.state.tone}
                                onChange={this.onToneChange}
                                options={Tones}
                            />
                        </div>
                        <div className="form-group col-3">
                            <label>Track</label>
                            <Upload author={this.state.author} filename={this.state.filename}/>
                        </div>
                    </div>
                    <div className="row col-6">
                        <div className="form-group col-4">
                            <label>Genres</label>
                            <Select
                                name="genres"
                                placeholder="Selectionner le(s) genre(s)"
                                multi={true}
                                value={this.state.genres}
                                onChange={this.onGenresChange}
                                options={Genres}
                            />
                        </div>

                        <div className="form-group col-4">
                            <label>Ambiances</label>
                            <Select
                                name="moods"
                                placeholder="Selectionner le(s) ambiance(s)"
                                multi={true}
                                value={this.state.moods}
                                onChange={this.onMoodsChange}
                                options={Moods}
                            />
                        </div>
                        <div className="form-group col-4">
                            <label>Instruments</label>
                            <Select
                                name="instruments"
                                placeholder="Selectionner le(s) instruments(s)"
                                multi={true}
                                value={this.state.instruments}
                                onChange={this.onInstrumentsChange}
                                options={Instruments}
                            />
                        </div>
                        <div className="row col-6">
                            <button type="submit" className="btn btn-lg btn-primary">Enregistrer</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}