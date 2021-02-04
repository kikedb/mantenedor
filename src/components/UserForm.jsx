import { Component } from 'react';

const validate = values => {
    const errors = {}
    if(!values.name) {
        errors.name = 'Este campo es obligatorio'
    }
    if(!values.email) {
        errors.email = 'Este campo es obligatorio'
    }
    if(!values.website) {
        errors.website = 'Este campo es obligatorio'
    }
    return errors
}
export default class UserForm extends Component {
    state = {
        errors: {}
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const {errors, ...sinErrors } = this.state
        const result = validate(sinErrors)
        this.setState({errors: result })
        if(!Object.keys(result).length) {
            const { handleSubmit } = this.props
            handleSubmit(sinErrors)
            e.target.reset()
        }
    }

    render() {
        console.log(this.state);
        const {errors} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Nombre" onChange={this.handleChange} name="name" />
                {errors.name && <p>{errors.name}</p>}
                <input placeholder="Email" onChange={this.handleChange} name="email" />
                {errors.email && <p>{errors.email}</p>}
                <input placeholder="Sitio web" onChange={this.handleChange} name="website" />
                {errors.website && <p>{errors.website}</p>}
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}