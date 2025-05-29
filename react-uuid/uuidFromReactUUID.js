import uuid from 'react-uuid';

const uuidFromReactUUID = (changeState) => {
  const newUUID = uuid();
  changeState(newUUID);
}

export default uuidFromReactUUID;