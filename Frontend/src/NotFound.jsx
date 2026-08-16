import React from 'react'

const NotFound = () => {
  return (
    <div className="container " style={{ marginTop: "6rem", marginBottom: "6rem" }} >
      <div className="row  ">
        <div className="col text-center">
          <h1 className='mb-4 '>Error 404 </h1>
          <p className='mb-4'>Page Not Found</p>
          <button className="btn-primary btn btn-lg fs-5" style={{ width: "20%" }} >Sign up now</button>
        </div>
      </div>
    </div>
  )
}

export default NotFound