import { ICreate } from "~/types"

export const useAccount = () => {

  const createData = ref<ICreate>({
    name: "",
    activityId: 0,
    emailAddress: "",
    logo: "",
    mersisNumber: "",
    password: "",
    phone: "",
    repassword: "",
    taxNumber: "",
    taxOffice: "",
    address: {
      city: "",
      country: "",
      fullAddress: "",
      name: "",
      postCode: 0,
      town: ""
    }
  })

  const app = useAppConfig()

  const createUser = async () => {
    createData.value.address.country = "Turkey"
    createData.value.address.postCode = 0
    createData.value.activityId = 1

    const { data, pending, error, refresh } = await useAsyncData(
      'create',
      () => $fetch(app.baseURL + "Creaters/createCompany", {
        method: "POST",
        body: JSON.stringify(createData.value)
      })
    )

    console.log(data);
    
    return {
      data, pending, error, refresh
    }
  }

  const createCompany = () => {

  }

  return {
    createData,
    createCompany,
    createUser
  }
}