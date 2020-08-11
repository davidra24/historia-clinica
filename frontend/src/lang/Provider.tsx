import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './locales';
import messages from './messages';

const LangProvider = ({ children, locale = LOCALES.SPANISH }: any) => {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export default LangProvider;
