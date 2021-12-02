import Tabs from 'react-bootstrap/Tabs'
import {Tab} from 'react-bootstrap'

import CurrentOrders from './currentOrders'
import CompletedOrders from './completedOrders'

import '../../pages/profilePage/profile.scss'


const orderHistory = () => {
  return (
    <>
      <Tabs
        defaultActiveKey='current'
        id='uncontrolled-tab'
        className='mb-3 fs'>
        <Tab
          eventKey='current'
          title='Текущие заказы'
        >
          <CurrentOrders />
        </Tab>
        <Tab
          eventKey='history'
          title='История заказов'
          className='link-color'
        >
          <CompletedOrders />
        </Tab>
      </Tabs>
    </>
  )
}

export default orderHistory
