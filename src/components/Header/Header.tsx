import MenuIcon from '@mui/icons-material/Menu';
import {
	Stack,
	TextField,
	IconButton,
	Toolbar,
	Box,
	AppBar,
	Button,
} from '@mui/material';
import { Logo } from '../../assets/images/logo.jsx';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
	window?: () => Window;
}

const navItems = ['Home', 'About', 'Contact'];

export default function DrawerAppBar(props: Props) {
	const { window } = props;

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar style={{ background: '#fff' }} component='nav'>
				<Stack
					className='container'
					direction={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}>
					<Logo />
					<TextField
						style={{ height: 60 }}
						id='outlined-basic'
						label='Search...'
						variant='outlined'
					/>
					<Stack spacing={2} direction={'row'} style={{ marginRight: 10 }}>
						<IconButton>
							<HomeIcon />
						</IconButton>
						<IconButton>
							<ChatIcon />
						</IconButton>
						<IconButton>
							<AddCircleOutlinedIcon />
						</IconButton>
						<IconButton>
							<ExploreIcon />
						</IconButton>
						<IconButton>
							<FavoriteIcon />
						</IconButton>
					</Stack>
				</Stack>
			</AppBar>
			<Box component='main' sx={{ p: 3 }}>
				<Toolbar />
			</Box>
		</Box>
	);
}
