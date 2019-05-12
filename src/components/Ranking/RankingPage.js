import React, { Component } from 'react';
import Ranking from './Ranking';
import {userService} from '../../service/user.service';


export default class RankingPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    userService.getAllUsers()
          .then(data => {
          console.log(data)
           this.setState({ users:data })
          }
    )
  }

  render() {
    return (
      <div>
        <Ranking users={this.state.users}/>         
      </div>
    )
  }
}