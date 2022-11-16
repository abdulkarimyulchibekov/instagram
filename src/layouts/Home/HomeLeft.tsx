import React from 'react';
import { HomeContent } from '../../components/HomeContent/HomeContent';
import { HomeTop } from '../../components/HomeTop/HomeTop';

export const HomeLeft = () => {
	return (
		<div style={{ width: '50%' }}>
			<HomeTop />
			<HomeContent />
		</div>
	);
};
