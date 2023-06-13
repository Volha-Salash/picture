import React, { Component } from 'react';
import ImageCell from './ImageCell';
import { connect } from 'react-redux';
import '../index.css';


class ImageGrid extends Component {
  state = {
    imageSize: "small"
  };

  handleSizeChange = e => {
    this.setState({ imageSize: e.target.value });
  };

  render() {
    const { images } = this.props;
    const { imageSize } = this.state;

    return (
      <div className="image-grid">
        <div className="image-size-toggle">
          <label>
            <input
              type="radio"
              value="small"
              checked={imageSize === "small"}
              onChange={this.handleSizeChange}
            />
            Small
          </label>
          <label>
            <input
              type="radio"
              value="large"
              checked={imageSize === "large"}
              onChange={this.handleSizeChange}
            />
            Large
          </label>
        </div>
        <div className={`image-grid__container image-grid__container--${imageSize}`}>
          {images.map(image => (
            <ImageCell key={image.id} image={image} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps)(ImageGrid);
