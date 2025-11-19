/**
 * @type {import('@acyort/pigeon').Config}
 */
const config = {
  plugins: ['@acyort/pigeon'],
  template: '@acyort/pigeon',
  title: '🐦 Pigeon',
  description: 'something came up, coo coo coo',
  public: '/docs',
  menu: {
    archives: '/archives/',
    about: '/about/',
  },
  favicon: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  timezone: 'Asia/Shanghai',
  language: 'en',
  perpage: 10,
}

module.exports = config
