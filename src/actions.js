import { createAsyncThunk } from "@reduxjs/toolkit";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

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
  async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("Name", file.name);
      formData.append("Image", file, file.name);
      const response = await fetch("/api/image", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      console.log(data);

      return data;
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }
);


export const editImage = createAsyncThunk(
  'images/editImage',
  async ({ id, newName }) => {
    const response = await fetch(`/api/image/updateName/${id}/${newName}`, {
      method: 'PATCH',
      body: JSON.stringify({ name: newName }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return { data };
  }
);


export const deleteImage = createAsyncThunk(
  'images/deleteImage',
  async (id) => {
    const response = await fetch(`/api/image/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  }
);

