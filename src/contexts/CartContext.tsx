import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextOrder {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    CartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCart: (cartItemId: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextOrder)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyAdd = cartItems.findIndex(
      (cartItems) => cartItems.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyAdd < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyAdd].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyAdd = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeAlreadyAdd >= 0) {
        const item = draft[coffeeAlreadyAdd]
        draft[coffeeAlreadyAdd].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })
    setCartItems(newCart)
  }

  function removeCart(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyAdd = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeAlreadyAdd >= 0) {
        draft.splice(coffeeAlreadyAdd, 1)
      }
    })
    setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  // console.log(cartItems)
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeCart,
        cartItemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
