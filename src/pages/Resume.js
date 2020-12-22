import { Paper } from '@material-ui/core'

export default function Resume() {
    return (
        <div>
            <Paper align='center' className='embedPaper PaperMargins'>
                <iframe src="https://drive.google.com/file/d/1u63WTgSQUwvj0_Y7hq4Dchxg5xsEBY84/preview"
                        className='embedViewer'
                        title='CV'></iframe>
            </Paper>
        </div>
    )
}