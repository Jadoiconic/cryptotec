import React from 'react'

export default function HomePage() {
  return (
      <div className='row'>
        <div className='col-md-6 col-sm-12 col-xl-6'>
            <h1>
                This is the first column in this crypto technology center basically used in providing 
                services to our customers
            </h1>
        </div>
        <div className='col-md-6 col-sm-12 col-xl-6'>
            <div>
                <h1>
                    This is the second column in this crypto technology center basically used in providing 
                    services to our customers<br />
                </h1>
                <button className='btn btn-secondary px-4'><a href='/signup' className='text-white text-decoration-none'>Get Started</a></button>
                
            </div>
        </div>
    </div>
    
  )
}
