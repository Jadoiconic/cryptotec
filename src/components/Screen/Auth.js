import React from 'react'

function Login() {
  return (
    <div>
      <div className='form-group'>
        <input className='form-control' placeholder='Username' />
        <input type='password' className='form-control' placeholder='Password' />
        <button className='btn btn-success form-control'>Sign In</button>
      </div>
    </div>
  )
}

export default Login