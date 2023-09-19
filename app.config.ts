export default defineAppConfig({

    baseURL: "https://server.hstplanet.com/api/"

})


declare module 'nuxt/schema' {
    interface AppConfig {
        baseURL: string
    }
}