import React from 'react'
import '../../src/App.css'

function Name({fname,sname,tname}) {

  // const font = {
  //   "font-family": 'Dancing Script',
  // }

  return (
    <div className='container '  >
     
        <div className="row" >
          <div className='col1' >
            <div className="text-center pt-3 fs-1 ">
              {fname}
              <span className='text-primary'>{sname}</span>{tname}  </div>
              <div className="hr"> <hr className='w-20 mx-auto opacity-100 ' />
           
            </div>
          </div>
        </div>
      </div>
  )
}

export default Name;