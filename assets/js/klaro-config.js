var klaroConfig = {
  elementID: 'klaro',
  storageMethod: 'cookie',
  cookieName: 'klaro',
  cookieExpiresAfterDays: 365,
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  noticeAsModal: false,
  lang: 'en',
  translations: {
    en: {
      consentModal: {
        title: 'Cookie preferences',
        description: 'We use cookies to improve your experience and analyze site traffic.',
      },
      googleAnalytics: {
        description: 'Google Analytics helps us understand how visitors use our website.',
      },
      purposes: {
        analytics: 'Analytics',
      },
    },
  },
  services: [
    {
      name: 'googleAnalytics',
      purposes: ['analytics'],
      cookies: [/^_ga/, /^_gid/, /^_gat/],
      required: false,
      optOut: false,
      onlyOnce: true,
    },
  ],
};
