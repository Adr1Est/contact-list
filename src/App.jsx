import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faUserXmark, faUserPen, faUserPlus, faMicrochip, faBan } from '@fortawesome/free-solid-svg-icons'
import ContactList from './contactListComp/contactListRender'
import ToolBar from './toolBar/ToolBar'

library.add(faHouse, faUserXmark, faUserPen, faUserPlus, faMicrochip, faBan)

function App() {

  return (
    <>
      <div className='flex flex-col w-90 md:w-120 sm:w-100 rounded-xl bg-sky-50'>
        <ContactList />
        <ToolBar />
      </div>
    </>
  )
}

export default App
