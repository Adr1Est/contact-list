import './contactListRender.css'
import useGlobalReducer from "../../hooks/useGlobalReducer";
import { getContactList, deleteContact } from "../../funciones-api/funciones-api";
import ContactCard from "./contactCard"
import { useNavigate } from "react-router";

const ContactList = () => {
  const {store, dispatch} = useGlobalReducer()

  const navigate = useNavigate()

  const onDelete = async (id) => {
    console.log(id);
    const deletedContact = await deleteContact(id)
    const listData = await getContactList()
    dispatch( {type: "UPDATE_LIST", payload: listData} )
    console.log(`Deleted contact with id: ${id}`)
  }

  const onEdit = (id) => {
    navigate(`/edit-contact/${id}`)
  }

  return (
    <>
      <div id="list-container" className='w-full h-130 rounded-t-2xl contact-list overflow-y-auto'>
        {store.contactList.map((contact, index) => (
          <ContactCard 
            key={contact.key}
            contactIcon={contact.contactIcon}
            name={contact.name}
            lastName={contact.lastName}
            email={contact.email}
            job={contact.job}
            phoneNumber={contact.phone}
            city={contact.city}
            country={contact.country}
            handleDelete={onDelete}
            handleEdit={onEdit}
            contactId={index}
          />
        ))}
      </div>
    </>
  )
}

export default ContactList