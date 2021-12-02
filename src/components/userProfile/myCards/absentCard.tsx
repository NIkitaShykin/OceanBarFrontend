type PropsType = {
  changeAbsent: (status:boolean) => void
}

const absentDelivery = (props:PropsType) => {
  return (
    <div className='info-block'>
      <div style={{color: '#8d95a1', textAlign: 'center',
        display: 'flex', flexDirection: 'column'}}>
        <b><i>У вас не привязана ни одна карта!</i></b>
        <b><i>Добавить карту?</i></b>
        <br/>
        <button style={{width: '150px'}}
          className='btn btn-outline-warning offset-md-9'
          onClick={()=>{
            props.changeAbsent(false)
          }}
        >
        Добавить карту
        </button>
      </div>

    </div>

  )
}

export default absentDelivery
