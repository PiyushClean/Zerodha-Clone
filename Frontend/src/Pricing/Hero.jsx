import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="container  text-center " style={{ marginTop: "100px", marginBottom: "120px" }}>
        <h1 className='mb-4'>Pricing</h1>
        <h3 className='mt-3 fs-5 text-muted mb-5 '>Free equity investments and flat ₹20 traday and F&O trades</h3>

      <hr />

        <div className="row p-5 mt-5 text-center">
          <div className="col-4">
            <img src="/pricingEquity.svg" alt="" />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className="col-4">
            <img src="intradayTrades.svg" alt="" />
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <p className="text-muted">Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
          </div>
          <div className="col-4">
            <img src="/pricingEquity.svg" alt="" />
            <h1 className="fs-3">Free direct MF</h1>
            <p className="text-muted">ll direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero