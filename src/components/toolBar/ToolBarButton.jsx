import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ToolBarButton = ({actionIcon, handleClick}) => {

  return (
    <>
      <button className="w-1/4 min-h-10 border-1 rounded-2xl border-blue-300 bg-blue-200 hover:bg-blue-300" onClick={handleClick}>
        <FontAwesomeIcon icon={actionIcon} />
      </button>
    </>
  )
}

export default ToolBarButton