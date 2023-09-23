export default defineAppConfig({

    baseURL: "http://localhost:5057/api/"

})


declare module 'nuxt/schema' {
    interface AppConfig {
        baseURL: string
    }
}