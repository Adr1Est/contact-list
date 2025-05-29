const CreateInput = ({inputType, inputId, inputPlaceholder, inputValue, handleChange}) => {
  const inputClass = "w-full bg-sky-100 rounded-2xl p-2 mb-1"

  return(
    <>
      <input className={inputClass} type={inputType} id={inputId} placeholder={inputPlaceholder} value={inputValue} onChange={handleChange}/>
    </>
  )
}

export default CreateInput