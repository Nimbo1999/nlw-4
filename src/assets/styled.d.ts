import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {

        pallet: {
            white:  string,
            background:  string,
            grayLine:  string,
            text:  string,
            textHighlight:  string,
            title:  string,
            red: string,
            green:  string,
            blue:  string,
            blueDark:  string,
            blueTwitter:  string
        },
    
        breakpoint: {
            lg: string,
            md: string
        },
    
        spacing: Function,

    }
}
