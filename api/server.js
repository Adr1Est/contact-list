const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const mockData = {
  key: '2352342zsx423',
  contactIcon: 'fa-microchip',
  name: 'Adrián',
  lastName: 'Estévez Salamanca',
  email: 'test@gmail.com',
  job: 'Full Stack Developer',
  phone: '435734737',
  city: 'Madrid',
  country: 'España'
};

let contactList = [mockData];

app.get('/contacts', (req, res) => {
  res.json(contactList);
});

app.get('/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const contact = contactList.find((contact, index) => index === id);
  if (!contact) return res.status(404).send('Error 404: Contact not found');
  res.json(contact);
});

app.post('/contacts', (req, res) => {
  const newContact = req.body;
  contactList.push(newContact);
  res.status(201).json(newContact);
});

app.put('/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < contactList.length) {
    contactList[id] = req.body;
    res.json(contactList[id]);
  } else {
    res.status(404).send('Not found!');
  }
});

app.delete('/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < contactList.length) {
    const deletedContact = contactList.splice(id, 1);
    res.json(deletedContact);
  } else {
    res.status(404).send('Not found!');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto: ${PORT}`);
});