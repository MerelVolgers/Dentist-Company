import React from "react"

class Inputfield extends React.Component {
    constructor () {
        super()
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            telephone: "",
            // isSick: "",
        }
        this.onInput = this.onInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onInput (event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmit (event) {
        event.preventDefault()
        this.props.addDentist(this.state)
        this.setState({
            first_name: "",
            last_name: "",
            email: "",
            telephone: "",
            // isSick: "",
        })
    }

    render() {
        return(      
            <div className= "Form">

                <form className="input" style={{width: "100%"}} onSubmit={this.onSubmit}>
                    <input
                        type = "text"
                        value = {this.state.first_name}
                        name = "first_name"
                        placeholder = "Type first name here..."
                        onChange = {this.onInput}
                        className = "input"
                    />

                    <input
                        type = "text"
                        value = {this.state.last_name}
                        name = "last_name"
                        placeholder = "Type last name here..."
                        onChange = {this.onInput}
                        className = "input"
                    />

                    <input
                        type = "text"
                        value = {this.state.email}
                        name = "email"
                        placeholder = "Type email here..."
                        onChange = {this.onInput}
                        className = "input"
                    />

                    <input
                        type = "text"
                        value = {this.state.telephone}
                        name = "telephone"
                        placeholder = "Type telephone here..."
                        onChange = {this.onInput}
                        className = "input"
                    />

                    <button className = "button-new-input" type="submit"> Add To List! </button>
                </form>
            </div>
        )
    }
}

export default Inputfield