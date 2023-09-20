type IUser = {

    id: number
    name: string
    lastname: string
    fullName: string
    emailAddress: string
    active: boolean
    signToken: string

}

type IAddress = {
    id?: number
    city: string
    town: string
    country: string
    fullAddress: string
    postCode: number
    name: string
}

type ICreate = {
    id?: number
    activityId: number
    name: string
    taxOffice: string
    taxNumber: string
    mersisNumber: string
    phone: string
    emailAddress: string
    password: string
    repassword: string
    logo: string
    address: IAddress
}

export { IUser, ICreate, IAddress }