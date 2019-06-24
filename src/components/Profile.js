import React, { Component } from "react"
import firebase from "firebase"
import FileUploader from "react-firebase-file-uploader"
import { observer, inject } from 'mobx-react';
import "../style/Profile.css"


const config = {
    apiKey: "AIzaSyCjqCVuupOwPA817kGFYCIC4Chlj7IYpkw",
    authDomain: "pharmacy-5c136.firebaseapp.com",
    databaseURL: "https://pharmacy-5c136.firebaseio.com",
    projectId: "pharmacy-5c136",
    storageBucket: "pharmacy-5c136.appspot.com",
    messagingSenderId: "988721806507",
    appId: "1:988721806507:web:d0a177d820d91088"
};
firebase.initializeApp(config);


@inject("generalStore")
@observer

class Profile extends Component {
    state = {
        username: "",
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: ""
    };

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });

    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };

    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.props.generalStore.currentUser.pic = url);
    };

    render() {
        console.log(this.state.avatarURL)
        let generalStore = this.props.generalStore

        return (
            <div>
                <ul class="collection">
                    <li className="collection-item avatar">
                        <img className="profilePic" src={generalStore.currentUser.pic} alt="" class="circle" />
                        <span class="title">{generalStore.currentUser.firstName}</span>
                    </li>
                    <li class="collection-item">Email : {generalStore.currentUser.email}</li>
                    <li class="collection-item">
                        <form>
                            Upload Profile Pic 
                            <br></br>
                            <br></br>
                            {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                            {this.state.avatarURL && <img src={this.state.avatarURL} />}
                            <FileUploader
                                accept="image/*"
                                name="avatar"
                                randomizeFilename
                                storageRef={firebase.storage().ref("images")}
                                onUploadStart={this.handleUploadStart}
                                onUploadError={this.handleUploadError}
                                onUploadSuccess={this.handleUploadSuccess}
                                onProgress={this.handleProgress}
                            />
                        </form>
                    </li>
                </ul>

            </div>
        );
    }
}

export default Profile;