import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainRightTopLayout } from '../../layouts/Home/HomeRight.style';

export const HomeRightTop = () => {
	const navigate = useNavigate();
	return (
		<MainRightTopLayout direction={'row'} spacing={1} alignItems={'center'}>
			<img
				width={42}
				height={42}
				src={`https://picsum.photos/id/0/42`}
				alt='user logo'
				className='home__logo'
			/>
			<div className=''>
				<p className='home__text'>nobody_knows2336</p>
				<p className='home__desc'>Abdulkarim Yulchibekov</p>
			</div>
			<Button onClick={() => navigate('/account')} className='home__button'>
				переключиться
			</Button>
		</MainRightTopLayout>
	);
};
