import React, {Component} from "react";
import "./App.css";
import Dentist from "./Dentist"
import Patient from "./Patient";
import Inputfield from "./Inputfield"

function changeInfo ({state, addDentist}) {
    const ListofDentists = state.dentists ? state.dentists.map (dentist => (
        <Dentist 
            key = {dentist.id}
            id = {dentist.id}
            first_name = {dentist.first_name}
            last_name = {dentist.last_name}
            email = {dentist.email}
            telephone = {dentist.telephone}
            // isSick = {dentist.isSick}
        />
    )) : " "

    const ListofPatients = state.patients ? state.patients.map (patient => (
        <Patient     
            key = {patient.id}
            id = {patient.id}
            first_name = {patient.first_name}
            last_name = {patient.last_name}
            email = {patient.email}
            telephone = {patient.telephone}
            // isSick = {patient.isSick}
        />
    )) : " "

    return(
        <div>
            <h2> Add a new dentist here: </h2>
            <Inputfield 
                state ={state} 
                addDentist={addDentist} 
            />

            <table className= "table">
                <thead className="table-head"> 
                    <th className="table-head-row" > First Name </th>
                    <th className="table-head-row"> Last Name </th>
                    <th className="table-head-row"> Email  </th>
                    <th className="table-head-row"> Telephone  </th>
                    <th> Is sick? </th>
                </thead>
                
                <tbody className="table-body">
                    {ListofDentists}
                </tbody>
            </table>

            <h2> Add a new patient here: </h2>

            <Inputfield 
                state = {state} 
            />

            <table className= "table">
                <thead className="table-head"> 
                    <th className="table-head-row" > First Name </th>
                    <th className="table-head-row"> Last Name </th>
                    <th className="table-head-row"> Email  </th>
                    <th className="table-head-row"> Telephone  </th>
                    <th> Is sick? </th>
                </thead>
                
                <tbody className="table-body">
                    {ListofPatients}
                </tbody>
            </table>
            
        </div>
    )
}

export default changeInfo