import React from 'react'

const Universe = () => {
    return (
        <div className="container text-center mb-5">

            <h1 className=' mb-4 fs-1' >The Zerodha Universe</h1>
            <p style={{ marginBottom: "100px" }}>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row">
                <div className="col p-3 mb-5 " ><img style={{ width: "45%" }} src="/smallcaseLogo (1).png" alt="" />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col p-3 mb-5" ><img style={{ width: "40%" }} src="/streakLogo.png" alt="" />
                    <p className="text-small text-muted">Algo & strategy platform</p></div>
                <div className="col p-3 mb-5" ><img style={{ width: "50%" }} src="/sensibullLogo.svg" alt="" />
                    <p className="text-small text-muted">Options trading platform</p></div>
            </div>
            <div className="row mb-3">
                <div className="col p-3" ><img style={{ width: "45%" }} src="/zerodhaFundhouse (1).png" alt="" />
                    <p className="text-small text-muted">Asset management</p></div>
                <div className="col p-3"><img style={{ width: "50%" }} src="goldenpiLogo.png" alt="" />
                    <p className="text-small text-muted">Bonds trading platform</p></div>
                <div className="col p-3" ><img style={{ width: "30%" }} src="/dittoLogo.png" alt="" />
                    <p className="text-small text-muted">Insurance</p></div>
            </div>
            <button className="btn-primary btn btn-lg fs-5 rounded-1 mt-5 mb-5" style={{ width: "20%" }} >Sign up for free</button>
        </div>
    )
}

export default Universe