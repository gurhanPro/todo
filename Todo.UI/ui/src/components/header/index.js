import React, { Component } from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default class Header extends Component {
    render() {
        return (
                <Grid container>
                    <Grid item xs={10}><h1>The Gemini Solutions - Todo App</h1></Grid>
                    <Grid item xs={2} style={{ margin: 'auto' }}><Button onClick={this.props.logout}> Logout  <ExitToAppIcon /></Button></Grid>
                </Grid>
        )
    }
}
