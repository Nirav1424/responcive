import React from 'react';
import array from './CardDetails'

function Block() {

  // const width = {
  //   min-width: "250px",
  //   max-height: "250px",
  // }
  
  return (
    <div>

      <div className="row m-3 font-monospace">

        {
          array.map(item => {
            return <div className="col-11 col-sm-6 col-md-4 col-lg-3 mx-auto mt-3">
              <div className="card h-100 w-100 pt-3">
                <img src={item.image}
                  alt="Avatar" className="rounded-circle border  m-auto p-1 img-fluid " />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {item.discription}
                  </p>
                </div>
             <div className="container text-warning">
             <i class={`fa-solid fa-${item.star}`}></i>
             <i class={`fa-solid fa-${item.star}`}></i>
             <i class={`fa-solid fa-${item.star}`}></i>
             <i class={`fa-solid fa-${item.star}`}></i>
              <i class={`fa-solid fa-${item.hstar}`}></i>
             </div>

              </div>
            </div>
          })
        
        }

      </div>
 </div>
  )
}

export default Block