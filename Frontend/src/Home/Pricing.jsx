import React from 'react'

const Pricing = () => {
  return (
    <>
      <div className="container mb-5" style={{ marginTop: "10rem" }}>
        <div className="row">
          <div className="col-4">
            <h1 className='fs-2'>Unbeatable pricing</h1>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href="" className='text-decoration-none mb-5'>See pricing <i class="fa-solid fa-right-long"></i></a>
          </div>

          <div className="col-2"></div>

          <div className="col-6">
            <div className="row ">
              <div className="col border p-4 text-center">
                <h1>₹0</h1>
                <p>Free equity delivery and <br />
                  direct mutual funds</p>
              </div>
              <div className="col border p-4 text-center">
                <h1>₹20</h1>
                <p>Intraday and F&O</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing