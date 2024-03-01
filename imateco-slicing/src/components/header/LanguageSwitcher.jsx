import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {

	const { i18n } = useTranslation();
	const storageDirection = localStorage.getItem('direction') || 'ltr'
	// Switch Languages function
	const [direction, setDirection] = useState(storageDirection);

	const rootElement = document.getElementById('root');
	rootElement.setAttribute('dir', direction)

	document.documentElement.dir = direction;
	document.documentElement.lang = direction === 'ltr' ? 'en' : 'ar';
	
	const toggleDirection = (newDirection) => {
	  setDirection(newDirection);
	  localStorage.setItem('direction', direction);
	  i18n.changeLanguage(direction === 'ltr' ? 'en' : 'ar');
	};

	useEffect(() => {
		localStorage.setItem('direction', direction);
		i18n.changeLanguage(direction === 'ltr' ? 'en' : 'ar');

		if (rootElement) {
			rootElement.setAttribute('dir', direction);
		}
	}, [direction])


	return (
		<div className="switch-lang">
			<input
				type="checkbox"
				id='switchLang'
				className='switch-lang'
				checked={direction === 'rtl'}
				onChange={() => toggleDirection(direction === 'rtl' ? 'ltr' : 'rtl')}
			/>
			<label htmlFor="switchLang" className="d-flex align-items-center gap-2 fw-semibold text-uppercase">
				<span className="mt-1">{direction !== 'rtl' ? 'عربي ' : 'EN'}</span>
				{direction === 'rtl' ? <img src="./usa.svg" alt="ksa flag" srcSet="" /> : <img src="./ksa.svg" alt="ksa flag" srcSet="" />}
				
			</label>
		</div>
	)
}

export default LanguageSwitcher
