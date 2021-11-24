
type PropsType = {
  changeAbsent: (status:boolean) => void
}

const absentDelivery = (props:PropsType) => {
  return (
    <div className='info-block'>
      <div>
        <br/>
        <div style={{color: '#8d95a1', textAlign: 'center'}}>
          <b><i>Вы пока не добавили адрес доставки</i></b>
        </div>
        <br/>
        <button
          className='btn btn-outline-warning offset-md-4'
          onClick={()=>{
            props.changeAbsent(false)
          }}
        >
        Добавить адрес доставки
        </button>
      </div>
    </div>

  )
}

export default absentDelivery
