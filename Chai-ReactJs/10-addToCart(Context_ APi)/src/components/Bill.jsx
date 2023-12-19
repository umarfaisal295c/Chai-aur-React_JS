import React from 'react'
import useCart from '../context/addToContext'
const Bill = () => {
    const {bill}=useCart()
  return (
    <>
        <div className='border-3'>
            <p>Your Bill:-{bill}</p>
        </div>
    </>
  )
}

export default Bill