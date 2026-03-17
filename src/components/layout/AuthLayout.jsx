// React Components  >  Layout Components > Centered layout for login/signup

import { Outlet } from 'react-router-dom'
import React from 'react'


const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AuthLayout