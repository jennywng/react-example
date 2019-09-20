import React from 'react'
import { AppBar, Toolbar, Typography, Button, Grid, TextField, Card} from '@material-ui/core' 

class Example1 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            yodaText: null
        }
    }

    render() {
        return (
            <div>
                <AppBar style={{marginLeft: '10%'}}>
                    <Toolbar>
                        <Typography variant="h6" style={{marginLeft: '10%'}} noWrap>
                            Example 1
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default Example1;