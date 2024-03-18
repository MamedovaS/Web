import React, {useState} from "react";
import StadiumPicture from "../../components/Icons/mainStadium.jpg";
import {
    SectionWrapper,
    StyledText,
    StyledButton,
    CardWrapper,
} from "./Home.styled";
import CardItem from "../../components/CardElement/CardItem";

import dataCard from "../../components/Icons/dataCard";

const textTitle = " Vulputate nisi. Vivamus ligula nisi, sollicitudin a tempus efficitur, sagittis quis elit";

const titleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac venenatis lorem\n" +
    "                        Proin a hendrerit ex. Donec ultricies odio et ipsum luctus, vulputate fringilla massa gravida.\n" +
    "                        Integer condimentum elit quis tincidunt efficitur. Cras augue ex, vehicula non dui nec,  \n" +
    "                         vulputate a blandit vitae, venenatis sed nisi. Proin sed augue tincidunt, faucibus nibh sed,\n" +
    "                         vulputate nisi. Vivamus ligula nisi, sollicitudin a tempus efficitur, sagittis quis elit"

const Home = () => {
    const [showAllCards, setShowAllCards] = useState(false);

    const cardsToDisplay = showAllCards ? dataCard : dataCard.slice(0, 3);
    const buttonText = showAllCards ? "Hide" : "View more";

    const handleClick = () => {
        setShowAllCards(!showAllCards);
    };

    return (
        <div>
            <SectionWrapper>
                <img src={StadiumPicture} alt="#" className="main_photo"/>
                <StyledText>
                    <h1>{textTitle}</h1>
                    <p>
                        {titleText}
                    </p>
                </StyledText>
            </SectionWrapper>
            <CardWrapper>
                {cardsToDisplay.map((item) => (
                    <CardItem
                        id={item.id}
                        title={item.title}
                        text={item.text}
                        imageSrc={item.image}
                        price={item.price}
                    />
                ))}
            </CardWrapper>
            <StyledButton size="large" onClick={() => handleClick()}>{buttonText}</StyledButton>
        </div>
    );
};

export default Home;