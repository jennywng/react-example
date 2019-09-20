import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core' 
import App from './App'
import Example1 from './views/example1'
import Example2 from './views/example2'


const routing = (
    <Router>
        <div>
            <Drawer
                variant="permanent"
                anchor="left"
            >
                <Divider />
                <List>
                    <Link to="/">
                        <ListItem button key="home">
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link to="/example1">
                        <ListItem button key="ex1">
                            <ListItemText primary="Example 1" />
                        </ListItem>
                    </Link>
                    <Link to="/example2">
                        <ListItem button key="ex2">
                            <ListItemText primary="Example 2" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
            </Drawer>
            <Route exact path="/" component={App} />
            <Route path="/example1" component={Example1} />
            <Route path="/example2" component={Example2} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
