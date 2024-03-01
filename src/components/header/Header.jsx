import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import LanguageSwitcher from './LanguageSwitcher';

import './header.css';


import { useTranslation } from 'react-i18next';

function Header() {

	
	const { t } = useTranslation();

    return (
		<Navbar expand='lg' className="py-3 tajawal-medium ">
			<Container>
				<Navbar.Brand href="#">
					<img src="./imatco_logo.png" alt="Imatco Logo Brand" srcSet="" className='logo-brand' />
				</Navbar.Brand>
					
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-lg`}
					aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
					placement="end"
					dir='ltr'
				>

					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
							<img src="./imatco_logo.png" alt="Imatco Logo Brand" srcSet="" className='logo-brand' />
						</Offcanvas.Title>
					</Offcanvas.Header>

					<Offcanvas.Body className='pt-0'>
						<Nav className="justify-content-center align-items-center mt-2 gap-2 gap-xl-4 flex-grow-1 text-uppercase fw-medium">
							<Nav.Link href="#action1">{t('technical profiles')}</Nav.Link>
							<Nav.Link href="#action2">{t('blog')}</Nav.Link>
							<Nav.Link href="#action2">{t('about us')}</Nav.Link>
							<Nav.Link href="#action2">{t('our sponsers')}</Nav.Link>
							<Nav.Link href="#action2">{t('faq')}</Nav.Link>
						</Nav>
						<Button variant="success" className='bg-success w-100 mt-4 btn-md text-uppercase d-md-none'>{t('login')}</Button>{' '}
					</Offcanvas.Body>
				</Navbar.Offcanvas>

				<div className="d-flex flex-row gap-2">
					<div className="d-flex align-items-center gap-4">
						<LanguageSwitcher />
						<Button variant="success" className='bg-success btn-md text-uppercase d-none d-md-block'>{t('login')}</Button>{' '}
					</div>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
				</div>
			</Container>
		</Navbar>
      );
  }
  
export default Header;