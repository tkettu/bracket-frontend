import React from 'react'
import { connect } from 'react-redux'

import { Table, Form } from 'semantic-ui-react'

import { changeScore } from '../reducers/gameReducer'
import { filterChange } from '../reducers/filterReducer'

import store from '../store'

const handleChange = (props, game, home, away) => {

} 

const scoreStyle = {
  padding: 0,
  width: 100
}

const Team = ({team, props}) => {
  
  if (team !== undefined){
    return(
      <Table.Cell onClick={() => props.filterChange(team.id)} width={3}>
        <a href=
          {`https://en.wikipedia.org/wiki/${(team.name).split(' ').join('_')}_national_football_team`}>
          {team.fifaCode}
        </a>
      </Table.Cell>
    )
  }
  return (
    null    
  )
}

const LocDate = (date) => {
  const _date = new Date(date.date)
  
  const minutes = _date.getMinutes() >= 10 ? _date.getMinutes() : `0${_date.getMinutes()}`
  const day = `${_date.getDate()}.${_date.getMonth()},
             ${_date.getHours()}:${minutes}`
  
  return (
    <Table.Cell>
      {day}
    </Table.Cell>
  )
}

const Result = (game) => (
  <Table.Cell width={3}>
    {game.home_result} - {game.away_result}
  </Table.Cell>
)
  
//If user logged in veikkaus columni viereen
const BracketCell = () => (
  <Table.Cell>
    <input type='text' onChange={() => console.log('CHAngeTAAN')} />
  </Table.Cell>
)



const GameList = (props) => (
  <div>
    <Table textAlign={"center"} attached celled striped fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Päivä</Table.HeaderCell>
          <Table.HeaderCell>Koti</Table.HeaderCell>
          <Table.HeaderCell>Vieras</Table.HeaderCell>
          <Table.HeaderCell>Tulos</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.visibleGames.map(game => 
          <Table.Row key={game.name}>
            <LocDate date={game.date} />
            <Team team={props.teamList.find(t => t.id === game.home_team)} props={props} />
            <Team team={props.teamList.find(t => t.id === game.away_team)} props={props} />
            <Result game={game}/>
            <BracketCell />
          </Table.Row>
        )}
      </Table.Body>  
    </Table>
  </div>
)



const gamesToShow = (games, team) => {
  return (team === 'ALL' ? games :
          games.filter(game => game.home_team === team ||
                               game.away_team === team))
}

const mapStateToProps = (state) => {
  return {
    //
    teamList: state.teams,
    visibleGames: gamesToShow(state.games, state.filter)
  }
}

export default connect(
  mapStateToProps,
  { filterChange }
)(GameList)