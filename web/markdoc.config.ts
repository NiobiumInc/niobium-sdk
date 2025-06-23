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
    mermaid: {
      render: 'Mermaid',
      selfClosing: false,
      children: ['*'],
      attributes: {},
    },
  },
};

export default config;
