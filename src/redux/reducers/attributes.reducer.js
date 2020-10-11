const attributesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ATTR':
      return action.payload;
    case 'CLEAR_ATTR':
      return [];
    default:
      return state;
  }
};

export default attributesReducer;
