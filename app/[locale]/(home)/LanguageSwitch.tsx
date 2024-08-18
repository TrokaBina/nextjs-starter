'use client';

import { useRouter } from '@/navigation';
import { useLocale } from 'next-intl';

export const LanguageSwitch = () => {
  const router = useRouter();
  const currentLocale = useLocale();

  const onChangeLanguage = (language: string) => {
    const nextLocale = language;
    router.replace(`${nextLocale}`);
  };
  return (
    <div className="inline-flex rounded-md shadow-sm mb-4 w-full justify-end">
      <button
        onClick={() => onChangeLanguage('en')}
        className={`px-4 py-2 text-sm font-mediu ${currentLocale === 'en' ? 'text-blue-700' : 'text-black'} bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
      >
        English
      </button>

      <button
        onClick={() => onChangeLanguage('my')}
        className={`px-4 py-2 text-sm font-medium ${currentLocale === 'my' ? 'text-blue-700' : 'text-black'} bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
      >
        Malay
      </button>
    </div>
  );
};
