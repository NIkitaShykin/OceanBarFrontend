export interface IAuthResponse {
  accessToken: string,
  refreshToken: string,
  data?: IUser
}

export interface IUser {
  id: number,
  refreshToken: string,
  isActivated: boolean,
  activationLink: string | null,
  name: string,
  secondname: string,
  email: string,
  password: string,
  phone: string,
  city: string,
  street: string,
  homeNumber: string,
  homePart: string,
  flat: string
}
