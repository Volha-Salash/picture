
import { FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from '../actions';

const initialState = {
 [],
  loading: false,
  error: null
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
        loading: false,
        error: null
      };
    case FETCH_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default imageReducer;
