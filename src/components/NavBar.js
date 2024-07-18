import React, {useState} from 'react'
import Logo from '../Assets/Logo.svg'
import {BsCart2} from 'react-icons/bs'
import {HiOutlineBars3} from "react-icons/hi2";
import {Box, Drawer, ListItem, ListItemButton, ListItemLogo, ListItemText} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'


const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    /*TODO: menu responsive*/
    const menuOptions = [{
        text:"Home",
        icon:<HomeIcon/>},{
        text:"About",
        icon:<InfoIcon/>},{
        text:"Testimonials",
        icon:<CommentRoundedIcon/>},{
        text:"Contact",
        icon:<PhoneRoundedIcon/>},{
        text:"Cart",
        icon:<ShoppingCartRoundedIcon/>}
    ];
    return (<div>NavBar</div>)
}
export default NavBar;
