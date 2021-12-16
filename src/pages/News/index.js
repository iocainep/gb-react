import React from 'react';
import {MenuBar} from "../../components/MenuBar";
import {Grid} from "@material-ui/core";
import {NewsList} from "../../components/NewsList";

export const News = () => {

    return (
        <Grid container spacing={3}>
            <MenuBar/>
            <Grid item xs={12}>
                <h2>Новости</h2>
            </Grid>
            <Grid item xs={12}>
                <NewsList/>
            </Grid>
        </Grid>

    )
}