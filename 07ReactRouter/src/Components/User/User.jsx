import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {userID} = useParams()
  return (
   <div>User:{userID}</div>
  )
}

export default User