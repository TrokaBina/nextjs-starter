import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('HomePage');
  return (
    <div className="">
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <p>{t('description_two')}</p>
    </div>
  );
}
