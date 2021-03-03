import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from '../reducers'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return(
		<Provider store={createStore(reducers)}>
			<Head>
				<title>MTG Card Search</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
			</Head>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
