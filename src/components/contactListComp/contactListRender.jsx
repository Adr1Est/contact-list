import useGlobalReducer from "../../hooks/useGlobalReducer";
import ContactCard from "./contactCard"

const ContactList = () => {
  const {store, dispatch} = useGlobalReducer()

  return (
    <>
      <div className='w-full h-130 rounded-t-2xl contact-list overflow-y-scroll'>
        {store.contactList.map((contact) => (
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
          />
        ))}
      </div>
    </>
  )
}

export default ContactList