import { List, Typography } from '@mui/material';
import { useUsersStore } from '../../Data/UseUsersStore';
import { MainRightBottomLayout } from '../../layouts/Home/HomeRight.style';
import { HomeRightItem } from '../HomeRightItem/HomeRightItem';

export const HomeRightBottom = () => {
	const users = useUsersStore((state) => state.users).filter(
		(e) => !e.isFollowed,
	);

	return (
		<MainRightBottomLayout>
			<Typography fontSize={12} color={'gray'}>
				Рекомендации для вас
			</Typography>
			{users.length ? (
				<List>
					{users.map((e) => (
						<HomeRightItem key={e.id} user={e} />
					))}
				</List>
			) : (
				<p></p>
			)}
		</MainRightBottomLayout>
	);
};
