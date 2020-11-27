import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 12,
        textAlign:'center',
    },
    text: {
        color: '#2b3335',
        fontSize: '1rem',
        fontFamily: 'monospace'
    }
}));

export default useStyles;