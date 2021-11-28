import React, { useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars} from "../features/CarSlice/carSlice";
import {useSelector} from "react-redux";


function Header() {
    const [burgerstatus, setBurgerStatus]= useState(false);
    const cars = useSelector (selectCars)
    console.log(cars);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt=""></img>
            </a>
            <Menu>
                {cars && cars.map((car, index) =>(
                    <a key={index} href="#">{car}</a>
            ))}
                
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Model S</a>
            </Menu>

            <RightMenu>
                <a href="">Shop</a>
                <a href="">Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)} />
            </RightMenu>

            <BurgerNav show={burgerstatus}>
                <CloseWrapper>
                    <CoustomClose onClick={()=>setBurgerStatus(false)} />
                </CloseWrapper>
                
                <li><a href="#">Exsisting Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#"> Tarde-In </a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">Roadster</a></li>
                {/* <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li> */}
            </BurgerNav>
        </Container>
    )
}

export default Header

    const Container = styled.div`
    min-height:60px;
    position: fixed;
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding :0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;

    `
    const Menu = styled.div `
    display: flex;
    allign-items:center;
    justify-content:center;
    flex : 1;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding : 0 10px;
        flex-wrap:nowrap;
    }
    @media  (max-width : 768px){
        display:none;
    }
    `
     const RightMenu = styled.div`
        display: flex;
        align-items:centered;
        a{
            font-weight:600;
            text-transform:uppercase;
            margin-right: 10px;
            
        }
        `
        const CustomMenu = styled(MenuIcon)`
        cursor:pointer;
        `
        const BurgerNav = styled.div`
            position : fixed;
            top:0;
            bottom:0;
            right:0;
            background:white;
            width:300px;
            list-style:none;
            transition: transform 0.2s;
            padding:20px;
            display:flex;
            flex-direction:column;
            text-align:start;
             transform : ${props=> props.show ?  'translateX(0)':'translateX(100%)'};
                li{
                    padding  : 15px 0;
                    border-bottom:1px solid rgba(0,0,0,.2)
                }
                a{
                    font-weight:600; }
                
        
        `
        const CoustomClose = styled(CloseIcon)`
            cursor:pointer;
        `
        const CloseWrapper = styled.div`
            display:flex;
            justify-content:flex-end;
        `