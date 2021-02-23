import styles from '../styles/CardDescription.module.scss'
import React from 'react'

const CardDescription = ({cardData}) => {
    return(
        <>
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
        </>
    ) 
}

export default CardDescription