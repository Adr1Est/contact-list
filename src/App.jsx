import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faUserXmark, faUserPen, faUserPlus, faMicrochip, faBan, faCode, faMugHot, faUserSecret, faGamepad } from '@fortawesome/free-solid-svg-icons'
import ToolBar from './components/toolBar/ToolBar'
import { useEffect, useState } from 'react'
import { getContactList } from './funciones-api/funciones-api.js/'
import { Outlet } from 'react-router'

library.add(faHouse, faUserXmark, faUserPen, faUserPlus, faMicrochip, faBan, faCode, faMugHot, faUserSecret, faGamepad)

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
        <Outlet />
        <ToolBar />
      </div>
    </>
  )
}

export default App
