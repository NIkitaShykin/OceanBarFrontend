import s from './Bankcard.module.scss'

const MyCreditCards = () => {
  return (
    <><div className={s.tips}>
      Payment card number: (4) VISA, (51 - 55) MasterCard, (36-38-39)
       DinersClub, (34-37) American Express, (65) Discover, (5019) dankort
    </div><div className={s.container}>
      <div className={s.col1}>
        <div className={s.card}>
          <div className={s.front}>
            <div className={s.type}>
              <img className={s.bankid} />
            </div>
            <span className={s.chip}></span>
            <span className={s.card_number}>&#x25CF; &#x25CF; &#x25CF;
             &#x25CF; &#x25CF;&#x25CF; &#x25CF; &#x25CF; &#x25CF; &#x25CF;
              &#x25CF; &#x25CF; &#x25CF; &#x25CF; &#x25CF; &#x25CF; </span>
            <div className={s.date}>
              <span className={s.date_value}>MM / YYYY</span></div>
            <span className={s.fullname}>FULL NAME</span>
          </div>
          <div className={s.back}>
            <div className={s.magnetic}></div>
            <div className={s.bar}></div>
            <span className={s.seccode}>&#x25CF;&#x25CF;&#x25CF;</span>
            <span className={s.chip}></span><span className='disclaimer'>
                This card is property of Random Bank of Random corporation.
              <br/>
              {/* </> */}
            </span>
          </div>
        </div>
      </div>
      <div className={s.col2}>
        <label>Card Number</label>
        <input className={s.number} type={s.text} ng-model={s.ncard}
          // maxlength='19' onkeypress='return event.charCode
          // >= 48 && event.charCode <= 57'
        />
        <label>Cardholder name</label>
        <input className={s.inputname} type={s.text} placeholder='' />
        <label>Expiry date</label>
        <input className={s.expire} type={s.text} placeholder='MM / YYYY' />
        <label>Security Number</label>
        <input className={s.ccv} type={s.text} placeholder='CVC'
        // className='3'
          // onkeypress='return event.charCode >= 48 && event.charCode <= 57'
        />
        {/* <button className={s.buy}>
          <i
           className={s.material-icons}
          >lock</i> Pay --.-- €</button> */}
      </div>
    </div></>
  )
}

export default MyCreditCards

