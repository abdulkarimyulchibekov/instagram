import create from 'zustand';

export type SaveStore = (set: Function) => {
	saved: number[];
};

let saveStore: SaveStore = (set) => ({
	saved: [1, 2],
});

export const useSaveStore = create(saveStore);
