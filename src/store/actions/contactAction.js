import {
  CREATE_CONTACT ,
   EDIT_CONTACT ,
    GET_CONTACT,
     DELETE_CONTACT,
      SELECT_ALL,
      CLEAR_ALL,
      DELETE_SELETED_ALL} from '../constant/type';
export const addContactList = (contacts) => {
    return {
      type: CREATE_CONTACT,
      payload:contacts,
    }
  }

 export const editContact = (contact) => ({
    type: EDIT_CONTACT, 
    payload:contact
 }); 

 export const getContact = (id) => ({
    type: GET_CONTACT, 
     payload:id
}); 

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id
});

export const selectAllContact = (id) => ({
  type: SELECT_ALL,
  payload: id
})

export const clearSelectedContact = () => ({
  type: CLEAR_ALL
});

export const deleteAllseleted = () => ({
  type: DELETE_SELETED_ALL
})
