import React from 'react';
import { FormattedMessage } from 'react-intl';

/*export const Message = ({ children, value }: any): any => (
  <FormattedMessage id={children} values={{ ...value }} />
);*/

export const TextMessage = (
  id: string | any,
  value: any = {},
  defaultMessage?: string
): any => (
  <FormattedMessage
    id={id}
    values={{ ...value }}
    defaultMessage={defaultMessage}
  />
);
