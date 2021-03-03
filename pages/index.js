import s from '../styles/Home.module.scss'

import React, {useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import CardSearch from '../components/CardSearch/CardSearch'
import CardList from '../components/CardList/CardList'
import CircularProgress from '@material-ui/core/CircularProgress'

const Home = () => {
	const[cardData, setCardData] = useState(null);
	const[loading, setLoading] = useState(true);
	
	return(
		<>
			<div className="mainBackground">
				<section className={s.searchForm}>
					<Container>
						<Row>
							<div className="col-12 col-lg-12 mt-5" style={{ textAlign: 'center' }}>
								<h1 className="main-title text-white">MTG - CARD SEARCH</h1>
							</div>
							<div className="col-12 col-lg-12 mt-5" style={{ textAlign: 'center' }}>
								<CardSearch cardData={setCardData} loading={setLoading} />
							</div> 
						</Row>
					</Container> 
				</section>
				<section className={s.cardDescription}>
					<Container>
						{cardData === null ?
							<Row></Row>
						:
						<>
							<Row>
								<div className="d-flex flex-wrap" style={{ justifyContent: "center" }}>
									<CardList cardData={cardData} />
								</div>
							</Row>
						</>
						}
					</Container>
				</section>
			</div>
		</>
	);	
}

export default Home
