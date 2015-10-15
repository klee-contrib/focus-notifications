// global colors
const BG_COLOR = '#655';
const TEXT_COLOR = 'white';

const SEPARATOR_COLOR = 'rgb(78,82,81)'

export const notificationCenter = {
    padding: '1em 2em',
    margin: 'auto',
    boxSizing: 'border-box',
    background: BG_COLOR,
    color: 'white',
    textAlign: 'left',
    width: '40%',
    opacity: 0.75
};

export const notification = {
    style: {
        borderTop: `1px solid ${SEPARATOR_COLOR}`,
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around'
    },
    bodyStyle:{
        //flexGrow: 9,
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        width: '80%'
    },
    iconStyle:{
        width: '10%',
        height: '10%'
        //flexGrow: 1
    },
    headerStyle:{},
    dateStyle:{},
    contentStyle:{
        width: '100%'
    },

};
