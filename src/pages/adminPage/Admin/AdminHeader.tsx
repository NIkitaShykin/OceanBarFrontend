
import {Col, Container, Row, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './Admin.scss'


const AdminHeader = () => (
  <Container>
    <Nav className='justify-content-start' activeKey='/admin'>
      <Row
      >
        <Col xs={'auto'}>
          <NavLink
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}
            to={'/admin/dishes/new'}>
            <h5>Добавить блюдо</h5>
          </NavLink>
        </Col>
        <Col xs={'auto'}>
          <NavLink
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}
            to={'/admin/dishes/delete'}>
            <h5>Удалить блюдо</h5>
          </NavLink>
        </Col>
        <Col xs={'auto'}>
          <NavLink
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}
            to={'/admin/tables'}>
            <h5>Забронированные столы</h5>
          </NavLink>
        </Col>
        <Col>
          <NavLink
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}
            to={'/admin/orders'}>
            <h5>Заказы</h5>
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
