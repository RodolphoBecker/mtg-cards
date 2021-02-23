import styles from '../styles/CardSearch.module.scss'
import React, {useState} from 'react'
import axios from 'axios'

const CardSearch = (props) => {
	const[cardName, setCardName] = useState('');

	const cardSearchUrl = `https://api.scryfall.com/cards/named?fuzzy=${cardName}`

	const searchApi = async (event) => {
		event.preventDefault();

		const response = await axios.get(cardSearchUrl, {
			params: {

			}
		});

		setCardName('');
		props.cardData(response.data);
	}

	return(
		<form className={`${styles.form}`} onSubmit={() => searchApi(event)}>
			<input className={styles.input} value={cardName} onChange={(event) => setCardName(event.target.value)} type="text" placeholder="Card Name..."></input>
			<button className={styles.button} onClick={() => searchApi(event)}>Search</button>
		</form>
	);
}

export default CardSearch