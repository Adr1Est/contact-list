import ContactCard from "./contactCard"

const ContactList = () => {
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

  return (
    <>
      <div className='w-full h-130 rounded-t-2xl contact-list overflow-y-scroll'>
        <ContactCard 
          contactIcon={mockData.contactIcon}
          name={mockData.name}
          lastName={mockData.lastName}
          email={mockData.email}
          job={mockData.job}
          phoneNumber={mockData.phone}
          city={mockData.city}
          country={mockData.country}
        />

        <ContactCard 
          contactIcon={mockData.contactIcon}
          name={mockData.name}
          lastName={mockData.lastName}
          email={mockData.email}
          job={mockData.job}
          phoneNumber={mockData.phone}
          city={mockData.city}
          country={mockData.country}
        /><ContactCard 
          contactIcon={mockData.contactIcon}
          name={mockData.name}
          lastName={mockData.lastName}
          email={mockData.email}
          job={mockData.job}
          phoneNumber={mockData.phone}
          city={mockData.city}
          country={mockData.country}
        /><ContactCard 
          contactIcon={mockData.contactIcon}
          name={mockData.name}
          lastName={mockData.lastName}
          email={mockData.email}
          job={mockData.job}
          phoneNumber={mockData.phone}
          city={mockData.city}
          country={mockData.country}
        /><ContactCard 
          contactIcon={mockData.contactIcon}
          name={mockData.name}
          lastName={mockData.lastName}
          email={mockData.email}
          job={mockData.job}
          phoneNumber={mockData.phone}
          city={mockData.city}
          country={mockData.country}
        /><ContactCard 
          contactIcon={mockData.contactIcon}
          name={mockData.name}
          lastName={mockData.lastName}
          email={mockData.email}
          job={mockData.job}
          phoneNumber={mockData.phone}
          city={mockData.city}
          country={mockData.country}
        /><ContactCard 
          contactIcon={mockData.contactIcon}
          name={mockData.name}
          lastName={mockData.lastName}
          email={mockData.email}
          job={mockData.job}
          phoneNumber={mockData.phone}
          city={mockData.city}
          country={mockData.country}
        /><ContactCard 
          contactIcon={mockData.contactIcon}
          name={mockData.name}
          lastName={mockData.lastName}
          email={mockData.email}
          job={mockData.job}
          phoneNumber={mockData.phone}
          city={mockData.city}
          country={mockData.country}
        /><ContactCard 
          contactIcon={mockData.contactIcon}
          name={mockData.name}
          lastName={mockData.lastName}
          email={mockData.email}
          job={mockData.job}
          phoneNumber={mockData.phone}
          city={mockData.city}
          country={mockData.country}
        /><ContactCard 
          contactIcon={mockData.contactIcon}
          name={mockData.name}
          lastName={mockData.lastName}
          email={mockData.email}
          job={mockData.job}
          phoneNumber={mockData.phone}
          city={mockData.city}
          country={mockData.country}
        /><ContactCard 
          contactIcon={mockData.contactIcon}
          name={mockData.name}
          lastName={mockData.lastName}
          email={mockData.email}
          job={mockData.job}
          phoneNumber={mockData.phone}
          city={mockData.city}
          country={mockData.country}
        /><ContactCard 
          contactIcon={mockData.contactIcon}
          name={mockData.name}
          lastName={mockData.lastName}
          email={mockData.email}
          job={mockData.job}
          phoneNumber={mockData.phone}
          city={mockData.city}
          country={mockData.country}
        />
      </div>
    </>
  )
}

export default ContactList