import { createReducer } from '@reduxjs/toolkit';
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
