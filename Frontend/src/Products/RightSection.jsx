import React from 'react'

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore,

}) => {
  return (
    <>
      <div className="container mt-5 mb-5 ">
        <div className="row align-items-center mx-5">

          

          <div className="col-4 p-5">
            <h1 className='fs-3 mb-4'>{productName}</h1>
            <p>{productDescription}</p>

            <div className='d-flex gap-5 mb-3'>
              <a href="{learnMore}" className='text-decoration-none p-2'> Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>

          </div>

<div className="col-1"></div>

          <div className="col-6 p-4">
            <img src={imageUrl} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default RightSection