import en from './config/i18n/messages/en.json';

import my from './config/i18n/messages/my.json';

type EnMessages = typeof en;

type MyMessages = typeof my;

type Messages = EnMessages & MyMessages;

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}
