import { Comment } from '../../Data/UseCommentsStore';

interface IProps {
	e: Comment;
}

export const CommentItem = ({ e }: IProps) => {
	return (
		<div style={{ display: 'flex', alignItems: 'start', marginBottom: 20 }}>
			<img
				style={{ borderRadius: '50%', marginRight: 10 }}
				src={`https://picsum.photos/id/${e.userId}/72`}
				alt='user logo'
				width={32}
				height={32}
			/>
			<p style={{ marginBottom: 0, marginTop: 5 }}>{e.content}</p>
		</div>
	);
};
