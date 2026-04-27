import React from 'react'
import NotFoundImg from "../assets/luffyonepiece.jpg"

const NotMadeYet = () => {
  return (
    <div className="container placeholder-page">
      <h1 className="placeholder-title">⚠️ Under Construction</h1>
      <p className="placeholder-text">
        This section of the app is still being built. Check back soon!
      </p>

      <img
        src={NotFoundImg}
        alt="Under Construction"
        className="placeholder-img"
      />
    </div>
  )
}

export default NotMadeYet
