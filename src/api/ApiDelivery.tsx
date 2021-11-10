import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
})

const KEY= 'dff137738364ea1d173be3de51fd7c58c1ccba70'

export const ApiDelivery = {
  getDelivery(query:string) {
    console.log(query)
    console.log(query)
    console.log(query)
    
    return instance.post('', {'query': `${query}`,
      'locations': [
        {country_iso_code: 'BY'}
      ]
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Token ' + KEY
      },
    })
  }
}


// const settings = {
//   withCredentials: true,
//   headers: {
//     'API-KEY': 'dff137738364ea1d173be3de51fd7c58c1ccba70',
//     'secret': 'bc4e9baf934b999a702edc43fca98656cb02f7b6'
//   }
// }

// const instance = axios.create({
//   baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
//   // ...settings
// })


// const KEY= 'dff137738364ea1d173be3de51fd7c58c1ccba70'


// export const ApiDelivery = {
//   getDelivery() {
//   //   return instance.post('',
//   //   {'query': 'Чюрленис',
//   //   'locations': [
//   //     {country_iso_code: 'BY'}
//   //   ]
//   // },
//   // {
//   //   headers: {
//   //     'Content-Type': 'application/json',
//   //     'Accept': 'application/json',
//   //     'Authorization': 'Token ' + KEY
//   //   },
//   //  })
//   }
// }


// getDelivery(token: string|undefined) {
//   {
//     console.log(token)
//     return Promise.resolve(
//       instance.get(`/чюрлениса`,
//         {headers: {Authorization: `Bearer ${token}`}}
//       )
//     )
//   }
// }


