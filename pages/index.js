import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react'
import SpinnerLoading from '../components/SpinnerLoading'
import { Container, Row } from 'react-bootstrap'
import CardSearch from '../components/CardSearch'

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
							<CardSearch cardData={setCardData} />
						</div> 
					</Row>
				</Container> 
			</section>
			{loading === false ? 
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
							<h2 className={styles.descriptionTitle}>{cardData.name}</h2>
							<Image
								src="/image-placeholder-back.jpg"
								alt={cardData.name}
								height={349}
								width={250}
							/>
							<p className={styles.descriptionText}>Artist: {cardData.artist}</p>
							<p className={styles.flavorText}>{cardData.flavor_text}</p>
						</div>
					</Row>
					<Row>
						<div className="col-12 col-lg-12">
							<div className={styles.facts}>
								<ul className={`${styles.list} d-flex`}>
									<li className={styles.factsFields}>
										<h3 className="text-white">Rarity: </h3>
										<p className="text-white main-text">{cardData.rarity}</p>
									</li>
									<li className={styles.factsFields}>
										<h3 className="text-white">Type: </h3>
										<p className="text-white main-text">{cardData.type_line}</p>
									</li>
									<li className={styles.factsFields}>
										<h3 className="text-white">First Set: </h3>
										<p className="text-white main-text">{cardData.set_name}</p>
									</li>
									<li className={styles.factsFields}>
										<h3 className="text-white">Released Date: </h3>
										<p className="text-white main-text">{cardData.released_at}</p>
									</li>
								</ul>
							</div>
						</div>
					</Row>
				</Container>
			</section>
			}
		</>
	);	
}

export default Home
