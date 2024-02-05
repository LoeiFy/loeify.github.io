/**
 * @type {import('@acyort/pigeon').Config}
 */
const config = {
  plugins: ['@acyort/pigeon'],
  template: '@acyort/pigeon',
  title: 'Recordum',
  description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
  public: '/docs',
  menu: {
    archives: '/archives/',
    tags: '/tags/',
    about: '/about/',
  },
  favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUAAAA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozsmr7C1AAAAB3RSTlMA8o3HRiCjAZ7XVAAAAFRJREFUKM9jGAUMDE6GwiroYkHi5eWFqqhirOnlQFAWgCLIVA4GCiiCjhBBERRBdYhgEYqgOUSwGEVQHCJYSEgQoZ2QRQgnEXI8wpsEAgQRdKOAAQCvriuz6lBMNwAAAABJRU5ErkJggg==',
  timezone: 'Asia/Shanghai',
  language: 'en',
  perpage: 10,
}

module.exports = config
