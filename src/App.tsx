import i18n from 'i18next';
import { Lang } from './lang/Lang';
import { initReactI18next } from 'react-i18next';
import './assets/styles/index.scss';
import DrawerAppBar from './components/Header/Header';
import { Routes } from 'react-router-dom';

i18n.use(initReactI18next).init({
	fallbackLng: 'eng',
	interpolation: {
		escapeValue: false,
	},
	resources: {
		eng: { translation: Lang.eng },
		uz: { translation: Lang.uz },
	},
});

function App() {
	return (
		<div className='App'>
			<DrawerAppBar />
			<Routes></Routes>
		</div>
	);
}

export default App;
