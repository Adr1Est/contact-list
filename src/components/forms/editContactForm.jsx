import CreateInput from "./CreateInput"
import { useEffect, useState } from "react"
import { createNewContact } from "../../funciones-api/funciones-api"
import uuid from 'react-uuid';
import { useNavigate } from "react-router";

const EditContactForm = () => {
  const [newContactIcon, setNewContactIcon] = useState("")
  const [newContactName, setNewContactName] = useState("")
  const [newContactLastName, setNewContactLastName] = useState("")
  const [newContactEmail, setNewContactEmail] = useState("")
  const [newContactJob, setNewContactJob] = useState("")
  const [newContactPhone, setNewContactPhone] = useState("")
  const [newContactCity, setNewContactCity] = useState("")
  const [newContactCountry, setNewContactCountry] = useState("")
  const [UUDIForKey, setUUDIForKey] = useState(null)

  const navigate = useNavigate()
  
  const inputOnChange = (event) => {
    const {id, value} = event.target
    if(id === "iconInput") {setNewContactIcon(value)}
    if(id === "nameInput") {setNewContactName(value)}
    if(id === "lastNameInput") {setNewContactLastName(value)}
    if(id === "emailInput") {setNewContactEmail(value)}
    if(id === "jobInput") {setNewContactJob(value)}
    if(id === "phoneInput") {setNewContactPhone(value)}
    if(id === "cityInput") {setNewContactCity(value)}
    if(id === "countryInput") {setNewContactCountry(value)}
  }

  const uuidFromReactUUID = () => {
    const newUUID = uuid();
    setUUDIForKey(newUUID);
  }

  const resetForm = () => {
    setNewContactIcon("0")
    setNewContactName("")
    setNewContactLastName("")
    setNewContactEmail("")
    setNewContactJob("")
    setNewContactPhone("")
    setNewContactCity("")
    setNewContactCountry("")
  }
  
  const createContact = async () => {
    uuidFromReactUUID()
    if(newContactIcon === "0" && newContactIcon === "" && newContactName === "" && newContactLastName === "" && newContactEmail === "" && newContactJob === "" && newContactPhone === "" && newContactCity === "" && newContactCountry === ""){
      return alert("Without changes")
    }
    const newContactInfo = {
      key: UUDIForKey,
      contactIcon: newContactIcon,
      name: newContactName,
      lastName: newContactLastName,
      email: newContactEmail,
      job: newContactJob,
      phone: newContactPhone,
      city: newContactCity,
      country: newContactCountry
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
          <CreateInput inputType="text" inputId="nameInput" inputPlaceholder="Name" inputValue={newContactName} handleChange={inputOnChange}/> 
          <CreateInput inputType="text" inputId="lastNameInput" inputPlaceholder="Last name" inputValue={newContactLastName} handleChange={inputOnChange}/> 
          <CreateInput inputType="email" inputId="emailInput" inputPlaceholder="Email" inputValue={newContactEmail} handleChange={inputOnChange}/> 
          <CreateInput inputType="text" inputId="jobInput" inputPlaceholder="Job" inputValue={newContactJob} handleChange={inputOnChange}/> 
          <div className="flex flex-row w-full gap-1">
            <CreateInput inputType="number" inputId="phoneInput" inputPlaceholder="Phone number" inputValue={newContactPhone} handleChange={inputOnChange}/> 
            <CreateInput inputType="text" inputId="cityInput" inputPlaceholder="City" inputValue={newContactCity} handleChange={inputOnChange}/> 
          </div>
          <CreateInput inputType="text" inputId="countryInput" inputPlaceholder="Country" inputValue={newContactCountry} handleChange={inputOnChange}/> 

          <div className="w-full flex flex-row gap-1 mt-4">
            <button className="w-full bg-blue-100 hover:bg-blue-200 rounded-2xl p-2" onClick={createContact}>Create contact</button>
            <button className="w-full bg-blue-100 hover:bg-blue-200 rounded-2xl p-2" onClick={resetForm}>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditContactForm