import s from './CardList.module.scss'
import React, {useEffect} from 'react'
import Link from 'next/link'
import CircularProgress from '@material-ui/core/CircularProgress'

const CardList = ({cardData}) => {
    // useEffect(() => {
    //     loading(false)
    // });
    const cardInfo = cardData.data
    
    const mappedCards = cardInfo.map((card) => {
        return(
            <div key={card.id} className={`${s.card} mb-5 col-12 col-lg-4`} style={{ textAlign: "center" }}>
                <Link href={`cardDetail/`}>
                    <a className={`${s.descriptionTitle} text-white`}>
                        {card.name}
                        <img className="img-fluid mt-3" src={card.image_uris.png} alt="image"></img>
                    </a>
                </Link>
            </div>
        )
    });

    return (
        <>
            {mappedCards}
        </>
    );
}

export default CardList
