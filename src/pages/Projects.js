import { Grow, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import data from '../data.json'

export default function Projects() {
    const project_list = data.projects

    return (
        <div className='margins'>
            <Grid container spacing={4}>
                {project_list.map((item, index) => {
                    if(!item.hasOwnProperty('demo')) item.demo = '#'
                    return (
                        <Grow in timeout={(index+1)*250}>
                            <Grid item xs={12} sm={6} lg={4}>
                                <Card>
                                    <CardActionArea onClick={() => {window.location.href = item.demo}}>
                                        <CardMedia
                                        image={item.imgl}
                                        title={item.name}
                                        style= {{minHeight: '500px'}}
                                        />
                                        <CardContent>
                                            <Typography variant='h6'>
                                                {item.name}
                                            </Typography>
                                            <Typography variant='body2'>
                                                {item.desc}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button href={item.link}>
                                            Link to GitHub
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grow>
                    )
                })}
            </Grid>
        </div>
    )
}