import ToolBarButton from "./ToolBarButton"
import { Link, useNavigate } from "react-router"

const ToolBar = () => {
  const navigate = useNavigate()

  return(
    <>
      <div className='flex flex-row w-full rounded-b-2xl border-1 border-blue-300 bg-blue-300 contact-list-button'>
        <ToolBarButton actionIcon="fa-house" handleClick={() => navigate('/')}/>
        <ToolBarButton actionIcon="fa-user-plus" handleClick={() => navigate('/new-contact')}/>
        <ToolBarButton actionIcon="fa-ban" handleClick={() => navigate('/')}/>
        <ToolBarButton actionIcon="fa-ban" handleClick={() => navigate('/')}/>
      </div>
    </>
  )
}

export default ToolBar