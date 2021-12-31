import React from "react";
import { useNavigate } from "react-router";
//STYLES
import {
    ContainerHome,
} from "./styles";

//ASSETS
export default function Home() {
    const navigate = useNavigate();
    return(
        <ContainerHome>
           <h1>teste</h1>
        </ContainerHome>
    )
}