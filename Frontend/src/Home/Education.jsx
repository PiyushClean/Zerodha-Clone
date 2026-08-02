import React from 'react'

const Education = () => {
  return (
    <>
      <div className="container">
        <div className="row gx-5 mb-5">
          <div className="col-5 text-center">
            <img src="/education.svg" alt=""   style={{ width: "85%" }} />
          </div>

          <div className="col-1"></div>

          <div className="col-6">
            <h1 className='fs-2 mb-3'>Free and open market education</h1>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="" className='text-decoration-none  '>varsity <i class="fa-solid fa-right-long"></i></a>
            <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="" className='text-decoration-none'>TradingQ&A <i class="fa-solid fa-right-long"></i></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education