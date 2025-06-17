import { Link, usePage, router } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import DropDown from './DropDown';
import { SharedData } from '@/js/shared/types/Inertia-middleware-prop';

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

  const languages = [
    { code: 'en', name: 'English', img: 'us' },
    { code: 'pt', name: 'Português', img: 'pt' },
    { code: 'es', name: 'Spanish', img: 'es' },
    { code: 'fr', name: 'French', img: 'fr' },
  ];

  return (
    <DropDown
        activeValue={
            <span className="flex items-center">
                <img src={`/assets/images/${locale === 'en' ? 'us' : locale}.svg`} width={20} alt={`${locale.toUpperCase()} flag`} className="inline-block mr-2" />
                {languages.find(lng => lng.code === locale)?.name}
            </span>
        }
        options={languages.map(lng => ({
            value: lng.code,
            label: lng.name,
            icon: `/assets/images/${lng.img}.svg`
        }))}
        onChange={changeLanguage}
    />
  );
};

