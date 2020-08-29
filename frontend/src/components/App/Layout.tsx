import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

export const Layout = ({ title, children, subtitle, name, ...props }: any) => {
  const intl = useIntl();
  const appTitle = intl.formatMessage({ id: 'app.title' });
  const module = !name
    ? intl.formatMessage({ id: title })
    : intl.formatMessage({ id: title }) + name;
  const description = intl.formatMessage({ id: subtitle });

  return (
    <>
      <Helmet>
        {title && <title>{`${module} | ${appTitle}`}</title>}
        {subtitle && <meta name='description' content={description} />}
      </Helmet>
      {children}
    </>
  );
};
