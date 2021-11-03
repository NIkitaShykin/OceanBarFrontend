import {toast} from 'react-toastify'

import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css'


export const orderedToast = (message: string) => {
  toast.warn(message, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    icon: false
  })
}
