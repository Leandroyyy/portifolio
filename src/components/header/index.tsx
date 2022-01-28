import {Curriculum, Hamburguer, HeaderContainer, Itens} from './Header'

import {GiHamburgerMenu} from "react-icons/gi"
import {BsDownload} from "react-icons/bs"
import { MenuBar } from '../menuBar'
import { useState } from 'react'

type Header = {
    
}

export function Header(){

    const [enableBar, setEnableBar] = useState<boolean>();
    const [displayBar , setDisplayBar] = useState<string>('-1000px');
    const [fix, setFix] = useState<string>('');

    function showMenu(e :React.FormEvent<HTMLAnchorElement>){
        e.preventDefault()
        enableBar ? setEnableBar(false) : setEnableBar(true)
        enableBar ? setDisplayBar('-1000px') : setDisplayBar('5.1rem')
        enableBar ? setFix('') : setFix('fixed')
    }

    return(

        <>
        <HeaderContainer display={fix}>
            <Itens>
                <ul>
                    <Curriculum><a href="">Resume.pdf  <BsDownload/></a></Curriculum>
                </ul>
                <ul>
                    <li><Hamburguer onClick={showMenu} href=""><GiHamburgerMenu/></Hamburguer></li>
                </ul>
            </Itens>
        </HeaderContainer>

        <MenuBar display={displayBar} trigger={false}/>
        </>
    )
}