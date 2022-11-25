import { useState, useRef } from 'react';
import { Post } from '../../Data/UsePostsStore';
import {
	Stack,
	IconButton,
	Button,
	List,
	Modal,
	Box,
	Typography,
} from '@mui/material';
import { useUsersStore } from '../../Data/UseUsersStore';
import { useCommentsStore } from '../../Data/UseCommentsStore';
import { useSaveStore } from '../../Data/UseSavedStore';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
// import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { CommentItem } from '../CommentItem/CommentItem';
import { useTranslation } from 'react-i18next';
import './modal.scss';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
};

interface IProps {
	open: boolean;
	setOpen: Function;
	e: Post;
}

function ChildModal() {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const { t } = useTranslation();

	return (
		<>
			<IconButton onClick={handleOpen}>
				<MoreHoriz />
			</IconButton>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='child-modal-title'
				aria-describedby='child-modal-description'>
				<Box sx={{ ...style, width: 250, padding: '10px' }}>
					<h2 id='child-modal-title'>Text in a child modal</h2>
					<p id='child-modal-description'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					</p>
					<Button onClick={handleClose}>Close Child Modal</Button>
				</Box>
			</Modal>
		</>
	);
}

export function NestedModal({ open, setOpen, e }: IProps) {
	const { t } = useTranslation();

	const handleClose = () => {
		setOpen(false);
	};

	const user = useUsersStore((state) => state.users).find(
		(el) => el.id === e.userId,
	);

	const comments = useCommentsStore((state) => state.comments).find((el) => {
		return el.postId === e.id;
	})?.comments;

	console.log(comments);

	const save = useSaveStore((state) => state.saved);

	const inputRef = useRef<any>(null);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='parent-modal-title'
				aria-describedby='parent-modal-description'>
				<Box sx={{ ...style, width: 1100, height: 650 }}>
					<Stack direction='row' alignItems={'start'}>
						<img
							style={{ margin: -0.5 }}
							src={`https://picsum.photos/id/${e.id}/550/650`}
							alt=''
						/>
						<div>
							<Stack
								direction={'row'}
								alignItems={'center'}
								justifyContent={'space-between'}
								style={{
									padding: '10px 10px',
									width: 547,
									borderBottom: '1.4px solid #000',
									position: 'sticky',
								}}>
								<Stack direction={'row'} alignItems={'center'}>
									<img
										style={{ borderRadius: '50%', marginRight: 10 }}
										src={`https://picsum.photos/id/${e.userId}/72`}
										alt='user img'
										width={32}
										height={32}
									/>
									<p>{user?.name}</p>
								</Stack>
								<ChildModal />
							</Stack>
							<div
								style={{
									overflowY: 'auto',
									height: 450,
									width: '100%',
									padding: 10,
								}}
								className={'scroll'}>
								<div style={{ display: 'flex', alignItems: 'start' }}>
									<img
										src={`https://picsum.photos/id/${e.userId}/72`}
										width={32}
										height={32}
										style={{ borderRadius: '50%', marginRight: 10 }}
										alt=''
									/>
									<p style={{ margin: 0, marginTop: 8 }}>
										<strong>{user?.name}</strong>
										{'	'}
										{e.desc}
									</p>
								</div>
								{comments?.length ? (
									<List>
										{comments.map((item) => (
											<CommentItem key={item.id} e={item} />
										))}
									</List>
								) : (
									<p
										style={{
											fontSize: 20,
											color: 'gray',
											textAlign: 'center',
										}}>
										There is not any comment
									</p>
								)}
							</div>
							<Stack
								direction={'row'}
								justifyContent={'space-between'}
								alignItems={'start'}>
								<Stack direction={'row'} spacing={1}>
									<IconButton>
										<FavoriteBorderOutlinedIcon />
									</IconButton>
									<IconButton onClick={() => inputRef.current.focus()}>
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
							<Typography style={{ paddingLeft: 10 }} variant='body1'>
								{e.love} отметок "Нравится"
							</Typography>
							<Stack
								sx={{ marginTop: 2 }}
								direction={'row'}
								alignItems={'center'}
								spacing={1}
								style={{ borderTop: '1.4px solid #444' }}
								justifyContent={'space-between'}>
								<input
									type='text'
									ref={inputRef}
									className='modal-input'
									placeholder='Добавьте комментарий....'
								/>
								<Button variant='text'>Опубликовать</Button>
							</Stack>
						</div>
					</Stack>
				</Box>
			</Modal>
		</div>
	);
}
