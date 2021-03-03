import s from './CardSearch.module.scss'
import React, {useState} from 'react'
import axios from 'axios'
import Button from '../Button/Button'
import Link from 'next/link'

const CardSearch = (props) => {
	const[cardName, setCardName] = useState('');

	const cardSearchUrl = `https://api.scryfall.com/cards/search`

	const searchApi = async (event) => {
		event.preventDefault();

		const response = await axios.get(cardSearchUrl, {
			params: {
				q: cardName
			}
		});

		props.cardData(response.data);
		props.loading(false);
	}

	return(
		<form className={`${s.form}`} onSubmit={() => searchApi(event)}>
			<input className={s.input} value={cardName} onChange={(event) => setCardName(event.target.value)} type="text" placeholder="Card Name..."></input>
			<Button color="purple" size="m" onClick={() => searchApi(event)}>Search</Button>
		</form>
	);
}

export default CardSearch

