import React from 'react';
import { HomeLeft } from '../../layouts/Home/HomeLeft';
import { HomeRight } from '../../layouts/Home/HomeRight';
import { Stack } from '@mui/material';

export const Home = () => {
	return (
		<Stack direction={'row'} spacing={5}>
			<HomeLeft />
			<HomeRight />
		</Stack>
	);
};
