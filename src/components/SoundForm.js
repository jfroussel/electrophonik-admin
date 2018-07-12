import React from 'react';

export default class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onAuthorChange = this.onAuthorChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onBpmChange = this.onBpmChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: props.sound ? props.sound.title : '',
            author: props.sound ? props.sound.author : '',
            description: props.sound ? props.sound.description : '',
            bpm: props.sound ? props.sound.bpm : 0,

            error: ''
        };
    }

    onTitleChange(e) {
        const title = e.target.value;
        this.setState(() => ({ title: title }));
    }

    onAuthorChange(e) {
        const author = e.target.value;
        this.setState(() => ({ author: author }));
    }

    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({ description: description }));
    }

    onBpmChange(e) {
        const bpm = parseInt(e.target.value, 10);
        this.setState(() => ({ bpm: bpm }));
    }

    

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.title || !this.state.author) {
            this.setState(() => ({ error: 'Please set title & author & published!' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitBook(
                {
                    title: this.state.title,
                    author: this.state.author,
                    description: this.state.description,
                    bpm: this.state.bpm,
                }
            );
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
                            type="number"
                            className="form-control"
                            id="BPM"
                            aria-describedby="BPMHelp"
                            value={this.state.bpm}
                            onChange={this.onBpmChange}
                        />
                        <small id="auteurHelp" className="form-text text-muted">Saisir le BPM du titre</small>
                    </div>

                    
                    <button type="submit" className="btn btn-primary">Ajouter le morceau</button>
                </form>
            </div>
        );
    }
}