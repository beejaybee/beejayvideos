import { Component } from "react";




class SearchBar extends Component {

    state = {userInput: ''}

    handleUserInput = (e) => {
        this.setState({userInput: e.target.value})
    }

    onFormSubmit = e => {
        e.preventDefault()

        this.props.handleFormSubmit(this.state.userInput)
    }

    render() {
        return (
            <div className=" search-bar ui segment">
                <form className="ui form"
                onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <label>Seacrh Videos</label>
                        <input 
                        type="text"
                        value={this.state.userInput}
                        onChange={this.handleUserInput}
                        /> 
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar