import { useState } from "react";
import { ContainerBar, RightBar } from "./MenuBar";

type MenuProps = {
    trigger:boolean;
    display?:any;
}

export function MenuBar(props:MenuProps){

    return(
        <ContainerBar display={props.display} {...props.trigger}>
            <RightBar>
                <li><a href="">Experiences</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Graduation</a></li>
                <li><a href="">Contact</a></li>
            </RightBar>
        </ContainerBar>
    )
}