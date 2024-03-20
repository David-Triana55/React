import './TodoItem.css'
import { VscChromeClose } from "react-icons/vsc";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


function TodoItem (props){
  return(
    <li className='TodoItem'>
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}  
      onClick={props.onComplete}
      >
        <IoIosCheckmarkCircleOutline/>
      </span>
      <p className={`TodoItem-p  ${props.completed && 'TodoItem-p--complete' }`}>{props.text}</p>
      <span className='Icon Icon-delete'
      onClick={props.onDelete}
      >
        <VscChromeClose/>
      </span>
    </li>
  )
}

export {TodoItem}