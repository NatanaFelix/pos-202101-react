import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HelloWorld from './Components/HelloWorld'
import Arrays from './Pages/Arrays'
import Estados from './Pages/Estados'
import Objetos from './Pages/Objetos'
import Pagina1 from './Pages/Pagina1'
import Pagina2 from './Pages/Pagina2'

const Rotas = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={HelloWorld}/>
                <Route exact path="/Pagina1" component={Pagina1}/>
                <Route exact path="/Pagina2" component={Pagina2}/>
                <Route exact path="/arrays" component={Arrays}/>
                <Route exact path="/objetos" component={Objetos}/>
                <Route exact path="/estados" component={Estados}/>
            </Switch>
        </div>
    )
}
export default Rotas