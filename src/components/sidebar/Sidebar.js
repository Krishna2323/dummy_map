import React from 'react'
import "./Sidebar.scss"
import { ReactComponent as KubeSvg } from '../assets/svg/kubernetes-svgrepo-com.svg'
import { ReactComponent as DockerSvg } from '../assets/svg/docker-svgrepo-com.svg'
import { ReactComponent as NetworkSvg } from '../assets/svg/network-svgrepo-com.svg'
import { ReactComponent as CertificateSvg } from '../assets/svg/certificate-authority-service-svgrepo-com.svg'



const Sidebar = () => {
  const handleClick=(e)=>{
    let svg=e.target.parentNode.dataset.svg||e.target.parentNode.parentNode.parentNode.dataset.svg 
    console.log(svg)
  }
  return (
    <div className='sidebar'>
      <div draggable="true"  className='svg-container'>
      <KubeSvg className='icon' data-svg="kubernetes-svgrepo-com.svg"  onClick={handleClick} style={{ width:"70" ,height:"70"}}/>
      <DockerSvg className='icon' data-svg="docker-svgrepo-com.svg" onClick={handleClick} style={{ width:"70" ,height:"70"}}/>
      <NetworkSvg className='icon' data-svg="network-svgrepo-com.svg" onClick={handleClick} style={{ width:"70" ,height:"70"}}/>
      <CertificateSvg className='icon' data-svg="certificate-authority-service-svgrepo-com.svg" onClick={handleClick} style={{ width:"70" ,height:"70"}}/>
      </div>
    </div>
  )
}

export default Sidebar