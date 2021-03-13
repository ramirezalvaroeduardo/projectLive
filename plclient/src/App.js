import React from 'react';
import './style/App.css';
import MainMenu from "./js/MainMenu";
import AddNewParticipantForm from './js/addNewParticipant';
import GetAllParticipants from './js/getAllParticipants';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          participants: [],
          phone: '',
          name: '',
          age: '',
          addressNumber1: '',
          addressNumber2: '',
          city: '',
          state: '',
          zip: '',
          hadCovid: false
      }
  }

  render(){
    return(
      <div>
        <div>
          <MainMenu/>
        </div>
        <div>
          <GetAllParticipants/>
          <AddNewParticipantForm/>
        </div>
      </div>
    )
  }
}

export default App;
