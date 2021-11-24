
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
            to={'/admin/dishes'}>
            <h5>Блюда</h5>
          </NavLink>
        </Col>
        <Col xs={'auto'}>
          <NavLink
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}
            to={'/admin/tables'}>
            <h5>Столы</h5>
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
