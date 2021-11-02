import React from 'react'
import {Button, Dropdown, Form} from 'react-bootstrap'
import './BookATable.scss'

const BookATable = () => {
    return (
        <div className='book-a-table'>
            <h2 className='bookTable'>Забронируйте стол</h2>
            <div className='order-form'>
                <Form>
                    <Form.Control className={'form-item'} size='sm' type='text' placeholder='Имя Фамилия'/>
                    <br/>
                    <Form.Control className={'form-item'} size='sm' type='tel' placeholder='Номер телефона'/>
                </Form>
            </div>
            <br/>
            <div className='time-date'>
                    <Dropdown className={'dropdown-cont' } >
                        <Dropdown.Toggle  style={{backgroundColor:"white",color:"black",border:"1px solid #989898FF",width:"200px"}} variant="info" className="dropdown-basic">
                            Дата
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle style={{backgroundColor:"white",color:"black",border:"1px solid #989898FF",width:"200px"}} variant="info" className="dropdown-basic">
                            Время
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

            </div>
            <div className={'order-button-container'}>
                <button className={'order-button'}>
                    <span className='menu-text-main-page'>Забронировать</span>
                </button>
            </div>

        </div>
    )
}
export default BookATable
