export type ValidationType={
isEmpty: boolean,
minLengthError?: number,
maxLengthError?: number,
firstNameError?: boolean,
lastNameError?: boolean,
emailError?: boolean,
phoneNumberError?: boolean,
passwordError?: boolean
}

export type UserAuthType={
email: string,
password: string
}

export type UserType={
    'id': number,
    'name': string,
    'secondname': string,
    'email': string,
    'password': string,
    'phone': string
}

export type DeliveryAdressType={
city: string
street: string
home: string
homePart: string
flat: string
    }
