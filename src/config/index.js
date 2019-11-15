module.exports = {
  siteTitle: 'Cre8 Salon',
  siteDescription:
    'A trendy full service salon in South Lyon MI. Gift certificates available, walk ins welcome. For men, women, and children. We pledge to Cre8 a comfortable, contemporary atmosphere with superior service and continual education.',
  siteKeywords:
    'Cre8, Salon, Cre8 Salon, Create, South Lyon, hairdresser, haircut, Lyon, perm, color, trendy',
  siteUrl: 'https://cre8salonsouthylon.com',
  siteLanguage: 'en_US',


  googleVerification: 'NsIo5NcbMzmkjMbPwZlo6IRzbIRxprljN_iw9RVAQ6A',

  name: 'Shona Denton',
  location: 'South Lyon, MI',
  email: ' ',
  nav: [
    {
      name: 'SERVICES',
      url: '#services',
    },
    {
      name: 'STYLISTS',
      url: '#stylists',
    },
    // {
    //   name: 'ABOUT',
    //   url: '#about',
    // },
    {
      name: 'CONTACT',
      url: '#contact',
    },
  ],
  googleAnalyticsID: 'UA-152644100-1',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
