import {toast} from 'react-toastify'

import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css'

export const orderedToast = (message: string, autoClose?: number) => {
  toast.warn(message, {
    position: 'top-center',
    autoClose: autoClose || 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    // need to look at problem with TS
    // icon: false,
  })
}
