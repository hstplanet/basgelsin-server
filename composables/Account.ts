import { ICreate } from "~/types"

export const useAccount = () => {

  const createData = ref<ICreate>({
    activityId: 0,
    emailAddress: "",
    logo: "",
    mersisNumber: "",
    name: "",
    password: "",
    phone: "",
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

  const createUser = () => {
    console.log("Create : ", createData);

  }

  const createCompany = () => {

  }

  return {
    createData,
    createCompany,
    createUser
  }
}