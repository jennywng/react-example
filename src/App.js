import React from 'react';
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core' 
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <AppBar>
            <Toolbar>
                <Typography variant="h6" style={{marginLeft: '10%'}} noWrap>
                    Home
                </Typography>
            </Toolbar>
        </AppBar>
        <Typography style={{margin: '15%'}}>This is the home page</Typography>
      </div>
    );
  }
}

export default App;
