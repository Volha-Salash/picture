/*import { createAction } from '@reduxjs/toolkit';

export const addImage = createAction('images/add');
export const editImage = createAction('images/edit', 
(id, name) => (
  { 
    payload: { id, name } 
}));
*/
import { createAsyncThunk } from "@reduxjs/toolkit";

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
    const response = await fetch(`/api/image/updateName/${id}`, {
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

export const deleteImage = createAsyncThunk(
  'images/deleteImage',
  async ({ id, deleteImage }) => {
    const response = await fetch(`/api/image/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(deleteImage),
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    const data = await response.json();
    return {id, deleteImage: data};
  }
);
