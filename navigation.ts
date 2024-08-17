import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { LOCALES } from './config/i18n/constant';

const locales = LOCALES;

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });
