import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaRegMinusSquare } from "react-icons/fa";
import CategoryCollapse from '../../CategoryCollapse';






const CategoryPanel = (props) => {

    const [submenuIndex, setSubmenuIndex] = useState(null);

    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCatPanel(newOpen);
    };

    const openSubmenu = (index) => {
        if (submenuIndex === index) {
            setSubmenuIndex(null);
        } else {
            setSubmenuIndex(index);
        }
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className='categoryPanel'>

            <h3 className='p-3 text-[16px] font-[500] flex items-center justify-between'>
                Shop By Categories
                <IoCloseSharp onClick={toggleDrawer(false)}
                    className='cursor-pointer text[20px]' /></h3>


  <CategoryCollapse />


        </Box>
    );

    return (

        <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>

    )
};

export default CategoryPanel;
