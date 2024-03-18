// Write your code here
import React from 'react'
import './index.css'

const TeamCard = ({data}) => {
  const {name, teamImageUrl} = data

  return (
    <div className="back">
      <img src={teamImageUrl} alt={name} className="team-logo" />
      <h2 className="team-name">{name}</h2>
    </div>
  )
}

export default TeamCard
