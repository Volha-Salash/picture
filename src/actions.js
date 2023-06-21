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
  async (event) => {
    
    try {
      console.log(event.target.files);
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("Image", file);
      formData.append("Name", file.name);
      const { data } = await fetch("https://localhost:5290/api/image", formData);
      console.log(data);
     // setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert("Ошибка при загрузке файла");
    }}
)
  
/*
    const response = await fetch('/api/image/', {
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

const handleChangeFile = async (event) => {
  console.log(event.target.files);
  try {
    const formData = new FormData();
    const file = event.target.files[0];
    formData.append("image", file);
    const { data } = await axios.post("/upload", formData);
    console.log(data);
    setImageUrl(data.url);
  } catch (err) {
    console.warn(err);
    alert("Ошибка при загрузке файла");
  }
};
*/




/*
const myFile = document.querySelector("input[type=file]").files[0];
const data = new FormData();
data.append("myFile", myFile);
data.append("otherStuff", "stuff from a text input");
fetch(target, {
    method: "POST",
    body: data
});
*/




export const editImage = createAsyncThunk(
  'images/editImage',
  async ({ id, updatedImage }) => {
    const response = await fetch(`/api/image/${id}, ${updatedImage}`, {
      method: 'PATCH',
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
  async ({ id}) => {
    const response = await fetch(`/api/image/${id}`, {
      method: 'DELETE',
    }); 
    const data = await response.json();
    return {data};
  }
);

