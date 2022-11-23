import { usePostsStore } from '../../Data/UsePostsStore';
import { List, ListItem } from '@mui/material';
import { HomeContentItem } from '../HomeContentItem/HomeContentItem';

export const HomeContent = () => {
	const posts = usePostsStore((state) => state.posts);
	return (
		<div>
			{posts.length && (
				<List>
					{posts.map((e) => (
						<HomeContentItem key={e.id} e={e} />
					))}
				</List>
			)}
		</div>
	);
};
