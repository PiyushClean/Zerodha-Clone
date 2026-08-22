import React from 'react'

const Team = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row mb-5">
          <div className="col-1"></div>
          <div className="col-5 text-center">
            <img className='mt-3'
              style={{
                borderRadius: "100%",
                width: "60%",
                marginLeft: "100px",
                marginTop: "-30px",
              }}
              src="/nithinKamath.jpg"
              alt=""
            />
            <h4 className='mt-4' style={{ marginLeft: "80px" }}>Nithin Kamath</h4>
            <h6 className='mt-4' style={{ marginLeft: "80px" }}>Founder, CEO</h6>
          </div>
          <div className="col-5 p-4 ">

            <h2 className='fs-2 text-center mb-4'>People</h2>

            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

            <p>Playing basketball is his zen.</p>

            <p>Connect on <a href="" className='text-decoration-none'>Homepage</a> / <a href="" className='text-decoration-none'>TradingQnA</a> / <a href="" className='text-decoration-none' >Twitter</a></p>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row ">
          <div className="col-4 text-center  mb-5 d-flex flex-column align-items-center">
            <img src="/Nikhil.jpg" alt="" className='team-img mb-3' />
            <h5>Nikhil Kamath</h5>
            <p className='text-grey'>Co-founder & CFO</p>
          </div>
          <div className="col-4 text-center  mb-5">
            <img src="/Kailash.jpg" alt="" className='team-img mb-3' />
            <h5>Dr. Kailash Nadh</h5>
            <p className='text-grey'>CTO</p>
          </div>
          <div className="col-4 text-center  mb-5">
            <img src="Venu.jpg" alt="" className='team-img mb-3' />
            <h5>Venu Madhav</h5>
            <p className='text-grey'>COO</p>
          </div>
        </div>

        <div className="row ">
          <div className="col-4 text-center mb-5">
            <img src="/Seema.jpg" alt="" className='team-img mb-3' />
            <h5>Seema Patil</h5>
            <p className='text-grey'>Director </p>
          </div>
          <div className="col-4 text-center mb-5">
            <img src="/karthik.jpg" alt="" className='team-img mb-3' />
            <h5>Karthik Rangappa</h5>
            <p className='text-grey'>Chief of Education</p>
          </div>
          <div className="col-4 text-center mb-5">
            <img src="/Austin.jpg" alt="" className='team-img mb-3' />
            <h5>Austin Prakesh</h5>
            <p className='text-grey'>Director Strategy </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Team