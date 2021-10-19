import {Button} from 'react-bootstrap'
import React, { useState } from 'react'

const Estados = () => {

    const[contador, setContador] = useState(0)

    const nome = 'natana'
    // const contador = 0

    function adicionar (){
        const valor = contador + 1
        setContador(valor) 
    }

    function subtrair (){
        const valor = contador - 1
        setContador(valor) 
    }

    return (
        <div>
            <h1>Estados</h1>
            <p>{nome}</p>
            <Button variant="success" onClick={subtrair}>-</Button>
            {' '}<span>{contador}</span>{' '}
            <Button variant="success" onClick={adicionar}>+</Button>
        </div>
    )
}

export default Estados
