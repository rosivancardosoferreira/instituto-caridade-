import { useState } from "react";
import { useNavigate } from "react-router";

//STYLES
import {
  ContainerHeader,
  PageChildren
} from "./styles";

export default function HeaderAndSideBar(props: any) {
  const navigate = useNavigate();
  
  return (
    <ContainerHeader>
      <h1>teste</h1>
      <PageChildren>
        {props.children}
      </PageChildren>
    </ContainerHeader>
  );
}