import React from "react"

function Patient ({id, first_name, last_name, email, telephone, makeDentistSick}) {

    return(
        <tr
            key = {id}
        >
            <td> {first_name || ""} </td>
            <td> {last_name || ""} </td>
            <td> {email || ""}  </td>
            <td> {telephone || ""}  </td>
            {/* <td> <button onClick={ () => props.makeClientSick(props.id) }> Sick </button></td> */}
            
        </tr>
    )
}

export default Patient