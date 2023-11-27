import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='text-4xl bg-green-400 text-center'>User : {userid}</div>
  )
}

export default User