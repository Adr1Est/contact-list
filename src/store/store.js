const mockData = {
  key: '2352342zsx423',
  id: 1,
  contactIcon: 'fa-microchip',
  name: 'Adrián',
  lastName: 'Estévez Salamanca',
  email: 'adrian22est@gmail.com',
  job: 'Full Stack Developer',
  phone: '660487026',
  city: 'Madrid',
  country: 'España'
};

export const initialStore = () => ({ contactList: [mockData] });

export default function storeReducer(state, action) {
  switch (action.type) {
    case "UPDATE_LIST":
      return { ...state, contactList: action.payload };
    case "CREATE_CONTACT":
      return { ...state, contactList: [...state.contactList, action.payload] }
    default:
      return state;
  }
}