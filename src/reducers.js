/*import { createReducer } from '@reduxjs/toolkit';
import { addImage, editImage } from './actions';

let id = 0;

const imagesReducer = createReducer([], builder => {
  builder
    .addCase(addImage, (state, action) => {
      const images = action.payload.map(url => ({ id: id++, url, name: '' }));
      state.push(...images);
    })
    .addCase(editImage, (state, action) => {
      const { id, name } = action.payload;
      const image = state.find(image => image.id === id);
      image.name = name;
    });
});

export default imagesReducer;
*/
import { createReducer } from '@reduxjs/toolkit';
import {fetchImages,uploadImage,editImage, deleteImage} from './actions';

const initialState = {
  images: [],
  isLoading: false,
  error: null,
};

const imagesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchImages.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchImages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.images = action.payload;
    })
    .addCase(fetchImages.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    })
    .addCase(uploadImage.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(uploadImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.images.push(action.payload);
    })
    .addCase(uploadImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    })
    .addCase(editImage.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(editImage.fulfilled, (state, action) => {
      state.isLoading = false;
      const updatedImage = action.payload;
      const index = state.images.findIndex((image) => image.id === updatedImage.id);
      if (index !== -1) {
        state.images[index] = updatedImage;
      }
    })
    .addCase(editImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    })
    .addCase(deleteImage.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteImage.fulfilled, (state, action) => {
      state.isLoading = false;
      const id = action.payload;
      const index = state.images.findIndex((image) => image.id === id);
      if (index !== -1) {
        state.images.splice(index, 1);
      }
    })
    .addCase(deleteImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
});

export default imagesReducer;