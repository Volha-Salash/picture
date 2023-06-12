export const FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';

export const fetchImagesRequest = () => {
  return {
    type: FETCH_IMAGES_REQUEST
  };
};

export const fetchImagesSuccess = (images) => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload: images
  };
};

export const fetchImagesFailure = (error) => {
  return {
    type: FETCH_IMAGES_FAILURE,
    payload: error
  };
};export const fetchImages = () => {
    return async (dispatch) => {
      dispatch(fetchImagesRequest()); //  action creator, выполняющий загрузку изображений 
      try {
        const response = await fetch('https://myapi.com/images'); // загрузка изображений
        const images = await response.json(); 
        dispatch(fetchImagesSuccess(images)); // отправляем загруженные изображения в redux-стор
      } catch (error) {
        dispatch(fetchImagesFailure(error)); // отправляем ошибку в redux-стор
      }
    };
  };
  