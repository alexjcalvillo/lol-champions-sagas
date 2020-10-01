const championsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHAMPIONS':
      return action.payload;
      break;
    case 'CLEAR_CHAMPIONS':
      return [];
    default:
      return state;
  }
};

export default championsReducer;
