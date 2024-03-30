import './TodoItem.css'
import { VscChromeClose } from "react-icons/vsc";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


function TodoItem ({completed, onComplete,text, onDelete}){
  return(
    <li className='TodoItem'>
      <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}  
      onClick={onComplete}
      >
        <IoIosCheckmarkCircleOutline/>
      </span>
      <p className={`TodoItem-p  ${completed && 'TodoItem-p--complete' }`}>{text}</p>
      <span className='Icon Icon-delete'
      onClick={onDelete}
      >
        <VscChromeClose/>
      </span>
    </li>
  )
}

export {TodoItem}