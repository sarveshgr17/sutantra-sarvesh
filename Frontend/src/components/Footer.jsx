import React from 'react'

const Footer = ({ githubUrl = 'https://github.com/sarveshgr17' }) => {
  const year = new Date().getFullYear()
  return (
    <footer className="app-footer">
      <div className="app-footer__topbar" />
      <div className="app-footer__content">
        <p className="app-footer__copyright">
          © COPYRIGHT {year} SU-TANTRA EQUIPMENTS PVT. LTD.
        </p>
        <p className="app-footer__design">
          Design: <a href={githubUrl} target="_blank" rel="noreferrer" className="app-footer__link">Sarvesh Rangnath</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer


