import React from 'react'
import { AppBar, Toolbar, Typography, Button, Grid, TextField, Card} from '@material-ui/core' 
import axios from "axios"

class Example2 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            pokemon: '',
            pokemonData: '',
            abilities: [],
            imgURL: null
        }
    }
    

    handleTextChange = (event) => {
        this.setState({
            pokemon: event.target.value
        })
    }
    
    searchPokemon = (pokemon) => {
        return axios({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`,
        }).then(data => {  
            console.log("data", data);
            this.setState({
                abilities: data.data.abilities,
                imgURL: data.data.sprites.front_default
            });
            console.log("abilities", this.state.abilities);
            console.log("url", this.state.imgURL);
        }).catch(err => {
            this.setState({pokemon: "Error"});
        });
    }


    render() {
        return (
            <div>
                <AppBar style={{marginLeft: '10%'}}>
                    <Toolbar>
                        <Typography variant="h6" style={{marginLeft: '10%'}} noWrap>
                            Example 2
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div style={{marginLeft: '30%', marginTop: '10%'}}>
                    <Grid container
                        spacing={1}
                    >
                        <Grid item>
                            <TextField
                                id="standard-name"
                                label="Pokemon"
                                value={this.state.pokemon}
                                onChange={this.handleTextChange}
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={this.searchPokemon} >Get Pokemon Info</Button>
                        </Grid>
                    </Grid>
                </div>

                <div style={{marginLeft: '15%', marginTop: '15%'}}>
                    {this.state.abilities.map((item) => {
                        return(
                            <Card style={{height: '30px', width: '100px', margin: '1%'}}>
                                <Typography>{item.ability.name}</Typography>
                            </Card>
                        );
                    })}

                    {this.state.imgURL ? (
                        <img src={this.state.imgURL} style={{height: '300px', width: '300px'}} />
                    ) : ''}
                </div>
            </div>
        );
    }
}
export default Example2;