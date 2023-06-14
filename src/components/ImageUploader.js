import React, { Component } from "react";
import { connect } from "react-redux";
import { addImage } from "../actions";
import axios from "axios";
import Button from "@mui/material/Button";
import { MuiFileInput } from "mui-file-input";
import TextField from "@mui/material/TextField";

const MyComponent = () => {
  const [file, setFile] = React.useState(null);

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  return <MuiFileInput value={file} onChange={handleChange} />;
};

class ImageUploader extends Component {
  state = {
    selectedFiles: [],
  };

  fileSelectedHandler = (event) => {
    const files = Array.from(event.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));

    // Dispatch the addImage action to store new images
    this.props.addImage(urls);
  };

  fileUploadHandler = async () => {
    const fileInput = document.getElementById("file");

    // Check if a file has been selected
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const formData = new FormData();
      formData.append("file", fileInput.files[0]);

      try {
        const response = await axios.post("/upload", formData);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("No file selected");
    }
  };

  render() {
    return (
      <div>
        <TextField type="file" multiple onChange={this.fileSelectedHandler} />
        <Button onClick={this.fileUploadHandler}>Upload</Button>
      </div>
    );
  }
}

export default connect(null, { addImage })(ImageUploader);
