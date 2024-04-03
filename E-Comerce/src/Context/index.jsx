import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart * Increment quality
    const [count, setCount] = useState(0)

    // Product Detail * Open/Close
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false)
    const openProductDetail = () => setIsOpenProductDetail(true)
    const closeProductDetail = () => setIsOpenProductDetail(false)
    
    // Product Detail * Open/Close
    const [isOpenCheckoutSideMenu, setIsOpenCheckoutSideMenu] = useState(false)
    const openCheckoutSideMenu = () => setIsOpenCheckoutSideMenu(true)
    const closeCheckoutSideMenu = () => setIsOpenCheckoutSideMenu(false)
    
    // Product Detail . Show product 
    const [productToShow,setProductToShow] = useState({})

    // Shopping cart . Add products to cart

    const [cartProducts, setCartProducts] = useState([])

    //  Shopping Cart . order
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider 
            value={{
                count,
                setCount,
                isOpenProductDetail,
                openProductDetail,
                closeProductDetail,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isOpenCheckoutSideMenu,
                setIsOpenCheckoutSideMenu,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}