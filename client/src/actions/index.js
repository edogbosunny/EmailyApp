import axios from "axios";
import { FETCH_USER } from "./types";

// export const fetchUser = () => {
//   return function(dispatch) {
//     axios
//       .get("/api/current_user")
//       .then(res =>
//         dispatch({ type: FETCH_USER, payload: res }));
//   };
// };

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// 3 ways of declaring this function
// export function handleToken(token) {
//   return function(dispatch) {
//     axios.post("/api/stripe").then(res => res.json());
//   };
// }

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
   //console.log(res.data);
  dispatch({ type: FETCH_USER, payload: res.data });
};
