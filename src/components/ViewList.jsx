import { Component } from 'react';
import Cabecera from './Cabecera';
import Lista from './Lista';

export default class ViewList extends Component {
    render() {
        const { data, handleClick, nuevoUsuario } = this.props
        return (
            <div>
                <Cabecera nuevoUsuario={nuevoUsuario} />
                <Lista handleClick={handleClick} data={data}/>
            </div>
        )
    }
}