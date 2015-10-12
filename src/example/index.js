//Dependencies
import React, { Component } from 'react';
import Noficication from './component/notification'


export default class App extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
          <div>
              <h1>NOTIFICATION</h1>
              <Notification content='Super content' date={new Date()} title='titre'/>
              <button className='mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored'><i className="material-icons">add</i></button>
          </div>
      );
  }
}
