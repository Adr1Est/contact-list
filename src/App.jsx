import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faUserXmark, faUserPen, faUserPlus, faMicrochip, faBan, faCode } from '@fortawesome/free-solid-svg-icons'
import ContactList from './contactListComp/contactListRender'
import ToolBar from './toolBar/ToolBar'
import { useEffect, useState } from 'react'
import { getContactList } from './funciones-api/funciones-api.js/'
import NewContactForm from './forms/newContactForm'

library.add(faHouse, faUserXmark, faUserPen, faUserPlus, faMicrochip, faBan, faCode)

function App() {
  const [contactList, setContactList] = useState([])

  useEffect(()=>{
    const getContactListFromAPI = async () => {
      const list = await getContactList()
      setContactList(list)
    }

    getContactListFromAPI()
  }, [])

  useEffect(() => {
    console.log(contactList);
  }, [contactList])

  return (
    <>
      <div className='flex flex-col w-90 md:w-120 sm:w-100 rounded-xl bg-sky-50'>
        {/* <ContactList /> */}
        <NewContactForm setContactList={setContactList}/> 
        <ToolBar />
      </div>
    </>
  )
}

export default App
