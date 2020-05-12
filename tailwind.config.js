/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      //
      // Custom Font Families
      //
      headings: ['Mukta', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['Mukta', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        //
        // Custom Colour Extensions
        //
        'brand-one': '#0d4163',
        'brand-two': '#99b2b3',
        'brand-three': '#d0d8d8',
        'brand-four': '#f1f3f3'
      }
    }
  },
  variants: {},
  corePlugins: {
    // Disable Core Plugins
    //
    // container: false
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        //
        // Custom Components
        //
        // '.container': {
        //   maxWidth: '100%',
        //   '@screen xl': {
        //     maxWidth: '1280px'
        //   }
        // }
      })
    }
  ]
}
