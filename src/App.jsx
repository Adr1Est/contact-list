import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faUserXmark, faUserPen, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import ContactList from './contactListComp/contactListRender'

library.add(faHouse, faUserXmark, faUserPen, faMicrochip)

function App() {

  return (
    <>
      <div className='flex flex-col w-90 md:w-120 sm:w-100 rounded bg-emerald-200'>
        <ContactList />
        <div className='w-full contact-list-button'>
          
        </div>
      </div>
    </>
  )
}

export default App
