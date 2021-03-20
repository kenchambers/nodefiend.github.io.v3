export function devApi(state, action) {
  switch (action.type) {
    case "GET_ARTICLES":
      return { ...state, articles: action.payload };
    case "GET_ARTICLE":
      return { ...state, currentArticle: action.payload };
    default:
      return state;
  }

}