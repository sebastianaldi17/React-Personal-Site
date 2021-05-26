import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";

export default function Header() {
    return (
        <AppBar className='appBar' position='static'>
            <Toolbar spacing={3}>
                <Typography>
                    <Link href='/' color='inherit' style={{marginRight: 16}} variant='button'>
                        Home
                    </Link>
                    <Link href='/projects' color='inherit' style={{marginRight: 16}} variant='button'>
                        Projects
                    </Link>
                    <Link href='/timeline' color='inherit' style={{marginRight: 16}} variant='button'>
                        Timeline
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}