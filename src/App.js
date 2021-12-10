import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

import variables from "./utils";
import changeInfo from "./Home";


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      dentists: variables.dentists,
      assistants: variables.assistants,
      patients: variables.clients,
      appointments: variables.appointments
    }
    this.addDentist = this.addDentist.bind(this)
    // this.addPatient = this.addPatient.bind(this)
    // this.makeDentistSick = this.makeDentistSick.bind(this)
    // this.makePatientSick = this.makePatientSick.bind(this)
    // this.addAppointment = this.addAppointment.bind(this)
    // this.removeAppointment = this.removeAppointment.bind(this)
  }

  addDentist = (dentist) => {
    const newDentist = {
      id: this.state.dentists.length +1,
      first_name: dentist.first_name,
      last_name: dentist.last_name,
      email: dentist.email,
      telephone: dentist.telephone,
    }
    this.setState({dentists: this.state.dentists.concat(newDentist)})
  }

  // addPatient = (patient) => {
  //   const newPatient ={
  //     id: this.state.patients.length +1,
  //     first_name: patient.first_name,
  //     last_name: patient.last_name,
  //     email: patient.email,
  //     telephone: patient.telephone,
  //   }
  //   this.setState({patients: this.state.patients.concat(newPatient)})
  // }

  // makeDentistSick(dentistId) {
  //   this.setState()
  // }

    render() {
      return(
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/calendar">Calendar view</Link></li>
                <li><Link to="/day">Day view</Link></li>
              </ul>
            </nav>
  
            <main>
              <Switch>
                <Route path="/calendar">
                  <Calendar 
                    appointments={this.state.appointments} 
                    // sickDentists = {this.sickDentists}
                    // sickStyle = {this.sickStyle}
                    // removeAppointment = {tis.removeAppointment}
                  />
                </Route>
  
                <Route path="/day">
                  <Day 
                    appointments={this.state.appointments.filter(app => app.day === 1)} 
                    // sickDentists = {this.sickDentists}
                    // sickStyle = {this.sickStyle}
                  />
                </Route>
  
                <Route path="/">
                  <Home
                    state = {this.state}
                    addDentist = {this.addDentist}
                    addPatient = {this.addPatient}
                    // makeDentistSick = {this.makeDentistSick}
                    // makePatientSick = {this.makePatientSick}
                    // addAppointment = {this.addAppointment}
                    // removeAppointment = {this.removeAppointment}
                  />
                </Route>
                `1`
              </Switch>
            </main>
          </div>
        </Router>
      )
    }
  }

export default App;
