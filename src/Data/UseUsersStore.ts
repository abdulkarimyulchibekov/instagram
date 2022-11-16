import create from 'zustand';

export type User = {
	name: string;
	isFollowed: boolean;
	id: number;
};

export type usersStore = (set: Function) => {
	users: User[];
};

export type Users = {
	users: User[];
};

let usersStore: usersStore = (set) => ({
	users: [
		{
			name: 'Aziz',
			id: 1,
			isFollowed: true,
		},
		{
			name: 'Mr_BloCK',
			id: 2,
			isFollowed: true,
		},
		{
			name: 'Kun.uz',
			id: 3,
			isFollowed: false,
		},
		{
			name: 'Abdumannob',
			id: 4,
			isFollowed: false,
		},
		{
			name: 'Olim',
			id: 5,
			isFollowed: false,
		},
		{
			name: 'Firdavs',
			id: 6,
			isFollowed: false,
		},
		{
			name: 'Ali',
			id: 7,
			isFollowed: false,
		},
		{
			name: 'Muhammad',
			id: 8,
			isFollowed: true,
		},
		{
			name: 'Islom qurbonov',
			id: 9,
			isFollowed: true,
		},
	],
});

export const useUsersStore = create(usersStore);
