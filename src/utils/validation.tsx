import {useState, useEffect} from 'react'

export const useValidation = (value: string, validations: any) => {
  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [maxLengthError, setMaxLengthError] = useState(false)
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneNumberError, setPhoneNumberError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [inputValid, setInputValid] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line guard-for-in
    for (const validation in validations) {
      switch (validation) {
      case 'isEmpty':
        value ? setEmpty(false) : setEmpty(true)
        break
      case 'minLengthError':
        (value.length < validations[validation]) ?
          setMinLengthError(true) :
          setMinLengthError(false)
        break
      case 'maxLengtnError':
        (value.length > validations[validation]) ?
          setMaxLengthError(true) :
          setMaxLengthError(false)
        break
      case 'firstNameError':
        // eslint-disable-next-line max-len
        const regExpFirstName = /^[a-zA-Zа-яА-Я-]{2,30}$/
        regExpFirstName.test(value) ?
          setFirstNameError(false) :
          setFirstNameError(true)
        break
      case 'lastNameError':
        // eslint-disable-next-line max-len
        const regExpLastName = /^[a-zA-Zа-яА-Я-]{3,30}$/
        regExpLastName.test(value) ?
          setLastNameError(false) :
          setLastNameError(true)
        break
      case 'emailError':
        const regExpEmail = /^[a-z\d]{2,64}?@[a-z\d.\-]{2,253}\.[a-z]{2,6}$/ig
        regExpEmail.test(value.toLowerCase()) ?
          setEmailError(false) :
          setEmailError(true)
        break
      case 'phoneNumberError':
        // eslint-disable-next-line max-len
        const regExpPhoneNumber = /^(\+?375-?|8-?0)(25|29|33|44|17)-?([1-9]\d{2})(-?\d{2}){2}$/
        regExpPhoneNumber.test(value) ?
          setPhoneNumberError(false) :
          setPhoneNumberError(true)
        break
      case 'passwordError':
        // eslint-disable-next-line max-len
        const regExpPass = /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9])[a-zа-яA-ZА-Я\d]{8,15}$/
        regExpPass.test(value) ?
          setPasswordError(false) :
          setPasswordError(true)
      }
    }
  }, [value])

  useEffect(() => {
    // eslint-disable-next-line max-len
    if (isEmpty || minLengthError || maxLengthError || firstNameError || lastNameError || emailError || phoneNumberError || passwordError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [
    isEmpty,
    minLengthError,
    maxLengthError,
    firstNameError,
    lastNameError,
    emailError,
    phoneNumberError,
    passwordError
  ])

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    firstNameError,
    lastNameError,
    emailError,
    phoneNumberError,
    passwordError,
    inputValid
  }
}
