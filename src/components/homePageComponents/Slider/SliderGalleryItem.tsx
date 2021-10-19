
// import data from '../../../pages/Menu/DB/foodData'
// import {useState} from 'react'


type ImgData = any

function SliderGallertItem(props: ImgData) {

  const imgWidth = "300px"
  const imgPadding = "10px"

  return (
    <div style={{
      display: "flex", flexWrap: "wrap",
      justifyContent: "center"
    }}>
     <img style={{ width: imgWidth, padding: imgPadding }}
        className="d-block"
        src={props.imgData[0].image}
        alt="Second slide"
      />
      <img style={{ width: imgWidth, padding: imgPadding }}
        className="d-block"
        src={props.imgData[1].image}
        alt="Second slide"
      />
      <img style={{ width: imgWidth, padding: imgPadding }}
        className="d-block"
        src={props.imgData[2].image}
        alt="Second slide"
      />
    </div>
  );
}

export default SliderGallertItem