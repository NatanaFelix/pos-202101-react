import React from 'react'
import { Button } from 'react-bootstrap'

export const HelloWorld = () => {
    return (
        <div>
            <div>
                <h1>Hello</h1>
                <p>Paragrafo</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad aspernatur totam placeat, possimus corporis consectetur. Nulla rerum itaque laborum quis voluptas excepturi necessitatibus. Quod, consequuntur omnis? Quis, ratione laborum.</p>
            
                <Button variant="primary">Salvar</Button>
                <Button variant="danger">Salvar</Button>
                <Button variant="success">Salvar</Button>
            </div>
        </div>
    )
}
export default HelloWorld