import React from 'react';
import './style/App.css';
import MainMenu from "./js/MainMenu";
import AddNewParticipantForm from './js/addNewParticipant';
import {GetAllParticipants} from './js/getAllParticipants';
import {getAll} from './js/handleParticipants';

class App extends React.Component {

    state = {
      part: {},
      parts: []
    }

  getAllParts = () => {
    getAll()
      .then(resp => {
        return resp.text();
      })
      .then(text => {
        let respParts = JSON.parse(text);
        this.setState({parts: respParts});
        GetAllParticipants(respParts);
      })
  }

  render(){
    return(
      <div>
        <div>
          <MainMenu/>
        </div>
        <div>
          <GetAllParticipants parts={this.getAllParts}/>
          <AddNewParticipantForm/>
        </div>
      </div>
    )
  }
}

export default App;
