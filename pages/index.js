import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react'
import axios from 'axios'
import SpinnerLoading from '../components/SpinnerLoading'

const Home = () => {
	const[cardName, setCardName] = useState('');
	const[loading, setLoading] = useState(false);
	const[cardData, setCardData] = useState([]);

	const baseUrl = 'https://api.scryfall.com'
	const cardSearchUrl = `https://api.scryfall.com/cards/named?fuzzy=${cardName}`

	const searchApi = async (event) => {
		event.preventDefault();

		const response = await axios.get(cardSearchUrl, {
			params: {

			}
		});

		setCardName('');
		setLoading(true)
		setCardData(response.data);
		console.log(response.data)
	}

	return(
		<>
			<Head>
				<title>MTG Card Search</title>
				<link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
			</Head>
			<section className={styles.searchForm}>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-12 mt-5" style={{ textAlign: 'center' }}>
							<h1 className="main-title">MTG - CARD SEARCH</h1>
						</div>
						<div className="col-12 col-lg-12 mt-5" style={{ textAlign: 'center' }}>
							<form className={`${styles.form}`} onSubmit={() => searchApi(event)}>
								<input className={styles.input} value={cardName} onChange={(event) => setCardName(event.target.value)} type="text" placeholder="Card Name..."></input>
								<button className={styles.button} onClick={() => searchApi(event)}>Search</button>
							</form>
						</div> 
					</div>
				</div>
			</section>
			{loading === false ? 
			<section className="mt-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-12 d-flex" style={{ justifyContent: "center" }}>
							<SpinnerLoading />
						</div>
					</div>
				</div>
			</section>
			:
			<section className={styles.cardDescription}>
				<div className="container">
					<div className="row">
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
					</div>
					<div className="row">
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
					</div>
				</div>
			</section>
			}
		</>
	);	
}

export default Home
