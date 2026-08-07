import React from 'react'

const Footer = () => {
  return (

    <footer style={{ backgroundColor: "#fbfbfb" }}>
      <hr />
      <div className="container mt-5" >
        <div className="row  mb-5">
          <div className="col">
            <img src="/logo.svg" alt="" className='mb-3' style={{ width: "50%" }} />
            <p>&copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
            <div className="logo">

              <div className="d-flex gap-3">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-square-x-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-square-facebook"></i>
              </div>
              <hr />
              <div className="d-flex gap-3">
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-telegram"></i>
                <i className="fa-solid fa-comment"></i>
              </div>

            </div>
          </div>

          <div className="col">
            <p className='text-muted' style={{ fontWeight: 400 }}>Company</p>
            <a href="" className='text-decoration-none text-muted footerLink' >About</a><br />
            <a href="" className='text-decoration-none text-muted footerLink' >Products</a><br />
            <a href="" className='text-decoration-none text-muted footerLink' >Pricing</a><br />
            <a href="" className='text-decoration-none text-muted footerLink' >Referral programme</a><br />
            <a href="" className='text-decoration-none text-muted footerLink' >Careers</a><br />
            <a href="" className='text-decoration-none text-muted footerLink' >Zerodha.tech</a><br />
            <a href="" className='text-decoration-none text-muted footerLink' >Press & media</a><br />
            <a href="" className='text-decoration-none text-muted footerLink' >Zerodha Cares (CSR)</a>
          </div>


          <div className="col"><p className='text-muted' >Support </p><br />
            <a href="" className='text-decoration-none text-muted footerLink' > Contact us</a> <br />
            <a href="" className='text-decoration-none text-muted footerLink' > Support portal</a><br />
            <a href="" className='text-decoration-none text-muted footerLink' >Z-Connect blog</a><br />
            <a href="" className='text-decoration-none text-muted footerLink' >List of charges</a><br />
            <a href="" className='text-decoration-none text-muted footerLink' >Downloads & resources</a><br />
          </div>
          <div className="col"><p className='text-muted' style={{ fontWeight: 400 }}>Account</p>
            <a href="" className='text-decoration-none text-muted footerLink'>Open an accountFund transfer</a>
          </div>
        </div>

        <p className='FooterParagraph'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances Smart Online Dispute Resolution | Grievances Redressal Mechanism

        </p>

        <p className='FooterParagraph'>
          Investments in securities market are subject to market risks; read all the related documents carefully before investing. Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month. "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not
        </p>

        <p className='FooterParagraph'>
          undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
        </p>

      </div>
    </footer>
  )
}

export default Footer