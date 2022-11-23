import { useState } from 'react';
import { Post } from '../../Data/UsePostsStore';
import { Button, Stack, Typography, IconButton, Box } from '@mui/material';
import { useUsersStore } from '../../Data/UseUsersStore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useCommentsStore } from '../../Data/UseCommentsStore';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { NestedModal } from '../Modal/Modal';
import './index.scss';
import { useSaveStore } from '../../Data/UseSavedStore';

interface IProps {
	e: Post;
}

export const HomeContentItem = ({ e }: IProps) => {
	const users = useUsersStore((state) => state.users);
	const user = users.find((el) => el.id === e.userId);

	const save = useSaveStore((state) => state.saved);

	const [hidden, setHidden] = useState('desc');
	const [isHidden, setIsHidden] = useState(false);
	const [open, setOpen] = useState(false);

	const comments = useCommentsStore((state) => state.comments);
	const comment = comments.find((el) => e.id === el.postId);

	const func: () => void = () =>
		hidden === 'casual'
			? (setHidden('desc'), setIsHidden(!isHidden))
			: setHidden('casual');

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
					<img
						width={'100%'}
						src={`https://picsum.photos/id/${e.id}/450`}
						alt='good'
					/>
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
						<IconButton onClick={() => setOpen(true)}>
							<ChatBubbleOutlineOutlinedIcon />
						</IconButton>
						<IconButton>
							<SendOutlinedIcon />
						</IconButton>
					</Stack>
					<IconButton className='filled'>
						{save.includes(e.id) ? (
							<BookmarkIcon />
						) : (
							<BookmarkBorderOutlinedIcon />
						)}
					</IconButton>
				</Stack>
			</Box>
			<Box
				style={{
					paddingLeft: 10,
					paddingRight: 10,
					paddingBottom: 0,
				}}>
				<Typography variant='body1'>{e.love} отметок "Нравится"</Typography>
				<Stack style={{ marginTop: 10 }} direction={'row'}>
					<p className={hidden}>{e.desc}</p>
					<button
						style={{
							margin: 0,
							background: 'transparent',
							border: 0,
							padding: 0,
						}}
						className={hidden}
						onClick={func}>
						{' '}
						ещё
					</button>
				</Stack>
				<button
					style={{
						margin: 0,
						marginTop: 5,
						background: 'transparent',
						border: 0,
						padding: 0,
						color: 'gray',
						cursor: 'pointer',
					}}
					onClick={() => setOpen(true)}>
					Посмотреть все комментарии (
					<span>{comment?.comments.length ? comment?.comments.length : 0}</span>
					)
				</button>
				<Stack
					direction={'row'}
					justifyContent='space-between'
					alignItems='center'>
					<IconButton>
						<SentimentSatisfiedOutlinedIcon />
					</IconButton>
					<input
						placeholder='добавьте комментарий...'
						className='item__input'
						type='text'
					/>
					<Button variant='text'>Oпубликовать</Button>
				</Stack>
			</Box>
			<NestedModal open={open} setOpen={setOpen} e={e} />
		</li>
	);
};
