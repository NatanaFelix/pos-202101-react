import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Hello World</Link>
                        <Link className="nav-link" to="Pagina1">Página 1</Link>
                        <Link className="nav-link" to="Pagina2">Página 2</Link>
                        <Link className="nav-link" to="arrays">Arrays</Link>
                        <Link className="nav-link" to="objetos">Objetos</Link>
                        <Link className="nav-link" to="estados">Estados</Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}
export default Menu