const INITIAL_STATE = {
    show:false
  };
  
  const modal = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "SHOW_MODAL":
        return {
          ...state,
          show: true,
        };
      case "HIDE_MODAL":
        return {
          ...state,
          show: false,
        };
      default:
        return state;
    }
  };

  export default modal
  