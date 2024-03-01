import { useTranslation } from 'react-i18next';

import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaTwitter } from "react-icons/fa";


import './footer.css'

const Footer = () => {

	const { t } = useTranslation();

	return (
		<footer className='py-5 py-md-4 py-xl-5 bg-light'>
			<Container>
				<Row className='gap-5 gap-sm-0'>
					<Col sm={6} lg={3}>
					{/* Content for the first column */}
						<div className="d-flex d-flex-col align-items-center justify-content-center justify-content-sm-start">
							<img src="./imatco_logo.png" alt="Imatco Logo Brand" className="logo-brand mt-3 mt-lg-0" />
						</div>
					</Col>
					<Col sm={6} lg={3}>
					{/* Content for the third column */}
						<div className="d-flex justify-content-center justify-content-sm-start">
							<ListGroup as="ul" className="list-unstyled gap-3 text-capitalize fw-medium footer-list text-center text-sm-start">
								<li><a href="/about-us">{t('about us')}</a></li>
								<li><a href="/technical-profiles">{t('technical profiles')}</a></li>
								<li><a href="/our-sponsers">{t('our sponsers')}</a></li>
								<li><a href="/faq">{t('faq')}</a></li>
							</ListGroup>
						</div>
					</Col>
					<Col sm={6} lg={3}>
					{/* Content for the third column */}
						<div className="d-flex justify-content-center justify-content-sm-start">
							<ListGroup as="ul" className="list-unstyled  gap-3 text-capitalize fw-medium footer-list text-center text-sm-start">
								<li><a href="/blog">{t('blog')}</a></li>
								<li><a href="/login">{t('login')}</a></li>
								<li><a href="/register">{t('register')}</a></li>
							</ListGroup>
						</div>
					</Col>
					<Col sm={6} lg={3}>
					{/* Content for the second column */}
						<div className="d-flex justify-content-center justify-content-sm-start  mt-3 mt-lg-0">
							<div className="d-flex flex-cols align-items-center justify-content-sm-start">
								<div className="">
									<p className='fw-bold text-uppercase header-colored'>{t('media')} <span className='colord-text'>{t('social')}</span></p>
									<a href="https://twitter.com/" rel="noreferrer" target='_blank' className='text-center text-sm-end social-icon'>
										<FaTwitter size={24} />
									</a>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
