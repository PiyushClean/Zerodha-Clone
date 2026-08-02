import React from 'react'

const Stats = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row align-items-center">

          {/* texts */}
          <div className="col-5 " style={{ paddingLeft: "25px" }}>
            <h1 className='fs-2 mb-5'>Trust with confidence</h1>
            <h2 className='fs-4'>Customer-first always</h2>
            <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
            <h2 className='fs-4'>No spam or gimmicks</h2>
            <p className='text-muted' >No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
            <h2 className='fs-4'>The Zerodha universe</h2>
            <p className='text-muted' >Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            <h2 className='fs-4'>Do better with money</h2>
            <p className='text-muted' >With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>


          {/* image section */}
          <div className="col-7 text-center">
            <img src="/ecosystem.png" alt="ecosystem" className='img-fluid' style={{ width: "65%" }} />
            <div className="links">
              <a href="" style={{ textDecoration: "none" }} >Explore ours products <i class="fa-solid fa-right-long"></i></a>
              <a href="" style={{ textDecoration: "none" }} >Try Kite Demo <i class="fa-solid fa-right-long"></i></a>
            </div>
          </div>
        </div >
      </div >

    </>
  )
}

export default Stats