import { useUserStore } from "~/stores/User"
import { IUser } from "~/types"

export default defineNuxtPlugin(async (nuxtApp) => {

    const cookie = useCookie("basgelsin_auth")
    const app = useAppConfig()
    const user = useUserStore()


    if (cookie.value) {
        const { data, pending, error, refresh } = await useAsyncData<IUser>(
            'login',
            () => $fetch(app.baseURL + "Auth/onAuthStateChanged", {
                query: {
                    token: cookie.value,
                }
            })
        )

        if (!error.value) {
            user.setUser(data.value)
        }


    }

})