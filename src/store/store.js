export const initialStore = () => { return ({ contactList: [] }) }

export default function storeReducer(state, action) {
  switch (action.type) {
    case "UPDATE_LIST":
      return { ...state, contactList: action.payload };
    default:
      return state;
  }
}