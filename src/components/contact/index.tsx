import { ContactContainer, ContactItens, ContactTitle, Socials, SocialIcons, Linkedin, Github } from "./Contact";
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'

export function Contact(){
    return(
        <ContactContainer>
            <Socials>
                <ContactTitle>Contact</ContactTitle>
                <ContactItens href=''><AiOutlineMail/>E-mail</ContactItens>
                <ContactItens href=''><BsFillTelephoneFill/>Cellphone</ContactItens>
            </Socials>

            <Socials>
                <ContactTitle>Socials</ContactTitle>
                <SocialIcons>
                    <ContactItens><a href=""><Linkedin/></a></ContactItens>
                    <ContactItens><a href=""><Github/></a></ContactItens>
                </SocialIcons>
            </Socials>
        </ContactContainer>
    )
}