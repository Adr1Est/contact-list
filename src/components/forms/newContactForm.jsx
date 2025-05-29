import CreateInput from "./CreateInput"
import { useEffect, useState } from "react"
import { createNewContact } from "../../funciones-api/funciones-api"
import uuid from 'react-uuid';
import { useNavigate } from "react-router";

const NewContactForm = () => {
  const [contactIcon, setContactIcon] = useState("")
  const [contactName, setContactName] = useState("")
  const [contactLastName, setContactLastName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactJob, setContactJob] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [contactCity, setContactCity] = useState("")
  const [contactCountry, setContactCountry] = useState("")
  const [UUDIForKey, setUUDIForKey] = useState(null)

  const navigate = useNavigate()
  
  const inputOnChange = (event) => {
    const {id, value} = event.target
    if(id === "iconInput") {setContactIcon(value)}
    if(id === "nameInput") {setContactName(value)}
    if(id === "lastNameInput") {setContactLastName(value)}
    if(id === "emailInput") {setContactEmail(value)}
    if(id === "jobInput") {setContactJob(value)}
    if(id === "phoneInput") {setContactPhone(value)}
    if(id === "cityInput") {setContactCity(value)}
    if(id === "countryInput") {setContactCountry(value)}
  }

  const uuidFromReactUUID = () => {
    const newUUID = uuid();
    setUUDIForKey(newUUID);
  }

  const resetForm = () => {
    setContactIcon("0")
    setContactName("")
    setContactLastName("")
    setContactEmail("")
    setContactJob("")
    setContactPhone("")
    setContactCity("")
    setContactCountry("")
  }
  
  const createContact = async () => {
    uuidFromReactUUID()
    if(contactIcon === "0" || contactIcon === "" || contactName === "" || contactLastName === "" || contactEmail === "" || contactJob === "" || contactPhone === "" || contactCity === "" || contactCountry === ""){
      return alert("Fill the form")
    }
    const newContactInfo = {
      key: UUDIForKey,
      contactIcon,
      name: contactName,
      lastName: contactLastName,
      email: contactEmail,
      job: contactJob,
      phone: contactPhone,
      city: contactCity,
      country: contactCountry
    }

    await createNewContact(newContactInfo)
    navigate('/')
  }

  const iconsForOptions = [
    {name: "Select icon", value: "0"},
    {name: "Microchip", value: "fa-microchip"},
    {name: "Code", value: "fa-code"},
    {name: "House", value: "fa-house"},
    {name: "Coffe Mug", value: "fa-mug-hot"},
    {name: "Top Secret", value: "fa-user-secret"},
    {name: "Gaming Duo", value: "fa-gamepad"},
  ]

  useEffect(()=>{
    uuidFromReactUUID()
  }, [])

  return (
    <>
      <div className='flex flex-col justify-center w-full h-130 rounded-t-2xl contact-list'>
        <div className="flex flex-col justify-center items-center p-4">
          <select className="w-full bg-sky-100 rounded-2xl p-2 mb-1" id="iconInput" onChange={inputOnChange}>
            {iconsForOptions.map((icon) => <option value={icon.value}>{icon.name}</option>)}
          </select>
          <CreateInput inputType="text" inputId="nameInput" inputPlaceholder="Name" inputValue={contactName} handleChange={inputOnChange}/> 
          <CreateInput inputType="text" inputId="lastNameInput" inputPlaceholder="Last name" inputValue={contactLastName} handleChange={inputOnChange}/> 
          <CreateInput inputType="email" inputId="emailInput" inputPlaceholder="Email" inputValue={contactEmail} handleChange={inputOnChange}/> 
          <CreateInput inputType="text" inputId="jobInput" inputPlaceholder="Job" inputValue={contactJob} handleChange={inputOnChange}/> 
          <div className="flex flex-row w-full gap-1">
            <CreateInput inputType="number" inputId="phoneInput" inputPlaceholder="Phone number" inputValue={contactPhone} handleChange={inputOnChange}/> 
            <CreateInput inputType="text" inputId="cityInput" inputPlaceholder="City" inputValue={contactCity} handleChange={inputOnChange}/> 
          </div>
          <CreateInput inputType="text" inputId="countryInput" inputPlaceholder="Country" inputValue={contactCountry} handleChange={inputOnChange}/> 

          <div className="w-full flex flex-row gap-1 mt-4">
            <button className="w-full bg-blue-100 hover:bg-blue-200 rounded-2xl p-2" onClick={createContact}>Create contact</button>
            <button className="w-full bg-blue-100 hover:bg-blue-200 rounded-2xl p-2" onClick={resetForm}>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewContactForm