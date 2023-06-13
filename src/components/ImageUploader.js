import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage } from '../actions';
import axios from 'axios';

class ImageUploader extends Component {
    state = {
        selectedFiles: [],
    };

    fileSelectedHandler = event => {
        const files = Array.from(event.target.files);
        const urls = files.map(file => URL.createObjectURL(file));

        // Dispatch the addImage action to store new images
        this.props.addImage(urls);
    };

    fileUploadHandler = async () => {
        const fileInput = document.getElementById('file');

        // Check if a file has been selected
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
            const formData = new FormData();
            formData.append('file', fileInput.files[0]);

            try {
                const response = await axios.post('/upload', formData);
                console.log(response);

            } catch (error) {

                console.error(error);
            }
        } else {

            console.error('No file selected');
        }
    };

 

    render() {
        return (
            <div>
                < input type="file" multiple onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        );
    }
}

export default connect(null, { addImage })(ImageUploader);
