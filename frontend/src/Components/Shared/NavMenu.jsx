import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, Paper, Drawer } from '@material-ui/core'
function NavMenu() {
    return (
        <>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        {/* <MenuIcon /> */}2020
                    </IconButton>
                    <Typography variant="h6">
                        ITIS MOLINARI
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                anchor="left"
                open={true}
            // onClose={}
            >

            </Drawer>
        </>
    )
}

export default NavMenu
