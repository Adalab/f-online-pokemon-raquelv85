import React, { Component } from 'react';

class ListCard extends Component {



    render() {
        const { pokemons } = this.props;
        return (
            <div className="container__listcard">

                <ul className="listcard">

                    {pokemons.map((item, index) => {
                        if (item != null) {
                            return <li key={index}>
                                <p>{item.name}</p>
                                <img src={item.sprites.front_default} />
                                {item.types.map((type) => {
                                    return <p>{type.type.name}</p>
                                })}
                            </li>
                        }

                    })}

                </ul>

            </div>
        );
    }
}

export default ListCard;