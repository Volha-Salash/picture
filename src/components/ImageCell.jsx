import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImages, editImage, deleteImage } from "../actions";
import "../index.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



class ImageCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
    editing: false,
    name: this.props.image.name,
  };
}


  onEditButtonClick = () => {
    this.setState({ editing: true });
  };


  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };


  onKeyDown = (event) => {
    if (event.key === "Enter") {
      this.onSave();
    }
  };


  onSave = async () => {
    const { image, editImage } = this.props;
    const { name } = this.state;

    if (name === image.name) {
      this.setState({ editing: false });
      return;
    }
    try {
      await editImage({
        id: image.id,
        newName: name
      });

      this.setState({ editing: false });
      console.log('editImage()');
    } catch (error) {
      console.log(error);
    }
  };


  handleDeleteImage = async (id) => {
    try {
      await this.props.deleteImage(id);
      console.log('deleteImage()');
      await this.props.fetchImages();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  }


  render() {
    const { image } = this.props;
    const { editing, name } = this.state;

    const imageUrl = image ? `https://localhost:5290/images/${image.url}` : "";

    return (
      <div className="image-cell">
        <div style={{ display: "block", flexDirection: "column" }}>
          <img style={{ height: "200px" }} src={imageUrl} alt={name} />
          {editing ? (
            <TextField
              id="standard-basic"
              label="Picture name"
              variant="standard"
              type="text"
              value={name}
              onChange={this.onNameChange}
              onBlur={this.onSave}
              onKeyDown={this.onKeyDown}
            />
          ) : (
            <span>{name}</span>
          )}
          <div style={{ display: "flex" }}>
            <Button
              sx={{ width: "100px", marginRight: "20px" }}
              variant="outlined" startIcon={<EditIcon />}
              onClick={this.onEditButtonClick}
            >
              {editing ? "Save" : "Edit"}
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}
              onClick={() => this.handleDeleteImage(this.props.image.id)}>
              Delete
            </Button>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchImages, editImage, deleteImage })(ImageCell);
