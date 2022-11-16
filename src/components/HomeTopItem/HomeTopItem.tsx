import React from 'react';
import { User } from '../../Data/UseUsersStore';
import './index.scss';

interface IProps {
	e: User;
}

export const HomeTopItem = ({ e }: IProps) => {
	return (
		<div style={{ width: 72 }}>
			<img
				style={{ borderRadius: '50%' }}
				src={`https://picsum.photos/id/${e.id}/72`}
				alt={e.name}
			/>
			<p className='content' style={{}}>
				{e.name}
			</p>
		</div>
	);
};
