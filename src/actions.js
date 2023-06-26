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
    const images = await response.json();
    return images;
  }
);

export const login = (username, password) => (dispatch) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  fetch("/user/login", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
     // localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    })
    .catch((error) => {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    });
};

/*
const refreshTokenMiddleware = (store) => (next) => (action) => {
  if (action.type === "TOKEN_EXPIRED") {
    const { refreshToken } = JSON.parse(localStorage.getItem("refreshToken"));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    };

    fetch("/user/refresh-token", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        store.dispatch({ type: "TOKEN_REFRESHED", payload: data.accessToken });
      })
      .catch(() => {
        store.dispatch({ type: "LOGOUT" });
      });
  }

  return next(action);
};
*/

/*
export const login = createAsyncThunk(
  'LOGIN/login', 
  async (username, password) => {
     const response = await fetch('/user/login', {
       method: 'POST', 
       headers: { 'Content-Type': 'application/json' }, 
       body: JSON.stringify({
         username, password 
        }) });

if (!response.ok) {
   throw new Error('Invalid credentials'); 
  }

const data = await response.json(); 
return data; 
});


export const refreshTokens = createAsyncThunk(
  'REFRESH_TOKENS/refreshTokens',
 async (_, getState) => {
   const { refreshToken } = getState().auth;

const response = await fetch('/user/refresh-token', {
   method: 'POST', 
   headers: { 'Content-Type': 'application/json' }, 
   body: JSON.stringify({ refreshToken }) 
  });

if (!response.ok) {
   throw new Error('Failed to refresh tokens'); }

const data = await response.json(); 
return data; 
});

export const logout = () => {
   return { 
    type: 'LOGOUT' 
  }; 
};
*/
