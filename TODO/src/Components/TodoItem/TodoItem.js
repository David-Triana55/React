import './TodoItem.css'
import { VscChromeClose } from "react-icons/vsc";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdEdit } from 'react-icons/md';


function TodoItem ({completed, onComplete,text, onDelete, onEdit}){
  return(
    <li className='TodoItem'>
      <span 
        className= {`Icon Icon-check ${completed && 'Icon-check--active'}`}  
        onClick = {onComplete}
      >
        <IoIosCheckmarkCircleOutline/>
      </span>
      <p 
        className={`TodoItem-p  ${completed && 'TodoItem-p--complete' }`}>{text}</p>

      <span
        className='Icon Icon-edit'
        onClick={onEdit}
      >
        <MdEdit/>
      </span>

      <span 
        className='Icon Icon-delete'
        onClick={onDelete}
      >
        <VscChromeClose/>
      </span>
    </li>
  )
}

export {TodoItem}