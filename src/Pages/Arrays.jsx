import React from 'react'

const Arrays = () => {

    const nome = 'Natana'
    const carros = [
        'fiat 147',
        'fuscao',
        'brasilia',
        'kombi',
    ]

    return (
        <div>
            <h1>Array</h1>
            <p>{nome}</p>
            <p>{carros[1]}</p>
            <ul>
            <p>{carros.map(carro => (
               <li> <p>{carro}</p> </li>
            ))}</p>
            </ul>
        </div>
    )
}

export default Arrays
