import { Component } from 'react';
import Cabecera from './Cabecera';
import Lista from './Lista';

export default class ViewList extends Component {
    render() {
        const { data, handleClick } = this.props
        return (
            <div>
                <Cabecera />
                <Lista handleClick={handleClick} data={data}/>
            </div>
        )
    }
}