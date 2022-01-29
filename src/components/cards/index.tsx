import { CardsContainer, WorkImg, Date, ClickMe } from "./Cards";
import Foursys from "../../assets/img/foursys.png"

type CardsProps = {
    alt : string,
    img ?: any
}


export function Cards(props:CardsProps){
    return(
        <CardsContainer>
            <Date>May/2021</Date>
                <WorkImg src={Foursys} alt={props.alt} />
            <ClickMe href="">Know More</ClickMe>
        </CardsContainer>
    )
}