import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="container py-5 ">
        <div className="row ">
          <div className="col text-center">

            <img className=' img-fluid mb-5'
              style={{ width: "90%", height: "auto" }}
              src="/homeHero.png" alt="Hero Image " />

            <h2 className='mt-5 mb-3'>
              Invest in everything
            </h2>

            <p className='mb-4 fs-5'>
              Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
            </p>

            <button className="btn btn-primary mt-4 btn-lg px-8 mb-5">
              Sign up for free
            </button>

          </div>
        </div>
      </div>

    </>
  )
}

export default Hero