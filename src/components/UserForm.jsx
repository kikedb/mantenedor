import { Component } from 'react';

export default class UserForm extends Component {
    handleChange = ({ target }) => {
        this.setState({
            [target.value]: target.value
        })
    }

    render() {
        console.log(this.state);
        return (
            <form>
                <input onChange={this.handleChange} name="name" />
                <input onChange={this.handleChange} name="email" />
                <input onChange={this.handleChange} name="website" />
            </form>
        )
    }
}