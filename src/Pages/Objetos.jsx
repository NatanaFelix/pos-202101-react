import React from 'react'

const Objetos = () => {

    const carros = [
        {Marca: 'Fiat', Modelo: '147', Ano: 1982, Placa: 'ABD 1E23', Foto: '',},
        {Marca: 'VW', Modelo: 'Fuscão', Ano: 1987, Placa: 'ABD 2F34', Foto: '',},
        {Marca: 'VW', Modelo: 'Brasília', Ano: 1982, Placa: 'ABD 3G45', Foto: '',},
        {Marca: 'VW', Modelo: 'Kombi', Ano: 1982, Placa: 'ABD 4H67', Foto: '',},        
    ]

    return (
        <div>
            <h1>Objetos</h1>
            <p>{carros.Modelo}</p>
            {carros.map(carro=>(
                <>
                {/* <p>{carro}</p> */}
                <p>{carro.Marca} {carro.Modelo} ({carro.Ano}) </p>
                </>
            ))}
        </div>
    )
}

export default Objetos
