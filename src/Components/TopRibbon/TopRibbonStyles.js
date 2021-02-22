import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '20vh',
        backgroundColor: '#f4433699',
        position: 'absolute',
        top: 0,
        left: 0,
        borderBottom: '5px solid red',
    },
    homeIcon: {
        color: '#ffffff',
        fontSize: 100,
        position: 'fixed',
        top: 50,
        right: 50,
    }
}));

export default useStyles;