// import React from 'react'
import {toast} from 'react-toastify'

import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css'
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export const OrderedToast = (message) => {
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
