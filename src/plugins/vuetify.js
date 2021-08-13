// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#ebc51c',
        offblack: '#068048',
      },
      dark: {},
    },
  },
})
