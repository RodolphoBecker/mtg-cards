import styles from '../styles/CardDetail.module.scss'
import React from 'react'
import Image from 'next/image'

const CardDetail = ({cardData}) => {
    return (
        <>
            <h2 className={styles.descriptionTitle}>{cardData.name}</h2>
            <Image 
                src="/image-placeholder-back.jpg" 
                alt={cardData.name} 
                height={349} 
                width={250} 
            />
            <p className={styles.descriptionText}>Artist: {cardData.artist}</p>
            <p className={styles.flavorText}>{cardData.flavor_text}</p>
        </>
    );
}

export default CardDetail
