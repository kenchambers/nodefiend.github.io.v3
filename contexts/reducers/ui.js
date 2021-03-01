export function ui(state, action) {
  switch (action.type) {
    case "TOGGLE_NAV":
      return { ...state, navMenuOpen: action.payload };
    default:
      return state;
  }
}