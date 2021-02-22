import styles from '../styles/Home.module.css'
import Head from 'next/head'
import React, {useState} from 'react'
import axios from 'axios'
import SpinnerLoading from '../components/SpinnerLoading'

const Home = () => {
	const[cardName, setCardName] = useState('');
	const[loading, setLoading] = useState(false);

	const baseUrl = 'https://api.scryfall.com'
	const cardSearchUrl = `https://api.scryfall.com/cards/named?fuzzy=${cardName}`

	const searchApi = async (event) => {
		event.preventDefault();

		const response = await axios.get(cardSearchUrl, {
			params: {

			}
		});

		setCardName('');
		
		console.log(response.data);
	}

	return(
		<React.Fragment>
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
			<section>
				<SpinnerLoading />
			</section>
		</React.Fragment>
	);	
}

export default Home
