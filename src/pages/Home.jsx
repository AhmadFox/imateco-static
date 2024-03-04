import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useTranslation } from 'react-i18next';

import './home.css'

const Home = () => {

	const { t } = useTranslation();

	return (
		<Fragment>
			
			{/* Beginning Navbar */}
			<Header />

			{/* Beginning PAge Body */}
			<main className='mb-auto'>

				<div className="">
					<a href="https://www.namaventures.com" target='_blank'>
						<img src="./nama_banner.svg" alt="Nama Ventures Banner Desktop" className='w-100 h-auto object-fit-cover header-background d-none d-sm-block' />
						<img src="./nama_square_banner.svg" alt="Nama Ventures Banner Mobile" className='w-100 h-aut header-background d-block d-sm-none' />
					</a>
				</div>

				<header className='position-relative d-flex align-items-center justify-content-center'>
					<img src="./home_banner.png" alt="header home banner" className="w-100 h-100 object-fit-cover header-background" />
					<div className="d-flex flex-column justify-content-center align-items-center mx-auto w-50 postion-absolute header-message position-absolute text-wraper">
						<img src="./mono_logo.png" alt="" className="mb-3" />
						<p className='fw-medium text-center fs-5 text-white'>{t('heading-message-1')} <span className='text-heilight text-uppercase fw-bold'>{t('heading-message-2')}</span> {t('heading-message-2')}</p>
					</div>
				</header>

				<section className='py-4 py-md-5 my-xl-3'>
					<Container>
						<Row className="row-gap-4 px-4 px-sm-0">
							<Col sm={6} md={6} lg={3}>
								<Card className='border-0 bg-light py-4'>
									<Card.Body className='text-center'>
										<Card.Title>
											<img src='./icons/search.svg' alt="icons search" className='mb-3'/>
										</Card.Title>
										<Card.Subtitle className="fs-5 mb-2 fw-medium text-muted mb-3">{t('searches')}</Card.Subtitle>
										<Card.Text className='fs-3 text-heilight fw-bold'>42588</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col sm={6} md={6} lg={3} >
								<Card className='border-0 bg-light py-4'>
									<Card.Body className='text-center'>
										<Card.Title>
											<img src='./icons/users.svg' alt="icons users" className='mb-3'/>
										</Card.Title>
										<Card.Subtitle className="fs-5 mb-2 fw-medium text-muted mb-3">{t('users')}</Card.Subtitle>
										<Card.Text className='fs-3 text-heilight fw-bold'>3</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col sm={6} md={6} lg={3} >
								<Card className='border-0 bg-light py-4'>
									<Card.Body className='text-center'>
										<Card.Title>
											<img src='./icons/messages.svg' alt="icons messages" className='mb-3'/>
										</Card.Title>
										<Card.Subtitle className="fs-5 mb-2 fw-medium text-muted mb-3">{t('messages')}</Card.Subtitle>
										<Card.Text className='fs-3 text-heilight fw-bold'>2980</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col sm={6} md={6} lg={3} >
								<Card className='border-0 bg-light py-4'>
									<Card.Body className='text-center'>
										<Card.Title>
											<img src='./icons/visitors.svg' alt="icons visitors" className='mb-3'/>
										</Card.Title>
										<Card.Subtitle className="fs-5 mb-2 fw-medium text-muted mb-3">{t('File visits')}</Card.Subtitle>
										<Card.Text className='fs-2 text-heilight fw-bold'>31309</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</section>

				<Container><hr /></Container>

				<section className='py-4 py-md-5 my-xl-3'>
					<Container className='px-lg-5'>
						<Row>
							<Col xl={{ span: 10, offset: 1 }}>
								<Row className="row-gap-4 px-4 px-sm-0">
									<Col md={6}>
										<Card className='border-0 bg-light px-2 py-4 h-100'>
											<Card.Body className='d-flex flex-column justify-content-between gap-4 h-100'>
												<Card.Title className='fw-medium fs-3'>{t('Are you looking for a')} <span className='text-heilight'>{t('technical co-founder')}</span></Card.Title>
												<div>
													<Card.Subtitle className="fs-6 mb-2 fw-medium fw-bold mb-3">{t('looking for a developer')}</Card.Subtitle>
													<Card.Text className='fw-medium mb-2 fw-bold'>{t('You should only register if you are:')}</Card.Text>
													<Card.Text className='fw-medium mb-0'>{t('1- The owner of a startup company')}</Card.Text>
													<Card.Text className='fw-medium mb-0'>{t('2- You want a technical partner')}</Card.Text>
												</div>
												<div className="">
													<Button variant="outline-primary" className=''>{t('search')}</Button>
												</div>
											</Card.Body>
										</Card>
									</Col>
									<Col md={6}>
										<Card className='border-0 bg-light px-2 py-4 h-100'>
											<Card.Body className='d-flex flex-column justify-content-between gap-4 h-100'>
												<Card.Title className='fw-medium fs-3'>{t('Sign up to become a')} <span className='text-heilight'>{t('technical co-founder')}</span> {t('at Start-up company')}</Card.Title>
												<div>
													<Card.Subtitle className="fs-6 mb-2 fw-medium fw-bold mb-3">{t('Are you a developer/programmer looking to join a startup?')}</Card.Subtitle>
													<Card.Text className='fw-medium mb-2 fw-bold'>{t('You should only register if you are:')}</Card.Text>
													<Card.Text className='fw-medium mb-0'>{t('1- Developer/programmer')}</Card.Text>
													<Card.Text className='fw-medium mb-0'>{t('2- You want to be a founding partner in a startup technology company')}</Card.Text>
												</div>
												<div className="">
													<Button variant="primary" className=''>{t('Register As Technical Founder')}</Button>
												</div>
											</Card.Body>
										</Card>
									</Col>
								</Row>
							</Col>
						</Row>
						<p className='text-center py-4'>{t('If you have an account, please log in')} <a href="" className='fw-medium text-capitalize'>{t('here')}</a></p>
					</Container>
				</section>

				<section className='pb-4 pb-md-5'>
					<Container>
						<p className="text-center fs-3 mb-4 fw-medium">{t('Our Partners')}</p>
						<div className="d-flex justify-content-center gap-4">
							<a href="https://www.namaventures.com/" target="_balnk">
								<img src="./nama_venture_logo.png" alt="Nama Venture Logo" className='logo-partners ' />
							</a>
							<a href="https://namacoders.com" target="_balnk">
								<img src="./nama_coders_logo.png" alt="Nama Cofers Logo" className='logo-partners bg-light' />
							</a>
						</div>
					</Container>
				</section>

			</main>

			{/* Beginning Footer */}
			<Footer />

		</Fragment>
	)
}

export default Home;