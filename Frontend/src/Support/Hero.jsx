import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="container-fluid p-0">
        <div id="supportHero">
          <div className='p-5 d-flex justify-content-between ' id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="">Track Ticket</a>
          </div>
          <div className="row p-3 mb-5">
            <div className="col-8 p-5">
              <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
              <input type="text" name="" id="" placeholder='how do i activate F&O , wy is my order getting rejected ...'/>
              <a href="" className='p-3'>Track account opening</a>
              <a href="" className='p-3' >Track segment activation</a>
              <a href="" className='p-3' >Intraday margins</a> <br />
              <a href="" className='p-3' >Kite user manual</a>
            </div>
            <div className="col-4">
              <h1 className="fs-3">Featured</h1>
              <ol>
                <li><a href="">Current Buybacks - August 2024</a></li>
                <li><a href="">Offer for sale (OFS) - August 2024</a></li>
              </ol>

            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Hero