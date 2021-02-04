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
            [target.value]: target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const {errors, ...sinErrors } = this.state
        const result = validate(sinErrors)
        this.setState({errors: result })
        if(Object.keys(result).length) {
            // Envio del formulario
            e.target.reset()
        }
    }

    render() {
        const {errors} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="nombre" onChange={this.handleChange} name="name" />
                {errors.name && <p>{errors.name}</p>}
                <input placeholder="email" onChange={this.handleChange} name="email" />
                {errors.email && <p>{errors.email}</p>}
                <input placeholder="website" onChange={this.handleChange} name="website" />
                {errors.website && <p>{errors.website}</p>}
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}