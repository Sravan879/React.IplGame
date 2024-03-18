// Write your code here
import './index.css'

const LatestMatch = ({item1}) => {
  const upd = {
    umpires: item1.umpires,
    result: item1.result,
    manOfTheMatch: item1.man_of_the_match,
    id: item1.id,
    date: item1.date,
    venue: item1.venue,
    competingTeam: item1.competing_team,
    competingTeamLogo: item1.competing_team_logo,
    firstInnings: item1.first_innings,
    secondInnings: item1.second_innings,
    matchStatus: item1.match_status,
  }

  return (
    <div className="sr">
      <h1>{upd.competingTeam}</h1>
      <p>{upd.date}</p>
      <p>{upd.venue}</p>
      <p>{upd.result}</p>
      <img src={upd.competingTeamLogo} alt={upd.competingTeam} />
      <p>First Innings</p>
      <p>{upd.firstInnings}</p>
      <p>Second Innings</p>
      <p>{upd.secondInnings}</p>
      <p>Man Of The Match</p>
      <p>{upd.manOfTheMatch}</p>
      <p>{upd.umpires}</p>
    </div>
  )
}
export default LatestMatch
