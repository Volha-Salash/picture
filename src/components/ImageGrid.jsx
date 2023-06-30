import React, { Component } from "react";
import ImageCell from "./ImageCell";
import { connect } from "react-redux";
import "../index.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ErrorBoundary from "../helpers/ErrorBoundary";

class ImageGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
    imageSize: "small",
  };
}

  handleSizeChange = (e) => {
    this.setState({ imageSize: e.target.value });
  };

  render() {
    const { images } = this.props;
    const { imageSize } = this.state;

    return (
      <div className="image-grid">
        <ErrorBoundary>
        <div className="image-size-toggle">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="small"
                control={<Radio />}
                label="small"
                onChange={this.handleSizeChange}
              />
              <FormControlLabel
                value="large"
                control={<Radio />}
                label="large"
                onChange={this.handleSizeChange}
              />
            </RadioGroup>
          </FormControl>
        </div>
        </ErrorBoundary>
        <div
          className={`image-grid__container image-grid__container--${imageSize}`}
        ><ErrorBoundary>
          {images.images.map((image) => (
            <ImageCell key={image.id} image={image} />
          ))}
          </ErrorBoundary>
        </div>
        
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  images: state.images,
});

export default connect(mapStateToProps)(ImageGrid);
