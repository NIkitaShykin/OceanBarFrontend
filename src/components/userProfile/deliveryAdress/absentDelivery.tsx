
type PropsType = {
  changeStatus: (status:boolean) => void
}

const absentDelivery = (props:PropsType) => {
  return (
    <div className='info-block'>
      <div>
        <br/>
        <div style={{color: '#8d95a1', textAlign: 'center'}}>
          <b><i>Вы пока не добавили адресс доставки</i></b>
        </div>
        <br/>
        <button
          className='btn btn-outline-warning offset-md-4'
          onClick={()=>{
            props.changeStatus(false)
          }}
        >
        Добавить адрес доставки
        </button>
        {/* <div
          style={{color: 'black',
            width: '150px',
            fontSize: '15px',
            textAlign: 'center',
            margin: 'auto',
            cursor: 'pointer',
            border: '3px solid #ff9e05',
            borderRadius: '10px'
          }}
          onClick={()=>{
            props.changeStatus(false)
          }}>
          Добавить адрес доставки
        </div> */}
      </div>
    </div>

  )
}

export default absentDelivery
