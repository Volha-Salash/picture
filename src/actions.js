/*import { createAction } from '@reduxjs/toolkit';

export const addImage = createAction('images/add');
export const editImage = createAction('images/edit', 
(id, name) => (
  { 
    payload: { id, name } 
}));
*/
import { createAsyncThunk} from "@reduxjs/toolkit";

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async () => {
    const response = await fetch('/api/image');
    const data = await response.json();
    return data;
  }
);

export const uploadImage = createAsyncThunk(
  'images/uploadImage',
  async (image) => {
    const response = await fetch('/api/image', {
      method: 'POST',
      body: JSON.stringify(image),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
);

export const editImage = createAsyncThunk(
  'images/editImage',
  async ({ id, updatedImage }) => {
    const response = await fetch(`/api/imageupdateName/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedImage),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return { id, updatedImage: data };
  }

);
