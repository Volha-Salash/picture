import { createAction } from '@reduxjs/toolkit';

export const addImage = createAction('images/add');
export const editImage = createAction('images/edit', 
(id, name) => (
  { 
    payload: { id, name } 
}));
