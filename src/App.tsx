import i18n from 'i18next';
import { Lang } from './lang/Lang';
import { initReactI18next } from 'react-i18next';
import './assets/styles/index.scss';
import DrawerAppBar from './components/Header/Header';

i18n.use(initReactI18next).init({
	fallbackLng: 'eng',
	interpolation: {
		escapeValue: false,
	},
	resources: {
		eng: { translation: Lang.eng },
		ru: { translation: Lang.ru },
	},
});

function App() {
	return (
		<div className='App'>
			<DrawerAppBar />
		</div>
	);
}

export default App;
