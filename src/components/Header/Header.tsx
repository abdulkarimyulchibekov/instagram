import { Stack, IconButton, Toolbar, Box, AppBar } from '@mui/material';
import { Logo } from '../../assets/images/logo.jsx';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Chat } from '../../pages/Chat/Chat';
import { Explore } from '../../pages/Explore/Explore';
import { Account } from '../../pages/Account/Account';
import './index.scss';

const navItems = ['Home', 'About', 'Contact'];

export default function DrawerAppBar() {
	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar style={{ background: '#fff' }} component='nav'>
				<Stack
					className='container'
					direction={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}>
					<Link to={'/'}>
						<Logo />
					</Link>
					<input
						className='header-input'
						style={{ height: 45, color: 'black' }}
						placeholder='Search...'
					/>
					<Stack spacing={2} direction={'row'} style={{ marginRight: 10 }}>
						<NavLink
							className={({ isActive }) => (isActive ? 'fill' : 'link')}
							to='/'>
							<IconButton>
								<HomeIcon />
							</IconButton>
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? 'fill' : 'link')}
							to={'/chat'}>
							<IconButton>
								<ChatIcon />
							</IconButton>
						</NavLink>
						<IconButton>
							<AddCircleOutlinedIcon />
						</IconButton>
						<NavLink
							className={({ isActive }) => (isActive ? 'fill' : 'link')}
							to={'/explore'}>
							<IconButton>
								<ExploreIcon />
							</IconButton>
						</NavLink>
						<IconButton onClick={() => {}}>
							<FavoriteIcon />
						</IconButton>
						<Link to='/account'>
							<img
								style={{ borderRadius: '50%' }}
								src='https://picsum.photos/42'
								width={42}
								height={42}
								alt='Your account logo'
							/>
						</Link>
					</Stack>
				</Stack>
			</AppBar>
			<Box className='container2' component='main' sx={{ p: 3 }}>
				<Toolbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/chat' element={<Chat />} />
					<Route path='/explore' element={<Explore />} />
					<Route path='/account' element={<Account />} />
				</Routes>
			</Box>
		</Box>
	);
}
