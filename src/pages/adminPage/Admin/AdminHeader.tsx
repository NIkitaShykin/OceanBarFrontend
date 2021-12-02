
import {Col, Container, Row, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './Admin.scss'


const AdminHeader = () => (
  <Container>
    <Nav className='justify-content-start' activeKey='/admin'>
      <Row style={{width: '100%'}}
      >
        <Col xs={2} sm={2} md={3} lg={2} >
          <NavLink
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}
            to={'/admin/dishes/new'}>
            <span style={{fontSize: '16px'}}>Добавить блюдо</span>
          </NavLink>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} >
          <NavLink
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}
            to={'/admin/dishes/delete'}>
            <span style={{fontSize: '16px'}}>Удалить блюдо</span>
          </NavLink>
        </Col>
        <Col xs={4} sm={4} md={4} lg={3} >
          <NavLink
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}
            to={'/admin/bookings'}>
            <span style={{fontSize: '16px'}}>Забронированные столы</span>
          </NavLink>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <NavLink
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}
            to={'/admin/orders'}>
            <span style={{fontSize: '16px'}}>Заказы</span>
          </NavLink>
        </Col>

      </Row>
    </Nav>
    <hr style=
      {{
        height: '2px',
        borderWidth: '0',
        color: 'gray',
        backgroundColor: 'gray'
      }}
    />
  </Container>
)


export default AdminHeader
