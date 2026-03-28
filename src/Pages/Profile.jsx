import React from 'react'
import Button from '../Components/Button'
import {getAuth , signOut} from 'firebase/auth'

const Profile = () => {
    const auth = getAuth();
  return (
    <div className='w-full mt-36'>
        <Button text='Logout' onclick={() => {signOut(auth)}}/>
    </div>
  )
}

export default Profile