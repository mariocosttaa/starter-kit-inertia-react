import { Link, usePage, router } from '@inertiajs/react';
import { SharedData } from '../types/Inertia-middleware-prop';
import { useTranslation } from 'react-i18next';



interface LanguageSwitcherProps {
  includeDownIcon?: boolean;
  className?: string;
}

export default function LanguageSwitcher({ includeDownIcon = false, className = "" }: LanguageSwitcherProps) {
  const { locale } = usePage<SharedData>().props;
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    const url = new URL(window.location.href);
    const pathParts = url.pathname.split('/');

    pathParts[1] = lng;
    url.pathname = pathParts.join('/');

    i18n.changeLanguage(lng);

    const currentScrollPosition = window.scrollY;
    router.visit(url.toString(), {
      preserveScroll: true,
      onSuccess: () => window.scrollTo(0, currentScrollPosition),
    });

  };

  return (
    <>
      <li className="nav-item dropdown ms-2">
        {locale == 'en' ? (
          <a className={`nav-link dropdown-toggle ${className}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={`/assets/images/us.svg`} alt="English" className="me-2" width={20} />
            <span className="align-middle">English</span>
            {includeDownIcon && <i className="ti ti-chevron-down fs-5 me-2" />}
          </a>
        ) : locale == 'pt' ? (
          <a className={`nav-link dropdown-toggle ${className}`}  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={`/assets/images/pt.svg`} alt="Português" className="me-2" width={20} />
            <span className="align-middle">Português</span>
            {includeDownIcon && <i className="ti ti-chevron-down fs-5 me-2" />}
          </a>
        ) : locale == 'es' ? (
          <a className={`nav-link dropdown-toggle ${className}`}  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={`/assets/images/es.svg`} alt="Spanish" className="me-2" width={20} />
            <span className="align-middle">Spanish</span>
            {includeDownIcon && <i className="ti ti-chevron-down fs-5 me-2" />}
          </a>
        ) : locale == 'fr' ? (
          <a className={`nav-link dropdown-toggle ${className}`}  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={`/assets/images/fr.svg`} alt="French" className="me-2" width={20} />
            <span className="align-middle">French</span>
            {includeDownIcon && <i className="ti ti-chevron-down fs-5 me-2" />}
          </a>
        ) : (
          <a className={`nav-link dropdown-toggle ${className}`}  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={`/assets/images/${locale}.svg`} alt={locale} className="me-2" width={20} />
            <span className="align-middle">{locale}</span>
            {includeDownIcon && <i className="ti ti-chevron-down fs-5 me-2" />}
          </a>
        )}

        <ul className="dropdown-menu">
          <li>
            <button onClick={() => changeLanguage('en')} className="dropdown-item"><img src={`/assets/images/us.svg`} alt="English" className="me-2" width={20} /> English</button>
          </li>
          <li>
            <button onClick={() => changeLanguage('pt')} className="dropdown-item"><img src={`/assets/images/pt.svg`} alt="Português" className="me-2" width={20} /> Português</button>
          </li>
          <li>
            <button onClick={() => changeLanguage('es')} className="dropdown-item"><img src={`/assets/images/es.svg`} alt="Spanish" className="me-2" width={20} /> Spanish</button>
          </li>
          <li>
            <button onClick={() => changeLanguage('fr')} className="dropdown-item"><img src={`/assets/images/fr.svg`} alt="French" className="me-2" width={20} /> French</button>
          </li>
        </ul>
      </li>
    </>
  );
};

