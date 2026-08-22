import React from 'react'

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore

}) => {
  return (
    <>
      <div className="container mt-5 mb-5 ">
        <div className="row align-items-center mx-5">


          <div className="col-6 p-4">
            <img src={imageUrl} alt="" />
          </div>

          <div className="col-1"></div>


          <div className="col-5 p-5">
            <h1 className='fs-3'>{productName}</h1>
            <p>{productDescription}</p>

            <div className='d-flex gap-5 mb-3'>
              <a href="{tryDemo}" className='text-decoration-none p-2'> Try More <i class="fa-solid fa-arrow-right-long"></i></a>
              <a href="{learnMore}" className='text-decoration-none p-2'> Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className='d-flex gap-3'>
              <a href={googlePlay}><img src="/googlePlayBadge.svg" alt="" /></a>
              <a href={appStore}><img src="/appstoreBadge (1).svg" alt="" /></a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default LeftSection