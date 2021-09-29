import React from 'react';
import {MenuBar} from "../../components/MenuBar";
import {Grid} from "@material-ui/core";

export const NotFound = () => {

    return (
        <Grid container spacing={3}>
            <MenuBar/>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                Page is not found
            </Grid>
        </Grid>

    )
}