import { useUserStore } from "~/stores/User"
import { IUser } from "~/types"
import { useValitade } from "./Valitade"

export const useLogin = () => {

  const email = ref("")
  const password = ref("")
  const { validateEmail } = useValitade()


  const app = useAppConfig()



  const login = async () => {

    const { errorValue } = await validateEmail(email.value)
    if (errorValue.value.length > 0) {
      return { error: errorValue, pending: ref(false) }
    }

    const userStore = useUserStore()

    const { data, pending, error, refresh } = await useAsyncData<IUser>(
      'login',
      () => $fetch(app.baseURL + "Auth/signin", {
        query: {
          emailaddress: email.value,
          password: password.value
        }
      })
    )

    if (!error.value) {
      userStore.setUser(data.value)
    }

    return { data, pending, error, refresh }
  }

  const signout = () => {

    const userStore = useUserStore()
    userStore.setUser(null)
    const cookie = useCookie("basgelsin_auth")
    cookie.value = ""
  }



  return {
    email,
    password,
    login,
    signout
  }
}