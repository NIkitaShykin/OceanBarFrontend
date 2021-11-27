/* eslint-disable require-jsdoc */
import axios from 'axios'
// export const baseURL = 'https://dry-forest-56016.herokuapp.com/'
export const baseURL = 'http://localhost:3001/api'

export const instance = axios.create({
  baseURL
})
// ------------------------------------------------------------

import {ChangeEvent, useRef} from 'react'
import {useState} from 'react'
import {Button} from 'react-bootstrap'


export default function FilesOperations(props:any) {
  const buttonRef=useRef<HTMLInputElement>(null)

  const [fileURI, setFile]=useState<any>()
  const [file64, setFileURL]=useState({})
  const [file, setFileData]=useState({})

  const upLoad=(e:ChangeEvent<HTMLInputElement>)=>{
    const newFile= e.target.files && e.target.files[0]
    const formData = new FormData()

    if (newFile) {
      setFile(newFile)
      setFileURL(window.URL.createObjectURL(newFile))
      // formData.append('myFile', newFile, newFile.name)
      formData.append('file', newFile)
      formData.append('name', 'Kasha')
      formData.append('category', 'Плато')
      setFileData(formData)
      // console.log(formData)
      // props.inputDishFile(formData)
    }
  }

  const send = () => {
    // const response = instance.post('/file', file)


    // const name= 'каша'
    // const category ='Плато'
    // console.log(file)
    // const response = instance.post('menu/image', {file, name, category})
    const response = instance.post('menu/image', file,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })


    // const response = instance.post('menu/image', fileData, {
    //   'headers': formData.getHeaders(),
    //   'Content-Length': formData.getLengthSync()
    // })

    console.log(response)
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
              загрузка изображене с диска <h4>&#8635;</h4>
            </Button>
          </div>
        </div>
      </div>
      <button onClick={()=>send()
      }>send</button>

      { fileURI ?<>
        <div className='form-sectionAdmin' style={{height: '100%'}}>
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
