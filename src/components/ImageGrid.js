import React, { Component } from 'react';
import ImageCell from './ImageCell';
import { connect } from 'react-redux';

class ImageGrid extends Component {
  render() {
    const { images } = this.props;

    return (
      <div className="image-grid">
        {images.map(image => (
          <ImageCell key={image.id} image={image} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps)(ImageGrid);
