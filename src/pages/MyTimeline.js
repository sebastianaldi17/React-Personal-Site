import { Grow, Paper, Typography } from '@material-ui/core'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import React, {useState, useEffect} from 'react';

import data from '../data.json'

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window
    return {width, height}
}
export default function MyTimeline() {
    const [dim, setDim] = useState(getWindowDimensions())
    const events = data.timeline

    useEffect(() => {
        function handleResize() {
            setDim(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div>
            <Paper className='PaperMargins' align='center' style={{display: dim.width <= 600 ? 'flexbox' : 'none'}}>
                <Typography>
                    Timeline may look broken at mobile, sorry about that. Open as desktop site or use landscape to get the full experience 😀
                </Typography>
            </Paper>
            <Timeline align={dim.width > 600 ? 'alternate' : 'left'}>
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
                                        <Typography variant={dim.width > 600 ? 'h5' : 'body1'}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2">{item.content}</Typography>
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