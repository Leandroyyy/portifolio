import { CardsContainer, WorkImg, Date, ClickMe } from "./Cards";

type CardsProps = {
    alt : string,
    img ?: any
}


export function Cards(props:CardsProps){
    return(
        <CardsContainer>
            <Date>May/2021</Date>
                <WorkImg src={props.img} alt={props.alt} />
            <ClickMe href="">Know More</ClickMe>
        </CardsContainer>
    )
}