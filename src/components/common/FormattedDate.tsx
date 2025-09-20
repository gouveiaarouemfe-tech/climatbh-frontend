
'use client';

import React from 'react';

interface FormattedDateProps {
  dateString: string;
  options?: Intl.DateTimeFormatOptions;
}

const FormattedDate: React.FC<FormattedDateProps> = ({ dateString, options }) => {
  const date = new Date(dateString);
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <time dateTime={dateString}>
      {date.toLocaleDateString('pt-BR', options || defaultOptions)}
    </time>
  );
};

export default FormattedDate;

