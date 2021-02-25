import { DefaultTheme } from 'styled-components';

const BASE_UNIT = 8;

const theme :DefaultTheme = {
    pallet: {
        white: '#fff',
        background: '#f2f3f5',
        grayLine: '#DCDDE0',
        text: '#666',
        textHighlight: '#B3B9FF',
        title: '#2E384D',
        red: '#E83F5B',
        green: '#4CD62B',
        blue: '#5965E0',
        blueDark: '#4953b8',
        blueTwitter: '#2aa9e0'
    },
    
    breakpoint: {
        lg: '1080px',
        md: '720px'
    },
    
    spacing: (value :number) => `${ BASE_UNIT * value }px`,
}

export default theme;
