// global colors
const BG_COLOR = 'rgba(102,85,85, 0.66)';
const TEXT_COLOR = 'white';

const SEPARATOR_COLOR = 'rgb(78,82,81)'

export const notificationCenter = {
    padding: '1em 2em',
    margin: 'auto',
    boxSizing: 'border-box',
    background: BG_COLOR,
    color: 'white',
    textAlign: 'left',
    width: '40%'
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
        justifyContent: 'flex-start',
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
