import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";

export default function Header() {
    return (
        <AppBar className='appBar' position='static'>
            <Toolbar spacing={3}>
                <Typography variant='body1'>
                    <Link href='/' color='inherit' style={{marginRight: 16}} variant='h6'>
                        Home
                    </Link>
                    <Link href='/projects' color='inherit' style={{marginRight: 16}} variant='h6'>
                        Projects
                    </Link>
                    <Link href='/resume' color='inherit' style={{marginRight: 16}} variant='h6'>
                        Resume
                    </Link>
                    <Link href='/timeline' color='inherit' style={{marginRight: 16}} variant='h6'>
                        Timeline
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}