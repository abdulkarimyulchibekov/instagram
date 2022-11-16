import React from 'react';
import { Post } from '../../Data/UsePostsStore';
import { ListItem, Stack, Typography, IconButton, Box } from '@mui/material';
import { useUsersStore } from '../../Data/UseUsersStore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

interface IProps {
	e: Post;
}

export const HomeContentItem = ({ e }: IProps) => {
	const users = useUsersStore((state) => state.users);
	const user = users.find((el) => el.id === e.userId);

	return (
		<li
			style={{
				background: '#fff',
				marginTop: 30,
				border: '1.4px solid #dbdbdb',
				borderRadius: 8,
			}}>
			<Box width={'100%'}>
				<Stack
					direction={'row'}
					width={'100%'}
					justifyContent={'space-between'}
					style={{ padding: 10 }}
					alignItems={'center'}>
					<Stack alignItems={'center'} direction={'row'} spacing={3}>
						<img
							style={{ borderRadius: '50%' }}
							src={`https://picsum.photos/id/${user?.id}/72`}
							alt=''
							width={36}
							height={36}
						/>
						<Typography variant='body1'>{user?.name}</Typography>
					</Stack>
					<IconButton>
						<MoreHorizIcon />
					</IconButton>
				</Stack>
				<Box>
					<img width={'100%'} src={`https://picsum.photos/id/${e.id}/450`} />
				</Box>
				<Stack
					style={{ paddingLeft: 10, paddingRight: 10 }}
					direction={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}>
					<Stack direction={'row'} spacing={1}>
						<IconButton>
							<FavoriteBorderOutlinedIcon />
						</IconButton>
						<IconButton>
							<ChatBubbleOutlineOutlinedIcon />
						</IconButton>
						<IconButton>
							<SendOutlinedIcon />
						</IconButton>
					</Stack>
					<IconButton>
						<BookmarkBorderOutlinedIcon />
					</IconButton>
				</Stack>
			</Box>
			<Typography style={{ paddingLeft: 10 }} variant='body1'>
				{e.love} отметок "Нравится"
			</Typography>
		</li>
	);
};
