import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 12,
        textAlign:'center',
    },
    text: {
        color: '#4c3f3d',
        fontSize: '1rem',
        fontFamily: 'monospace'
    }
}));

export default useStyles;