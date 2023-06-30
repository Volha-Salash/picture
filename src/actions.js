import { createAsyncThunk } from "@reduxjs/toolkit";


const handle401Error = () => {
  window.location.href = '/login';
}

export const fetchImages = createAsyncThunk(
   'images/fetchImages', 
   async (_, { getState }) => {
     const token = localStorage.getItem('token'); 

const response = await fetch('/api/image', {
  mode: 'cors',
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}` 
  },    
});
if (response.status === 401) {
  handle401Error();
}

const data = await response.json();
return data;
} );



export const uploadImage = createAsyncThunk(
   'images/uploadImage', 
   async (event, { getState }) => {
     const token = localStorage.getItem('token');

try {
  const formData = new FormData();
  const file = event.target.files[0];
  formData.append("Name", file.name);
  formData.append("Image", file, file.name);
  const response = await fetch("/api/image", {
    method: "POST",
    mode: 'cors',
    body: formData,
    headers: {
      "Authorization": `Bearer ${token}` 
    }
  });
  if (response.status === 401) {
    handle401Error();
  }

  const data = await response.json();
  console.log(data);

  return data;
} catch (err) {
  console.warn(err);
  throw err;
}
} );


export const editImage = createAsyncThunk(
   'images/editImage', 
   async ({ id, newName }, { getState }) => {
     const token = localStorage.getItem('token');

const response = await fetch(`/api/image/updateName/${id}/${newName}`, {
  method: 'PATCH',
  mode: 'cors',
  body: JSON.stringify({ name: newName }),
  headers: {
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${token}`
  },
});
if (response.status === 401) {
  handle401Error();
}
const data = await response.json();
return { data };
} );

export const deleteImage = createAsyncThunk(
   'images/deleteImage', 
   async (id, { getState }) => {
     const token = localStorage.getItem('token');


const response = await fetch(`/api/image/${id}`, {
  method: 'DELETE',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${token}`
  },
});
if (response.status === 401) {
  handle401Error();
}
const images = await response.json();
return { images };
} );

