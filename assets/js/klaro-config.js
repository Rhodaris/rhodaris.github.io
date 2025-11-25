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
  privacyPolicy: '/privacy-policy.html',
  translations: {
    en: {
      consentModal: {
        title: 'Cookie preferences',
        description: 'We use cookies to improve your experience and analyze site traffic. You can choose which cookies to accept.',
      },
      googleAnalytics: {
        description: 'Google Analytics helps us understand how visitors use our website.',
      },
      purposes: {
        analytics: 'Analytics',
      },
      privacyPolicyUrl: '/privacy-policy.html',
    },
  },
  services: [
    {
      name: 'googleAnalytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: [/^_ga/, /^_gid/, /^_gat/],
      required: false,
      optOut: false,
      onlyOnce: true,
    },
  ],
};
