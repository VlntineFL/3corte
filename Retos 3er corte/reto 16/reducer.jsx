const initialState = {
    data: [],
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_SUCCESS':
        return {
          ...state,
          data: state.data.map((item) =>
            item.id === action.payload.docId ? { ...item, ...action.payload.newData } : item
          ),
        };
      case 'DELETE_SUCCESS':
        return {
          ...state,
          data: state.data.filter((item) => item.id !== action.payload.docId),
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;