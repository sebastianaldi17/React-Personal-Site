import { Grow, Paper, Typography } from '@material-ui/core'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import data from '../data.json'

export default function myTimeline() {
    const events = data.timeline

    return (
        <div>
            <Timeline align="alternate">
                {events.map((item, index) => {
                    return (
                        <Grow in timeout={(index+1)*250}>
                            <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="textSecondary">
                                            {item.date}
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                    <TimelineDot color='primary'/>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                    <Paper elevation={3} className='timelineContent'>
                                        <Typography variant="h6" component="h1">
                                            {item.title}
                                        </Typography>
                                        <Typography>{item.content}</Typography>
                                    </Paper>
                                    </TimelineContent>
                            </TimelineItem>
                        </Grow>
                    )
                })}
            </Timeline>
        </div>
    )
}