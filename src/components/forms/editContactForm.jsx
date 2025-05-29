import CreateInput from "./CreateInput"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import { getContactList, getContactListById, updateContact } from "../../funciones-api/funciones-api";
import useGlobalReducer from "../../hooks/useGlobalReducer";

const EditContactForm = () => {
  // Renombrar propiedad id como contactId, para que no exista conflicto en inputOnChange
  const { id: contactId } = useParams()

  const [oldData, setOldData] = useState("")
  const [newContactIcon, setNewContactIcon] = useState("")
  const [newContactName, setNewContactName] = useState("")
  const [newContactLastName, setNewContactLastName] = useState("")
  const [newContactEmail, setNewContactEmail] = useState("")
  const [newContactJob, setNewContactJob] = useState("")
  const [newContactPhone, setNewContactPhone] = useState("")
  const [newContactCity, setNewContactCity] = useState("")
  const [newContactCountry, setNewContactCountry] = useState("")

  const navigate = useNavigate()
  
  const inputOnChange = (event) => {
    const {id, value} = event.target
    if(id === `newIconInput${contactId}`) {setNewContactIcon(value)}
    if(id === `newNameInput${contactId}`) {setNewContactName(value)}
    if(id === `newLastNameInput${contactId}`) {setNewContactLastName(value)}
    if(id === `newEmailInput${contactId}`) {setNewContactEmail(value)}
    if(id === `newJobInput${contactId}`) {setNewContactJob(value)}
    if(id === `newPhoneInput${contactId}`) {setNewContactPhone(value)}
    if(id === `newCityInput${contactId}`) {setNewContactCity(value)}
    if(id === `newCountryInput${contactId}`) {setNewContactCountry(value)}
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
  
  const {store, dispatch} = useGlobalReducer()
  
  const clickToUpdateContact = async () => {
    if((newContactIcon === "0" || newContactIcon === "") && newContactIcon === "" && newContactName === "" && newContactLastName === "" && newContactEmail === "" && newContactJob === "" && newContactPhone === "" && newContactCity === "" && newContactCountry === ""){
      return alert("Without changes")
    }
    const updatedInfo = {
      key: oldData.key,
      contactIcon: newContactIcon || oldData.contactIcon,
      name: newContactName || oldData.name,
      lastName: newContactLastName || oldData.lastName,
      email: newContactEmail || oldData.email,
      job: newContactJob || oldData.job,
      phone: newContactPhone || oldData.phone,
      city: newContactCity || oldData.city,
      country: newContactCountry || oldData.country
    }

    await updateContact(contactId, updatedInfo)
    const listData = await getContactList()
    dispatch( {type: "UPDATE_LIST", payload: listData} )
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
    const getContactByIdFromAPI = async () => {
      const contactData = await getContactListById(contactId)
      setOldData(contactData)
    }
    getContactByIdFromAPI()
  }, [])

  return (
    <>
      <div className='flex flex-col justify-center w-full h-130 rounded-t-2xl contact-list'>
        <div className="flex flex-col justify-center items-center p-4">
          <select className="w-full bg-sky-100 rounded-2xl p-2 mb-1" id={`newIconInput${contactId}`} onChange={inputOnChange}>
            {iconsForOptions.map((icon) => <option value={icon.value}>{icon.name}</option>)}
          </select>
          <CreateInput inputType="text" inputId={`newNameInput${contactId}`} inputPlaceholder={oldData.name} inputValue={newContactName} handleChange={inputOnChange}/> 
          <CreateInput inputType="text" inputId={`newLastNameInput${contactId}`} inputPlaceholder={oldData.lastName} inputValue={newContactLastName} handleChange={inputOnChange}/> 
          <CreateInput inputType="email" inputId={`newEmailInput${contactId}`} inputPlaceholder={oldData.email} inputValue={newContactEmail} handleChange={inputOnChange}/> 
          <CreateInput inputType="text" inputId={`newJobInput${contactId}`} inputPlaceholder={oldData.job} inputValue={newContactJob} handleChange={inputOnChange}/> 
          <div className="flex flex-row w-full gap-1">
            <CreateInput inputType="number" inputId={`newPhoneInput${contactId}`} inputPlaceholder={oldData.phone} inputValue={newContactPhone} handleChange={inputOnChange}/> 
            <CreateInput inputType="text" inputId={`newCityInput${contactId}`}inputPlaceholder={oldData.city} inputValue={newContactCity} handleChange={inputOnChange}/> 
          </div>
          <CreateInput inputType="text" inputId={`newCountryInput${contactId}`} inputPlaceholder={oldData.country} inputValue={newContactCountry} handleChange={inputOnChange}/> 

          <div className="w-full flex flex-row gap-1 mt-4">
            <button className="w-full bg-blue-100 hover:bg-blue-200 rounded-2xl p-2" onClick={clickToUpdateContact}>Edit contact</button>
            <button className="w-full bg-blue-100 hover:bg-blue-200 rounded-2xl p-2" onClick={resetForm}>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditContactForm