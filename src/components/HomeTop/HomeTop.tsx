import React from 'react';
import { Box, Stack } from '@mui/material';
import { Users, useUsersStore, User } from '../../Data/UseUsersStore';
import { HomeTopItem } from '../HomeTopItem/HomeTopItem';
import './index.scss';

export const HomeTop = () => {
	const list = useUsersStore((state: Users) => state.users);
	return (
		<div className='hometop'>
			<Stack alignItems={'center'} direction={'row'} spacing={2}>
				{list.length && (
					<>
						{list
							.filter((e: User) => e.isFollowed)
							.map((e: User) => {
								return <HomeTopItem e={e} />;
							})}
					</>
				)}
			</Stack>
		</div>
	);
};
