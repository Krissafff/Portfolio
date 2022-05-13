import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
     
    li{
        padding: 10px 10px;
        font-family: 'Rubik', sans-serif;
    }

    @media (max-width: 768px){
        flex-flow: column nowrap;
        background-color: orange;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        text-align: center;
        right: 0;
        height: 1000vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
    }

  
`

const RightNav = ({ open }) => {
    return(
        <Ul open={open}>
            <li><a href="#" className='color-black linha'>Início</a></li>
            <li><a href="#Sobre" className='color-black linha'>Sobre</a></li>
            <li><a href="#Projeto" className='color-black linha'>Projetos</a></li>
        </Ul>
    );
}

export default RightNav;