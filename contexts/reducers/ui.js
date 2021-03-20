export function ui(state, action) {
  switch (action.type) {
    case "TOGGLE_NAV":
      return { ...state, navMenuOpen: action.payload };
    default:
      return state;
  }
  switch (action.type) {
    case "SHOW_LOADER":
      return { ...state, showLoader: true };
    default:
      return state;
  }
  switch (action.type) {
    case "HIDE_LOADER":
      return { ...state, showLoader: false };
    default:
      return state;
  }
}