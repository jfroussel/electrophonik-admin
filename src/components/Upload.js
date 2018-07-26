import React, { Component } from 'react';
import firebase from 'firebase';
//import FileUploader from 'react-firebase-file-uploader';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            avatar: '',
            isUploading: false,
            progress: 0,
            avatarURL: '',
            filename: ''
            
        }
    }
    



    notifySuccess = (message) => toast.info("Le morceau : " + message + "a bien été téléchargé !");
    notifyError = (message) => toast.error(message);
    handleChangeUsername = (event) => this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = (progress) => this.setState({ progress });
    handleUploadError = (error) => {
        this.setState({ isUploading: false });
        this.notifySuccess(error)
    }
    handleUploadSuccess = (filename,props) => {
        this.setState({ avatar: filename, filename: filename, progress: 100, isUploading: false });
        firebase.storage().ref(this.props.author).child(filename).getDownloadURL().then(url => this.setState({ avatarURL: url }));
        
        this.notifySuccess(filename)
    };

    render() { 
        return (
            <div>
                {this.state.isUploading &&
                   <Progress percent={this.state.progress}  />
                  
                }
                Filename : {this.state.filename}

                
                <CustomUploadButton
                    accept="image/audio/*"
                    name="avatar"
                    //randomizeFilename
                    storageRef={firebase.storage().ref(this.props.author)}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                    style={{ backgroundColor: 'gray',cursor:'pointer', color: 'white', padding: 10, borderRadius: 4 }}
                >
                    Télécharger
                </CustomUploadButton>
                <ToastContainer />
            </div>
            
        );
        
    }
}

export default Upload