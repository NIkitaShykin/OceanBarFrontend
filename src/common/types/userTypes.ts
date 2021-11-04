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

export type UserType={
email: string,
password: string
}
