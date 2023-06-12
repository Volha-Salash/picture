import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchImages } from '../actions';

class ImageList extends Component {
  componentDidMount() {
    this.props.fetchImages(); 
  }

  renderImages() {
 return this.props.images.map(image => {
      return (
        <img key={image.id} src={image.url} />
      );
    });
  }

  render() {
    return (
      <>
        {this.renderImages()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images
  };
}

const mapDispatchToProps = dispatch => {
  return({ fetchImages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
