// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import colors from 'vuetify/lib/util/colors'
import { themePreset } from "@/themeConfig";

Vue.use(Vuetify)

export default new Vuetify({
  theme: themePreset.theme,
  rtl: themePreset.rtl
})
