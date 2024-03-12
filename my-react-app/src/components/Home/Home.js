import React from "react";
import StadiumPicture from "../Icons/mainStadium.jpg";
import ImgModel1 from "../Icons/Soccer Stadium  (1).png";
import ImgModel2 from "../Icons/Soccer Stadium  (2).png";
import ImgModel3 from "../Icons/Soccer Stadium  (3).png";
import {
    SectionWrapper,
    StyledText,
    StyledButton,
    CardWrapper,
} from "./Home.styled";
import CardItem from "../CardElement/CardItem";

const dataCard = [
    {
        title: "Arena Lviv",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia massa eu sem consequat blandit."+
        " Nullam fermentum ac odio sed aliquam. Integer ante felis, tincidunt vel felis eu, vulputate sollicitudin orci. ",
        image: ImgModel1,
        price: 10000,
    },
    {
        title: "Stadium Ukraine",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia massa eu sem consequat blandit."+
        " Nullam fermentum ac odio sed aliquam. Integer ante felis, tincidunt vel felis eu, vulputate sollicitudin orci. ",
        image: ImgModel2,
        price: 15000,
    },
    {
        title: "Chornomorets Stadium",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia massa eu sem consequat blandit."+
        " Nullam fermentum ac odio sed aliquam. Integer ante felis, tincidunt vel felis eu, vulputate sollicitudin orci. ",
        image: ImgModel3,
        price: 5000,
    },
];

const Home = () => {
    return (
        <div>
            <SectionWrapper>
                <img src={StadiumPicture} alt="#" className="main_photo"/>
                <StyledText>
                    <h1>commodo rhoncus sit amet id felis. Aliquam odio orci, semper volutpat enim non</h1>
                    <p>
                    Ut pulvinar augue nec lectus mollis, vel euismod nisi posuere. Nunc nec auctor dolor, non faucibus risus. 
                    Fusce neque purus, consectetur quis dapibus a, tristique quis lorem. Sed efficitur sem eu enim sollicitudin 
                    scelerisque. Suspendisse hendrerit vel lorem vel varius. Mauris aliquam consectetur posuere. In ac turpis 
                    non urna commodo rhoncus sit amet id felis. Aliquam odio orci, semper volutpat enim non, interdum posuere
                    libero. In risus elit, pellentesque quis placerat sed, consequat sed quam. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae; Ut id elit et nulla feugiat eleifend. Fusce sit amet
                    quam non diam auctor porta. Aliquam egestas urna nec vehicula tristique. Donec vel tempor arcu.
                    </p>
                </StyledText>
            </SectionWrapper>
            <CardWrapper>
                {dataCard.map(({ title, text, image, price }, idx) => (
                    <CardItem
                        title={title}
                        text={text}
                        imageSrc={image}
                        price={price}
                        id={idx}
                    />
                ))}
            </CardWrapper>
            <StyledButton size="large">Show More</StyledButton>
        </div>
    );
};

export default Home;