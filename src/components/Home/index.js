// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const teams = data.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({teams, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state

    return (
      <div className="background">
        <div className="ipl">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-list">
            {teams.map(team => (
              <Link key={team.id} to={`/team-matches/${team.id}`}>
                <TeamCard data={team} />
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Home
