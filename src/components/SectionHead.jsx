import React from "react"

// This is a component that renders an icon and a title more like a subheading

const SectionHead = ({icon, title, className}) => {
  return (
    <div className={`section__head ${className}`}>
        <span>{icon}</span>
        <h2>{title}</h2>
    </div>
  )
}

export default SectionHead