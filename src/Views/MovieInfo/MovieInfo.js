import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import db from './../../FirebaseDB/db';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useStyles from './MovieInfoStyles';
import { addVoteToDb } from './../../FirebaseDB/request';


const MovieInfo = (props) => {


    let defaultVotes = {
        upVotes: 0,
        downVotes: 0,
    }

    const { movieInfo, movieInfoError, isLoading } = props;
    const { Poster, Title, Director, Released, Plot } = movieInfo;
    const [currentVotes, setCurrentVotes] = useState(defaultVotes);
    const classes = useStyles();


    useEffect(() => {
        //* This checks to see if the current movie selected has previous votes in the
        //* in the database by using the imdbID. If it finds an imdbID match, it retrieves
        //* the vote totals and renders them in place of the default votes (0, 0).
        //? Move to a different module later?
        if (movieInfo.imdbID) {
            var moviesRef = db.collection("movies");
            var query = moviesRef.where("imdbID", "==", movieInfo.imdbID);
            query.get().then(function (querySnapshot) {
                let data;
                querySnapshot.forEach(function (doc) {
                    // console.log(doc.id, ' => ', doc.data());
                    data = doc.data();
                    if ("upVotes" in data) {
                        setCurrentVotes(data);
                    }
                    return false;
                })
            })
            .catch(error => {
                console.log(error.message);
            })
        }
    }, [movieInfo.imdbID]);


    useEffect(() => {
        return () => console.log('unmounting...');
    }, []);


    //* add(Up/Down)Vote updates the database as well as the local state for the vote totals.
    //* The local state will always show a users votes while also updating the db to any changes.
    //* When the component first mounts, the database returns updated vote counts (see in useEffect)
    const addUpVote = () => {
        let voteUpdate = {
            upVotes: currentVotes.upVotes + 1,
            downVotes: currentVotes.downVotes,
            imdbID: movieInfo.imdbID,
            title: Title
        };
        addVoteToDb(voteUpdate);
        setCurrentVotes({
            ...currentVotes,
            upVotes: currentVotes.upVotes + 1
        });
    }


    const addDownVote = () => {
        let voteUpdate = {
            upVotes: currentVotes.upVotes,
            downVotes: currentVotes.downVotes + 1,
            imdbID: movieInfo.imdbID,
            title: Title
        }
        addVoteToDb(voteUpdate);
        setCurrentVotes({
            ...currentVotes,
            downVotes: currentVotes.downVotes + 1
        });
    }


    const handleBackToMovies = () => {
        props.history.push('/movies');
    }


    if (movieInfoError) {
        return <React.Fragment>Error: {movieInfoError.message}</React.Fragment>;
    }
    else if (isLoading) {
        return <Box>...still loading</Box>
    }
    else {
        return (
            <Box className={classes.root} >
                <Paper className={classes.paperCon} >
                    <Grid container>
                        {/* Main movie poster grid container */}
                        <Grid item xs={12} md={5} className={classes.posterImgGridItem} >
                            <Box className={classes.posterImgCon} >
                                <img src={Poster}
                                    alt="movie poster"
                                    className={classes.posterImg} />
                            </Box>
                        </Grid>
                        {/* Main movie info container */}
                        <Grid item xs={12} md={7} >
                            <Grid container>
                                <Box className={classes.infoBox} >
                                    {/* Movie info top container */}
                                    <Grid item xs={12}>
                                        <Typography className={classes.movieTitle} >
                                            {Title}
                                        </Typography>
                                        <Typography className={classes.dirNdate} >
                                            {Released}
                                        </Typography>
                                        <Typography className={classes.dirNdate} >
                                            Director: {Director}
                                        </Typography>
                                    </Grid>
                                    {/* Movie info bottom container */}
                                    <Grid item xs={12} >
                                        <Typography className={classes.moviePlot} >
                                            {Plot}
                                        </Typography>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                        {/* Bottom of main container */}
                        <Grid container className={classes.actionAreaGridCon} >
                            <Grid item md={5} >
                                <Box
                                    className={classes.backContainer}
                                    onClick={handleBackToMovies} >
                                    <ArrowBackIosIcon />
                                    <Button className={classes.backButton} >
                                        Back to Movies
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item md={7}>
                                <Box className={classes.votesBox} >
                                    <Typography variant="h6">
                                        <Typography 
                                            className={classes.voteText}
                                            variant="title">
                                            DOWN VOTES  [ {currentVotes.downVotes} ] 
                                    </Typography>
                                        <ThumbDownIcon 
                                            className={classes.downThumbIcon}
                                            onClick={() => addDownVote()} />
                                        <ThumbUpIcon 
                                            className={classes.upThumbIcon}
                                            onClick={() => addUpVote()} />
                                        <Typography 
                                            className={classes.voteText}
                                            variant="title">
                                                [ {currentVotes.upVotes} ] UP VOTES
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>

            </Box>
        );
    }
}


const mapStateToProps = state => {
    return {
        movieInfo: state.movieInfoSlice.movieInfo,
        movieInfoError: state.movieInfoSlice.error,
        isLoading: state.movieInfoSlice.isLoading,
    }
}


export default connect(mapStateToProps)(MovieInfo);










