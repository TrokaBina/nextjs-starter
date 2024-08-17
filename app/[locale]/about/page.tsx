import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('HomePage');
  return <h1>{t('title')}</h1>;
}
