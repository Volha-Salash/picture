import React, { Component } from "react";
import { connect } from "react-redux";
import { editImage, deleteImage } from "../actions";
import "../index.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

class ImageCell extends Component {
  state = {
    editing: false,
    name: this.props.image.name,
  };

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

  onSave = () => {
    const { image } = this.props;
    const { name } = this.state;

    // Dispatch the editImage action to update an image's name
    this.props.editImage(image.id, name);

    this.setState({ editing: false });
  };

  onCancel = () => {
    this.setState({ editing: false, name: this.props.image.name });
  };

  handleDeleteImage = (id) => {
    this.props.deleteImage(id);
  };

  render() {
    const { image } = this.props;
    const { editing, name } = this.state;

    return (
      <div className="image-cell">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img style={{ height: "200px" }} src={image.url} alt={name} />
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
              variant="outlined"
              onClick={this.onEditButtonClick}
            >
              {editing ? "Save" : "Edit"}
            </Button>
            <Button 
            sx={{ width: "100px", marginRight: "20px" }}
            variant="outlined"
            onClick={this.handleDeleteImage}>Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { editImage, deleteImage })(ImageCell);
