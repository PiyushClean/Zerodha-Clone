import React from 'react'

const Universe = () => {
    return (
        <div className="container text-center">

            <h1 className='fs-3 mb-4'>The Zerodha Universe</h1>
            <p style={{ marginBottom: "100px" }}>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row">
                <div className="col">Fundhouse</div>
                <div className="col">Sensibull</div>
                <div className="col">Tijori</div>
            </div>
            <div className="row">
                <div className="col">Streak</div>
                <div className="col">Smallcase</div>
                <div className="col">Ditto</div>
            </div>
            <button className="btn-primary btn btn-lg fs-5 rounded-1" style={{ width: "20%" }} >Sign up for free</button>
        </div>
    )
}

export default Universe