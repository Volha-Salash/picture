import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchImages,
  uploadImage,
  editImage,
  deleteImage
} from "../actions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: [],
    };
  }

  componentDidMount() {
    console.log('fetchImages() in componentDidMount()');
    this.props.fetchImages();
  }

  handleChange(event) {
    const { uploadImage } = this.props;
    uploadImage(event);
    console.log('uploadImage()');
  }

  render() {
    return (
      <div>
        <TextField
          id="outlined" variant="outlined"
          type="file" onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default connect(null, { fetchImages, uploadImage, editImage, deleteImage })(ImageUploader);
