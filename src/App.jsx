import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faUserXmark, faUserPen, faUserPlus, faMicrochip, faBan, faCode, faMugHot, faUserSecret, faGamepad } from '@fortawesome/free-solid-svg-icons'
import ToolBar from './components/toolBar/ToolBar'
import { Outlet } from 'react-router'
import { useEffect } from 'react'
import { getContactList } from './funciones-api/funciones-api'
import useGlobalReducer from './hooks/useGlobalReducer'

library.add(faHouse, faUserXmark, faUserPen, faUserPlus, faMicrochip, faBan, faCode, faMugHot, faUserSecret, faGamepad)

function App() {
  const {store, dispatch} = useGlobalReducer()

  useEffect(() => {
    const contactListFromAPI = async () => {
      const listData = await getContactList()
      dispatch({type: "UPDATE_LIST", payload: listData})
    }
    contactListFromAPI()
  }, [])

  useEffect(()=>{
    console.log(store.contactList);
  },[store.contactList])

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
