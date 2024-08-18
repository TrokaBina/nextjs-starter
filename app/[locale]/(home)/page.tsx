import { Paragraph } from '@/platform/components/typography/Paragraph';
import { useTranslations } from 'next-intl';
import { LanguageSwitch } from './LanguageSwitch';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className="container mx-auto xl:items-center xl:justify-center min-h-screen min-w-full flex flex-col py-6 px-4 bg-white">
      <div className="wrapper relative flex flex-col gap-y-4">
        <div className="header w-full">
          <LanguageSwitch />
          <Paragraph
            className="text-black"
            style={{ color: 'black' }}
            size={'default'}
          >
            Hello
          </Paragraph>
          <Paragraph
            className="text-black"
            style={{ color: 'black' }}
            size={'large'}
          >
            Hello
          </Paragraph>
          <h1 className="title text-2xl text-black font-semibold">{t('title')}</h1>
          <p className="text-black text-lg">{t('description')}</p>
        </div>
        <div className="form items-start flex flex-col gap-y-4">
          <div className="fullname flex flex-col gap-y-2 self-stretch">
            <label className="block text-lg font-medium text-black">{t('form.fullname.label')}</label>

            {/* first name */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-white border border-gray-300 text-black text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-2.5 py-4"
                placeholder={t('form.fullname.placeholder_1')}
              />
            </div>

            {/* last name */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-white border border-gray-300 text-black text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 px-2.5 py-4"
                placeholder={t('form.fullname.placeholder_2')}
              />
            </div>
          </div>

          <div className="email flex flex-col gap-y-2 self-stretch">
            <label className="block text-lg font-medium text-black">{t('form.email.label')}</label>

            {/* first name */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="input-group-1"
                className="bg-white border border-gray-300 text-black text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-2.5 py-4"
                placeholder={t('form.email.placeholder')}
              />
            </div>
          </div>

          <div className="password flex flex-col gap-y-2 self-stretch">
            <label className="block text-lg font-medium text-black">{t('form.password.label')}</label>

            {/* password */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-6 h-6 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.356 3.066a1 1 0 0 0-.712 0l-7 2.666A1 1 0 0 0 4 6.68a17.695 17.695 0 0 0 2.022 7.98 17.405 17.405 0 0 0 5.403 6.158 1 1 0 0 0 1.15 0 17.406 17.406 0 0 0 5.402-6.157A17.694 17.694 0 0 0 20 6.68a1 1 0 0 0-.644-.949l-7-2.666Z" />
                </svg>
              </div>
              <input
                type="password"
                id="input-group-1"
                className="bg-white border border-gray-300 text-black text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-2.5 py-4"
                placeholder={t('form.password.placeholder_1')}
              />
            </div>

            {/* confirm password */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-6 h-6 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.356 3.066a1 1 0 0 0-.712 0l-7 2.666A1 1 0 0 0 4 6.68a17.695 17.695 0 0 0 2.022 7.98 17.405 17.405 0 0 0 5.403 6.158 1 1 0 0 0 1.15 0 17.406 17.406 0 0 0 5.402-6.157A17.694 17.694 0 0 0 20 6.68a1 1 0 0 0-.644-.949l-7-2.666Z" />
                </svg>
              </div>
              <input
                type="password"
                id="input-group-1"
                className="bg-white border border-gray-300 text-black text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 px-2.5 py-4"
                placeholder={t('form.password.placeholder_2')}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
