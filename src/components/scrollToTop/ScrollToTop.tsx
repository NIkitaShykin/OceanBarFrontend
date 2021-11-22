import {useEffect} from 'react'
import {useLocation} from 'react-router'


const ScrollToTop = () => {
  const routePath = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [routePath])

  return null
}


export default ScrollToTop
