import BanksCard from './BankCards'

const MyCreditCards = () => {
  return (
    <div className='profile-block ml-md-auto'>
      <h2>
        Мои карты
      </h2>
      <div className='info-block'>
        <div className='mycard'>Visa</div>
      </div>
      <BanksCard/>
      {/* <iframe src='https://demo.open-processing.ru/form/' style={{width: '100%', height: '800px'}}></iframe> */}

      <button className='btn btn-outline-warning offset-md-10'>
        Изменить
      </button>
    </div>
  )
}

export default MyCreditCards

