import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/navbar/logo.png';
import TrFlag from '../../assets/navbar/tr.png';
import { TbCurrencyLira } from 'react-icons/tb';
import './navbar.scss';


function navbar() {

    return (
        <Navbar className="header" expand="lg">
            <Container>
                <Navbar.Brand className='d-flex' href="#home"><img src={Logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navbar">
                        <Nav.Link className='nav__menu' href="#home">Uçak Bileti</Nav.Link>
                        <Nav.Link className='nav__menu' href="#link">Otobüs Bileti</Nav.Link>
                        <Nav.Link className='nav__menu nav__menu--active' href="#link">Otel Rezervasyon</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto navbar navbar--modf">
                        <Nav.Link className='nav__menu2' href="#link"><img className='nav__img' src={TrFlag} alt="tr-flag" /></Nav.Link>
                        <Nav.Link className='nav__menu2' href="#link"><TbCurrencyLira className='nav__img nav__img--icon' /></Nav.Link>
                        <NavDropdown className='border-radius-5 nav__menu' title="Yardım" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Rezervasyon Kontrol</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sıkça Sorulan Sorular</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Üyelik Avantajları</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Hakkımızda</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">İletişim</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='nav__menu' href="#link">Giriş Yap</Nav.Link>
                        <Nav.Link className='nav__menu nav__menu--btn' href="#link">Üye Ol</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navbar;