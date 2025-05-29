const getContactList = async () => {
  const response = await fetch('http://localhost:3000/contacts', {
    method: "GET"
  });

  const data = await response.json();
  return data;
}

const createNewContact = async (contactData) => {
  const response = await fetch('http://localhost:3000/contacts', {
    method: "POST",
    body: JSON.stringify(contactData),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  return data;
}

const updateContact = async (contactId, newContactData) => {
  const response = await fetch(`http://localhost:3000/contacts/${contactId}`, {
    method: "PUT",
    body: JSON.stringify(newContactData),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  return data;
}

const deleteContact = async (contactId) => {
  const response = await fetch(`http://localhost:3000/contacts/${contactId}`, {
    method: "DELETE"
  });

  const data = await response.json();
  return data;
}


export { getContactList, createNewContact, updateContact, deleteContact }