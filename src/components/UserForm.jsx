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

    constructor(props) {
        super()
        this.state = {
            ...this.state, 
            ...props.valoresIniciales,
        }
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
        if(!Object.keys(result).length) {
            const { handleSubmit, handleUpdate, valoresIniciales } = this.props
            if(valoresIniciales.id) {
                handleUpdate(valoresIniciales.id, sinErrors)
            } else {
                handleSubmit(sinErrors)
            }
        } else {
            this.setState({errors: result })
        }
    }

    render() {
        const {errors} = this.state
        const { valoresIniciales } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <input defaultValue={valoresIniciales.name} placeholder="Nombre" onChange={this.handleChange} name="name" />
                {errors.name && <p>{errors.name}</p>}
                <input defaultValue={valoresIniciales.email} placeholder="Email" onChange={this.handleChange} name="email" />
                {errors.email && <p>{errors.email}</p>}
                <input defaultValue={valoresIniciales.website} placeholder="Sitio web" onChange={this.handleChange} name="website" />
                {errors.website && <p>{errors.website}</p>}
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}