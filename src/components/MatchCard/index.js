// Write your code here
import './index.css'

const MatchCard = ({item2}) => {
  const upda = {
    result: item2.result,
    matchStatus: item2.match_status,
    competingTeam: item2.competing_team,
    competingTeamLogo: item2.competing_team_logo,
  }

  return (
    <li>
      <img src={upda.competingTeamLogo} alt={upda.competingTeam} />
      <h1>{upda.competingTeam}</h1>
      <p>{upda.result}</p>
      <p>{upda.matchStatus}</p>
    </li>
  )
}
export default MatchCard
