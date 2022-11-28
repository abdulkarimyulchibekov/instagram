import React from 'react';
import { HomeRightBottom } from '../../components/HomeRightBottom/HomeRightBottom';
import { HomeRightTop } from '../../components/HomeRightTop/HomeRightTop';
import { MainRightLayout } from './HomeRight.style';

export const HomeRight = () => {
	return (
		<MainRightLayout>
			<HomeRightTop />
			<HomeRightBottom />
		</MainRightLayout>
	);
};
