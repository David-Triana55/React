import {ShoppingBagIcon} from '@heroicons/react/24/solid'
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"


const Navbar = ()=> {

    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className="bg-white flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-md font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/' 
                    className={({isActive}) =>
                    isActive ? activeStyle: undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    className={({isActive}) =>
                    isActive ? activeStyle: undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                
                <li>
                    <NavLink 
                    to='/electronics'
                    className={({isActive}) =>
                    isActive ? activeStyle: undefined
                    }>
                        Electronics
                    </NavLink>
                </li>  
                
                <li>
                    <NavLink 
                    to='/furnitures'
                    className={({isActive}) =>
                    isActive ? activeStyle: undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to='/toys'
                    className={({isActive}) =>
                    isActive ? activeStyle: undefined
                    }>
                        Toys
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to='/others'
                    className={({isActive}) =>
                    isActive ? activeStyle: undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    DavidTriana976@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account'
                    className={({isActive}) =>
                    isActive ? activeStyle: undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({isActive}) =>
                    isActive ? activeStyle: undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6'/>    
                    {context.count}
                </li>

            
            </ul>

        </nav>
    )
}

export { Navbar}