import React from 'react'
import { ValidLocale } from '@lib/i18n'
import { FiGlobe } from 'react-icons/fi'
import { useIntl, defineMessages } from 'react-intl'

const messages = defineMessages({
  en: {
    id: '8yLSUZ',
    defaultMessage: 'Inglês',
  },
  'pt-BR': {
    id: 'GOfudF',
    defaultMessage: 'Português',
  },
})

export interface LocaleLabelProps {
  locale: ValidLocale
}

const LocaleLabel: React.FC<LocaleLabelProps> = ({ locale }) => {
  const intl = useIntl()
  return (
    <>
      {locale !== 'pt-BR' ? (
        <>
          <FiGlobe
            size={16}
            className="inline-block align-text-top text-theme-600"
          />{' '}
          {intl.formatMessage(messages[locale])}
        </>
      ) : (
        <>🇧🇷 {intl.formatMessage(messages['pt-BR'])}</>
      )}
    </>
  )
}

LocaleLabel.displayName = 'LocaleLabel'

export { LocaleLabel }
export default LocaleLabel
