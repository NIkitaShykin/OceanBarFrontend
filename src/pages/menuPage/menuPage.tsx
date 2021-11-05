import Spinner from '../../components/Spinner/Spinner'
import {useAppSelector} from '../../redux/hooks'
import Menu from '../menuPage/Menu/Menu'

const MenuPage = () => {
  const isLoading: boolean = useAppSelector<any>((state) =>
    state.dish.isLoading)

  return (
    <>
      {isLoading && <Spinner />}
      <Menu/>
    </>
  )
}


export default MenuPage
