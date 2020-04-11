import React, {useContext} from 'react';
import {PageContext, Pages} from '../../providers/pageProvider';
import { Navbar, Nav } from 'react-bootstrap';
import '../../styles/menu.scss';

const CustomNavbar = () => {
    const [pageName, setPageName] = useContext(PageContext)
    const pages = Object.keys(Pages)

    const getNavItem = (page: string, i: number) => {
        const value = (Pages as any)[page]
        return (<Nav.Link key={i} onClick={() => setPageName(value)}> {value} </Nav.Link>)
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="white">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {pages.map((page: string, i: number) => getNavItem(page, i))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNavbar