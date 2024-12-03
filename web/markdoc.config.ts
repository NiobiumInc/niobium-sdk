import { Config } from '@markdoc/markdoc';

const config: Config = {
  nodes: {
    heading: {
      render: 'h1',
    },
    paragraph: {
      render: 'p',
    },
  },
  tags: {
    customTag: {
      render: 'div',
    },
  },
};

export default config;
