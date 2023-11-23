import { firestore } from './firebaseConfig';

export const updateData = (collection, docId, newData) => async (dispatch) => {
  try {
    await firestore.collection(collection).doc(docId).update(newData);
    dispatch({ type: 'UPDATE_SUCCESS', payload: { collection, docId, newData } });
  } catch (error) {
    console.error('Error updating document:', error.message);
  }
   
};

export const deleteData = (collection, docId) => async (dispatch) => {
    try {
      await firestore.collection(collection).doc(docId).delete();
      dispatch({ type: 'DELETE_SUCCESS', payload: { collection, docId } });
    } catch (error) {
      console.error('Error deleting document:', error.message);
    }
  };