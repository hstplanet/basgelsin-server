import { useUserStore } from "~/stores/User"
import { IUser } from "~/types"

export const useLogin = () => {

  const email = ref("")
  const password = ref("")


  const app = useAppConfig()

  function validateEmail(email: string) {
    const errorValue = ref<string>("")
    // E-posta adresi için regex deseni
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // E-posta adresini kontrol et
    if (pattern.test(email)) {
      errorValue.value = ""
      return { errorValue };
    } else {
      errorValue.value = "Email adresiniz doğru formatta değil"
      return { errorValue };
    }
  }



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