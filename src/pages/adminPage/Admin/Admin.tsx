import AdminHeader from './AdminHeader'
import ScrollToTop from '../../../components/scrollToTop/ScrollToTop'

const Admin = () => {
  return (
    <div>
      <h2 style={{padding: '20px', color: 'black'}}>
        Панель администратора
      </h2>
      <AdminHeader/>
      <ScrollToTop />
    </div>
  )
}

export default Admin
