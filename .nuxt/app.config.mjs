
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Users/Umut ALTIN/Desktop/BasGelsin/Web/basgelsin-server/node_modules/defu/dist/defu.mjs'

const inlineConfig = {}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "C:/Users/Umut ALTIN/Desktop/BasGelsin/Web/basgelsin-server/app.config.ts"

export default /* #__PURE__ */ defuFn(cfg0, inlineConfig)
