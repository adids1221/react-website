import React from 'react';
import CardItem from './Carditem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Explore the hiddenn waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Travel through the Island of Bali"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__item">
                        <CardItem
                            src="images/img-8.jpg"
                            text="Explore the Desert"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-3.jpg"
                            text="Travel Ice-Land another planet"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-6.jpg"
                            text="Travel through Tokyo and explore another cultre"
                            label="Adventure"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
