import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  async componentDidMount() {
    await this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const { match } = this.props
    const { id } = match.params

      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await response.json()

      this.setState({
        teamBannerUrl: data.team_banner_url,
        latestMatchDetails: data.latest_match_details,
        recentMatches: data.recent_matches,
        isLoading: false,
      })
  }

  render() {
    const { teamBannerUrl, latestMatchDetails, recentMatches, isLoading } = this.state

    return (
      <div className="back1">
        {isLoading ? (
          <div className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img src={teamBannerUrl} alt="team banner" />
            <p>Latest Matches</p>
            <LatestMatch item1={latestMatchDetails} />
            <ul>
              {recentMatches.map(eachitem => (
                <MatchCard item2={eachitem} key={eachitem.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
