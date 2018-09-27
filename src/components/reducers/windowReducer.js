export default function windowReducer(
  state = {
    windowWidth: 0,
  },
  action
){
switch (action.type) {
  case "WINDOW_MEASUREMENT":
    return {
      ...state,
      windowWidth: window.innerWidth,
    };
}
return state;
};