import React from 'react'
import manifest from './manifest.json'

export default {
  entry: 'index.tsx',
  productionSourceMaps: true,
  getSiteData: () => (
    manifest
  ),
  getRoutes: async () => {
    try {
      return manifest.pages.map((page) => (
         {
          path: page.path,
          template: page.template
        }
      ))
    } catch (error) {
      console.error('Error while building the routes!', error.message)
      process.exit(1);
    }
  },
  Document: class CustomHtml extends React.Component {
    render() {
      const {
        Html,
        Head,
        Body,
        children,
        renderMeta
      } = this.props;
      let config;
      if (process.env.NODE_ENV === 'development') {
        config = "/settings/config.js";
      } else {
        config = "/settings/config.js";
      }
      
      return (
          <Html lang='en-US'>
          <Head>
            <meta charSet='UTF-8'/>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <script src={config}></script>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans” rel=“stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Montserrat&display=swap' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Montserrat:700&display=swap' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap' rel='stylesheet'/>
          </Head>
          <Body>{children}</Body>
          </Html>
      )
    }
  },
  
  
  plugins: [
    ['react-static-plugin-typescript', {typeCheck: false}],
    'react-static-plugin-styled-components',
    'react-static-plugin-reach-router',
  ],
  resolve: {
    alias: {
      config: 'manifest',
    },
  },
  devServer: {
    contentBase: ['.'],
  },
}
