import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useStyles from "./SingleMovieStyles";

const SingleMovie = (props) => {
    const { handleMovieInfo, poster, imdbID } = props;
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
                <img
                    className={classes.moviePosterImg}
                    src={poster}
                    alt="movie poster"
                />
                <Typography
                    className={classes.detailsLink}
                    onClick={() => handleMovieInfo(imdbID)}
                >
                    More Details
        </Typography>
            </Paper>
        </Grid>
    );
};

export default SingleMovie;
