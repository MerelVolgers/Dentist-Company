import React from "react"

function Dentist ({id, first_name, last_name, email, telephone, makeDentistSick, addDentist}) {

    return(
        <tr
            key = {id}
        >
            <td> {first_name || ""} </td>
            <td> {last_name || ""} </td>
            <td> {email || ""}  </td>
            <td> {telephone || ""}  </td>
            {/* <td> <button onClick={ () => props.makeDentistSick(props.id) }> Sick </button></td> */}
            
        </tr>
    )
}

export default Dentist