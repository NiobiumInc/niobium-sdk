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
    variable: {
      render: "span",
      attributes: {
        name: { type: String },
      },
    },
  },
};

export default config;
