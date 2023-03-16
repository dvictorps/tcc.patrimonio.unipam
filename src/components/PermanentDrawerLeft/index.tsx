import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Image } from '../Image';
import { BiHome } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',

    },
});

const drawerWidth = 240;

const itemDivider = [
    {
        id: 0,
        name: 'Home',
        route: '/'
    },
    {
        id: 1,
        name: 'Cadastrar',
        route: '/'
    },

]

type DrawerProps = {
    children: string | JSX.Element | JSX.Element[]
}


export default function PermanentDrawerLeft({ children }: DrawerProps) {
    return (
        <>

            <Box sx={{ display: 'flex' }} >
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >
                    <Toolbar style={{ backgroundColor: 'white' }}>


                    </Toolbar>
                </AppBar>
                <ThemeProvider theme={darkTheme}>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}
                        variant="permanent"
                        anchor="left"
                    >
                        <Toolbar >
                            <Image src='public/images/logo_large.webp' size={35} css={{ mx: '5px' }} />
                            <Typography variant="h4" fontFamily="monospace" >
                                Unigest
                            </Typography>
                        </Toolbar>
                        <Divider />
                        <List>
                            {itemDivider.map((item) => (
                                <ListItem key={item.id} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {item.id === 0 ? <BiHome /> : <MdDashboard />}
                                        </ListItemIcon>
                                        <ListItemText primary={item.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </ThemeProvider>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: 2 }}
                >
                    {children}
                </Box>
            </Box>
        </>
    );
}