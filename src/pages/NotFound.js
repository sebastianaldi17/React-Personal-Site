import { Paper, Typography } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'B612', 'sans-serif'
        ].join(',')
    }
})
export default function NotFound() {
    return (
        <MuiThemeProvider theme={theme}>
            <Paper align='center' className='PaperNotFound PaperMargins'>
                <Typography variant='h1'>
                    404
                </Typography>
                <Typography variant='h4'>
                    The requested page was not found.
                </Typography>
                <br/>
                <Typography variant='body1'>
                    <a href='/' className='hyperlink'>Click here</a> to return to the home page.
                </Typography>
            </Paper>
        </MuiThemeProvider>
    )
}