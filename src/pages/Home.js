import { Button, Chip, Grid, Paper, Typography } from '@material-ui/core'
import { GitHub, Instagram, LinkedIn } from '@material-ui/icons';

import data from '../data.json'
import { useEffect, useState } from 'react';

export default function Home() {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    useEffect(() => {
        const quotes = data.quotes
        const quoteIndex = Math.floor(Math.random() * quotes.length)
        console.log(quoteIndex)
        const quoteObject = quotes[quoteIndex]
        setQuote(quoteObject.quote)
        setAuthor("— " + quoteObject.author)
    }, [])
    return (
        <div className='margins'>
            <Paper className='PaperMargins' align='center'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm>
                        <img src='../images/Self.JPG' alt='Self portrait' width='50%'/>
                    </Grid>
                    <Grid container item xs={12} sm spacing={2} direction="column" align="center" justify="center" >
                        <Grid item>
                            <Typography variant='h3'>
                                Sebastian Aldi
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant='body1'>
                                Come visit me at:
                            </Typography>
                        </Grid>

                        <Grid item container justify='center' spacing={3}>
                            <Grid item>
                                <Button startIcon={<GitHub />} color='primary' variant='contained' href='https://github.com/sebastianaldi17'>
                                    Github
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button startIcon={<Instagram />} color='primary' variant='contained' href='https://www.instagram.com/axynald/'>
                                    Instagram
                                </Button>
                            </Grid>
                            
                            <Grid item>
                                <Button startIcon={<LinkedIn />} color='primary' variant='contained' href='https://www.linkedin.com/in/sebastian-aldi-95863a187/'>
                                    LinkedIn
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className='PaperMargins' align='center'>
                <Typography variant='h4'>
                    Skills:
                </Typography>
                {data.skills.map(item => {
                    return (
                        <Chip label={item}
                        color="primary"
                        style={{margin: '8px'}}
                        />
                    )
                })}
            </Paper>
            <Paper className='Bio PaperMargins'>
                <Typography variant='body1'>
                    {data.bio}
                </Typography>
            </Paper>

            <Paper className='quote PaperMargins'>
                <Typography variant='h4'>
                    Random favorite quote:
                </Typography>
                <Typography variant='body1'>
                    {quote}
                </Typography>
                <Typography variant='body2'>
                    {author}
                </Typography>
            </Paper>
        </div>
    )
}
