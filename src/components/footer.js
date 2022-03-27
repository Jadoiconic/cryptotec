import React from 'react'

export default function Footer() {
  return (
    <div className='row bg-black text-white'>
        <div className='col-md-3 col-sm-12 col-xl-3'>
            <h5 className='text-primary'>Preferences</h5><hr />
            <div className='w-90 mx-1'>
                <strong>Powered by <span className='border-2 border-bottom text-success'>Crypto Technology Center</span></strong> <br />
                <strong>Supported by </strong>Mukunzi Elyse <br />
                <strong>Phone: </strong><a href='to:+250788881118'>+250788881118</a> <br />
                Developed by <a href='mailto:jadoiconic@gmail.com' target='_blank' rel="noreferrer">jadoiconic@gmail.com</a>
            </div>
        </div>
        <div className='col-md-3 col-sm-12 col-xl-3'>
            <h5 className='text-primary'>Products</h5><hr />
            <div>
                <ol>
                    <li>Computers</li>
                    <li>Mobile Apps</li>
                    <li>Web Applications</li>
                </ol>
            </div>
            
        </div>
        <div className='col-md-3 col-sm-12 col-xl-3'>
            <h5 className='text-primary'>Services</h5><hr />
            <div>
                <ol type='disc'>
                    <li>Develop Mobile and Web Application</li>
                    <li>Database managment</li>
                    <li>Project Analysis</li>
                    <li>Video and Photo Production</li>
                    <li>Printing and Editing</li>
                    <li>Computer Maintenance</li>
                </ol>
            </div>
            
        </div>
        <div className='col-md-3 col-sm-12 col-xl-3'>
            <h5 className='text-primary'>Help and support</h5><hr />
            <div className='form-goup mx-auto'>
                <input placeholder='Your name' className='form-control mb-1' />
                <input placeholder='Your Email' className='form-control mb-2'/>
                <textarea className='form control mb-1' cols='30'placeholder='your suggestion here '/>
                <button className='btn btn-warning px-5 mb-2'>Send</button>
            </div>
            
        </div>
    </div>
  )
}
