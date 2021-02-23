import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import React, {useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import SpinnerLoading from '../components/SpinnerLoading'
import CardSearch from '../components/CardSearch'
import CardDescription from '../components/CardDescription'
import CardDetail from '../components/CardDetail'

const Home = () => {
	const[cardData, setCardData] = useState([]);
	const[loading, setLoading] = useState(true);
	
	return(
		<>
			<Head>
				<title>MTG Card Search</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
			</Head>
			<section className={styles.searchForm}>
				<Container>
					<Row>
						<div className="col-12 col-lg-12 mt-5" style={{ textAlign: 'center' }}>
							<h1 className="main-title">MTG - CARD SEARCH</h1>
						</div>
						<div className="col-12 col-lg-12 mt-5" style={{ textAlign: 'center' }}>
							<CardSearch cardData={setCardData} loading={setLoading} />
						</div> 
					</Row>
				</Container> 
			</section>
			{loading ? 
			<section className="mt-5">
				<Container>
					<Row>
						<div className="col-12 col-lg-12 d-flex" style={{ justifyContent: "center" }}>
							<SpinnerLoading />
						</div>
					</Row>
				</Container>
			</section>
			:
			<section className={styles.cardDescription}>
				<Container>
					<Row>
						<div className="col-12 col-lg-12 d-flex flex-wrap" style={{ justifyContent: "center" }}>
							<CardDetail cardData={cardData} />
						</div>
					</Row>
					<Row>
						<div className="col-12 col-lg-12">
							<CardDescription cardData={cardData} />
						</div>
					</Row>
				</Container>
			</section>
			}
		</>
	);	
}

export default Home
