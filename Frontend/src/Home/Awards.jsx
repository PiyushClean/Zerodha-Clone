import React from 'react'

const Awards = () => {
  return (
    <>
      <div className="container mt-5 "
        style={{ marginBottom: "250px", paddingLeft: "60px" }}
      >
        <div className="row gx-2">
          <div className="col-md-6">
            <img className='img-fluid w-80' src="/largestBroker.svg" alt="Awards" srcset="" />
          </div>

          <div className="col-md-6 mt-2">
            <h1 className='fs-2 mb-3'>
              Largest stock broker in India
            </h1>

            <p className='w-75 mb-8'>
              2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
            </p>

            <div style={{ gap: "80px" }} className="row d-flex ">
              <div className="col-auto ">

                <ul className='mt-4 d-flex flex-column gap-3'>
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>

              </div>
              <div className="col-auto ">

                <ul className='mt-4 d-flex flex-column gap-3'>
                  <li>Stocks and IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Govt. Securities</li>
                </ul>

              </div>
            </div>

            <img className='img-fluid mt-1' src="/pressLogos.png" alt="" style={{ width: "80%" }} />

          </div>
        </div>
      </div>
    </>
  )
}

export default Awards