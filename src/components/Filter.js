import React, { Component } from 'react';

class Filter extends Component {

    render() {
        return (

            <div className="container__input-filter">
                <input
                    onChange={this.props.onChangeInput}
                    className="input"
                    type="text"
                    placeholder="Introduce el nombre" />
            </div>
        );
    }

}

export default Filter;