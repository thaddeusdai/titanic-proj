const initialState = {
  result: "",
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "TITANIC":
      return {
        ...state,
        result: action.payload,
        loading: false,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
