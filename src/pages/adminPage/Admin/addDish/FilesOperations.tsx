/* eslint-disable require-jsdoc */
import axios from 'axios'
import Cookies from 'js-cookie'

import {url as baseURL} from '../../../../api/index'
export const instance = axios.create({
  baseURL
})

import {ChangeEvent, useRef} from 'react'
import {useState} from 'react'
import {Button} from 'react-bootstrap'


export default function FilesOperations(props:any) {
  const buttonRef=useRef<HTMLInputElement>(null)

  const formData = new FormData()
  formData.append('name', `${props.dishName}`)
  formData.append('category', `${props.dishCategory}`)

  const [fileURI, setFile]=useState<any>()
  const [file64, setFileURL]=useState({})
  const [file, setFileData]=useState({})


  const upLoad=(e:ChangeEvent<HTMLInputElement>)=>{
    const newFile= e.target.files && e.target.files[0]

    if (newFile) {
      setFile(newFile)
      setFileURL(window.URL.createObjectURL(newFile))
      formData.append('file', newFile)
      setFileData(formData)
    }
  }

  const sendImgDeplUrl=(ImgDeplUrl: any)=>{
    props.inputDishImage(ImgDeplUrl)
  }


  const send = () => {
    const token = Cookies.get('token')
    instance.post('menu/image', file,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      }).then((res: any)=>sendImgDeplUrl(res.data.url)
    )
  }

  const returnFileSize=(size:number)=>{
    if (size<1024) {
      return size + 'bytes'
    } else if (size>1024 && size < 1048576) {
      return (size/1024).toFixed(2) + 'Kb'
    } else if (size > 1048576) {
      return (size/1048576).toFixed(2) + 'Mb'
    }
  }


  return (
    <div>
      <div className='form-sectionAdmin'>
        <div className='form-adminField'>
          <div className='section-header'>
            <span>Фотография блюда</span>
          </div>
          <div>
            <Button
              onClick={() => buttonRef && buttonRef.current &&
                          buttonRef.current.click() }
              style={{
                width: '250px',
                color: 'gray',
                display: 'flex',
                alignItems: 'center',
                height: '30px',
                lineHeight: '30px',
                justifyContent: 'space-around',
                marginTop: '10px'
              }}
              variant='outline-warning'
            >
              загрузка с диска <h4>&#8635;</h4>
            </Button>
          </div>
        </div>
      </div>

      { fileURI ?<>
        <div className='form-sectionAdmin' style={{height: '220px'}}>
          <div className='form-adminField'>
            <div className='section-header'>
              <span> Миниатюра изображения</span>
            </div>
            <div
              style={{
                height: '200px',
                width: '250px',
                backgroundImage: `url(${file64})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
            </div>
          </div>
        </div>
      </>:null}

      { fileURI &&
      <div style={{display: 'flex', flexDirection: 'column',
        marginTop: '-70px',
        textAlign: 'start',
        marginLeft: '55px'}}>
        <div><i>size: {fileURI && returnFileSize(fileURI.size)}</i></div>
        <div><i>type: {fileURI && fileURI.type}</i></div>
      </div>
      }

      { fileURI ?<>
        <div className='form-sectionAdmin' /* style={{height: '0px'}} */>
          <div className='form-adminField'>
            <div className='section-header'>
              {/* <span>Сохранить фото</span> */}
            </div>
            <div>
              <Button
                onClick={() => send() }
                style={{
                  width: '250px',
                  background: '#FFFAFA',
                  color: 'gray',
                  display: 'flex',
                  alignItems: 'center',
                  height: '30px',
                  lineHeight: '30px',
                  justifyContent: 'space-around',
                  fontSize: '12px',
                  marginTop: '10px'
                }}
                variant='outline-warning'
              >
              загрузить изображене в облако <h5>&#8593;</h5>
              </Button>
            </div>
          </div>
        </div></>:null}

      <div>
        <input type='file'
          ref={buttonRef}
          accept='.jpg,.jpeg,.png'
          onChange={upLoad}
          style={{display: 'none'}}
        />
      </div>
    </div>

  )
}
