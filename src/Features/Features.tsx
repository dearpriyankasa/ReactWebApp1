import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { Divider } from 'material-ui';
import InboxIcon from 'material-ui/svg-icons/notification/sms';
import './Features.css';

class Features extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar position="fixed">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" noWrap>
                                Shoreline IoT
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer className="drawer" variant="permanent" classes={{paper: "drawerPaper",}}>
                        <List>
                            <ListItem>
                                <ListItemIcon><InboxIcon/></ListItemIcon>
                                <ListItemText primary="Devices"/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><InboxIcon/></ListItemIcon>
                                <ListItemText primary="Rules"/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><InboxIcon/></ListItemIcon>
                                <ListItemText primary="Export Data"/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><InboxIcon/></ListItemIcon>
                                <ListItemText primary="Device Profile"/>
                            </ListItem>
                        </List>
                        <Divider/>
                        <List>
                            <ListItem>
                                <ListItemIcon><InboxIcon/></ListItemIcon>
                                <ListItemText primary="Settings"/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><InboxIcon/></ListItemIcon>
                                <ListItemText primary="About Us"/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><InboxIcon/></ListItemIcon>
                                <ListItemText primary="Contact Us"/>
                            </ListItem>
                        </List>
                    </Drawer>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Features
