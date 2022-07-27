import React, { useState } from 'react';
import array from './CardDetails'

function Block() {

  const [card, setCard] = useState(array);

  const handleRemove = (id) => {
    setCard(current =>
      current.filter(item => {
        return item.id !== id;
      }),
    );
  };

  const removeAll = () => {

    setCard(current => current.filter(item => {
      return '';
    })

    )

  };

  return (
    <div className='container  pb-2'>

      <div className="row m-3" data-aos="zoom-in-up" >
        <div>
          <button type="button" class="btn btn-primary" onClick={removeAll}>Remove All</button>

        </div>

        {
          card.map(({ id, discription, hstar, image, star, title }) => {
            return <div className="col-11 col-sm-6 col-md-4 col-lg-3 mx-auto mt-3 " key={id}>
              <div className="card h-100 w-100 pt-3" >
                <img src={image}
                  alt="Avatar" className="rounded-circle border  m-auto p-1 " />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    {discription}
                  </p>
                </div>
                <div className="container text-warning">
                  <i className={`fa-solid fa-${star}`}></i>
                  <i className={`fa-solid fa-${star}`}></i>
                  <i className={`fa-solid fa-${star}`}></i>
                  <i className={`fa-solid fa-${star}`}></i>
                  <i className={`fa-solid fa-${hstar}`}></i>
                </div>
                {/*remove item  */}
                <div>

                  <button type="button" class="btn btn-primary" onClick={() => handleRemove(id)}>Remove</button>
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