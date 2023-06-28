import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const loginUser = createAsyncThunk(
  'login/loginUser',
  async ({ username, password }, {
    rejectWithValue }) => {
    try {
     
      const response = await fetch('https://localhost:5290/user/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log('response',response);
      if (response.ok) {
        const data = await response.json();
        
        console.log('data', data);
        const { token } = data; 

        console.log('TOKEN', token);
        localStorage.setItem('token', token);

        return token;
      } else {
        const error = await response.text();
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  'login/signupUser',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        'https://localhost:5290/user/register',
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log('data', data);

      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        return { ...data, username: name, email: email };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);


const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});



export default loginSlice.reducer;


/*import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signupUser = createAsyncThunk(
  'users/signupUser',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        'https://localhost:5290/user/register',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log('data', data);

      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        return { ...data, username: name, email: email };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        'https://localhost:5290/user/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log('response', data);
      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const fetchUserBytoken = createAsyncThunk(
  'users/fetchUserByToken',
  async ({ token }, thunkAPI) => {
    try {
      const response = await fetch(
        'https://localhost:5290/user',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }
      );
      let data = await response.json();
      console.log('data', data, response.status);

      if (response.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: (builder) => {
    builder.addCase(clearState, (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    });
  }, 
  extraReducers: (builder) => {
    builder
    .addCase(signupUser.fulfilled, (state, { payload }) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.user.email;
      state.username = payload.user.name;
    })
      .addCase(signupUser.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(signupUser.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.email = payload.email;
        state.username = payload.name;
        state.isFetching = false;
        state.isSuccess = true;
        return state;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        console.log('payload', payload);
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message; 
      })      
      .addCase(loginUser.pending, (state) => {
          state.isFetching = true;
        })
      .addCase(fetchUserBytoken.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchUserBytoken.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.email = payload.email;
        state.username = payload.name;
      })
      .addCase(fetchUserBytoken.rejected, (state) => {
        console.log('fetchUserBytoken');
        state.isFetching = false;
        state.isError = true;
      });
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;
*/