import ToolBarButton from "./ToolBarButton"

const ToolBar = () => {

  return(
    <>
      <div className='flex flex-row w-full rounded-b-2xl border-1 border-blue-300 bg-blue-300 contact-list-button'>
        <ToolBarButton actionIcon="fa-house" />
        <ToolBarButton actionIcon="fa-user-plus" />
        <ToolBarButton actionIcon="fa-ban" />
        <ToolBarButton actionIcon="fa-ban" />
      </div>
    </>
  )
}

export default ToolBar