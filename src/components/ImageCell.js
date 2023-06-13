import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editImage } from '../actions';
import '../index.css';

class ImageCell extends Component {
  state = {
    editing: false,
    name: this.props.image.name,
  };

  onEditButtonClick = () => {
    this.setState({ editing: true });
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onKeyDown = event => {
    if (event.key === 'Enter') {
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

  render() {
    const { image } = this.props;
    const { editing, name } = this.state;

    return (
      <div className="image-cell">
        {editing ? (
          <input
            type="text"
            value={name}
            onChange={this.onNameChange}
            onBlur={this.onSave}
            onKeyDown={this.onKeyDown}
          />
        ) : (
          <span>{name}</span>
        )}
        < img src ={image.url} alt={name} />
        <button  onClick={this.onEditButtonClick}>{editing ? 'Save' : 'Edit'}</button>
        {editing && <button onClick={this.onCancel}>Cancel</button>}
      </div>
    );
  }
}

export default connect(null, { editImage })(ImageCell);
