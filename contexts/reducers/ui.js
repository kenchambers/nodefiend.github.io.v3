export function ui(state, action) {

  switch (action.type) {
    case "HIDE_MAIN_CANVAS":
      return { ...state, showMainCanvas: false}
    case "SHOW_MAIN_CANVAS":
      return { ...state, showMainCanvas: true}
    case "TOGGLE_NAV":
      return { ...state, navMenuOpen: action.payload };
    case "HIDE_LOADER":
      return { ...state, showLoader: false };
    case "SHOW_LOADER":
      return { ...state, showLoader: true };
    default:
      return state;
  }
}