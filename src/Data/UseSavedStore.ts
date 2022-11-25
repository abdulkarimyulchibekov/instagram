import create from 'zustand';

export type SaveStore = (set: Function) => {
	saved: number[];
	addSaved: Function;
	deleteSaved: Function;
};

export type SaveMain = {
	saved: number[];
	addSaved: Function;
};

let saveStore: SaveStore = (set) => ({
	saved: [],
	addSaved: (item: number) =>
		set((state: SaveMain) => {
			state.saved = [...state.saved, item];
			return state.saved;
		}),
	deleteSaved: (item: number) =>
		set((state: SaveMain) => {
			if (state.saved.length === 1) {
				state.saved = [];
			} else {
				state.saved = state.saved.splice(
					state.saved.findIndex((e) => e === item) - 1,
					1,
				);
			}
			return state.saved;
		}),
});

export const useSaveStore = create(saveStore);
