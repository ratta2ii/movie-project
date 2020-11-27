import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '79.5vh',
    },
    paperCon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(27, 38, 43)',
        color: 'white',
        width: 750,
        fontFamily: 'sans-serif'
    },
    posterImgGridItem: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 50,
    },
    posterImgCon: {
        backgroundColor: '#223037',
        width: '60%',
        minHeight: 100,
        maxHeight: 365,
        padding: '15px 15px 10px',
    },
    posterImg: {
        width: '100%',
        maxHeight: 340,
    },
    infoBox: {
        padding: '50px 50px 50px 0',
    },
    movieTitle: {
        fontSize: '1.6rem',
        fontFamily: 'sans-serif',
        marginTop: 20,
        color: '#f5bc16',
        lineHeight: '2.1rem',
    },
    dirNdate: {
        color: '#89b9df',
        fontSize: '.9rem',
        marginTop: 5,
    },
    moviePlot: {
        fontSize: '1rem',
        letterSpacing: '.02rem',
        lineHeight: '1.3',
        marginTop: 25,
    },
    actionAreaGridCon: {
        marginTop: 50,
        borderTop: '1px solid #29383f',
        height: 65,
        display:'flex',
        alignItems: 'center',
    },
    backContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 62,
        height: 40,
        marginTop: 3,
    },
    arrowIcon: {
        color: '#637c90',
    },
    backButton: {
        fontSize: '.8rem',
        marginLeft: -8,
        color: '#637c90',
    },
    votesBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 50,
        height: 40,
        color: '#637c90',
    },
    voteText: {
        fontSize: '.8rem',
        marginBottom: 10,
    },
    downThumbIcon: {
        margin: '0 2px 0 10px',
        fontSize: 'large',
        cursor: 'pointer',
    },
    upThumbIcon: {
        margin: '0 10px 0 2px',
        fontSize: 'large',
        cursor: 'pointer',
    },
}));

export default useStyles;