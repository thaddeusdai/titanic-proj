import axios from "axios";

export const getResults = (form) => async (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  form = JSON.stringify(form);
  dispatch({ type: "LOADING" });
  await axios
    .post("http://127.0.0.1:8000/api/predict/", form, config)
    .then((resp) => {
      dispatch({ type: "TITANIC", payload: resp.data.classification });
    })
    .catch((err) => dispatch({ type: "ERROR" }));
};
