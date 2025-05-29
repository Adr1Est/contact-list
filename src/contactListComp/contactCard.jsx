import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactCard = ({contactIcon, name, lastName, phoneNumber, email, city, country, job}) => {

  return (
    <>
      <div className="flex flex-row p-2">
        <div className="flex justify-center items-center w-1/5 text-3xl">
          <FontAwesomeIcon icon={contactIcon}/>
         </div>
        <div className="w-3/5 text-xs">
          <div className='flex flex-row gap-3'>
            <p>{`${name} ${lastName}`}</p>
            <p>{phoneNumber}</p>
          </div>
          <div className='flex flex-row gap-3'>
            <p>{email}</p>
            <p>{`${city}, ${country}`}</p>
          </div>
          <p className=''>{job}</p>
        </div>
        <div className="flex flex-col items-end gap-1 w-1/5">
          <button>
            <FontAwesomeIcon icon="fa-user-xmark"/>
          </button>
          <button>
            <FontAwesomeIcon icon="fa-user-pen"/>
          </button>
        </div>
      </div>
    </>
  )
}

export default ContactCard