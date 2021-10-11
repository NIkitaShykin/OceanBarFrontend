import React from 'react';
import foodData from "../DB/foodData";
// import 'bootstrap/dist/css/bootstrap.min.css';
import DishIngridients from "./DishIngridients";
import { Button, Col, Stack, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";


function Dish() {

  const token = useParams<{ token: string }>()

  //@ts-ignore
  const nesseryObject = foodData[0].find(el => el.id == token.token)

  return (

    <div className="row my-3">

      <div />
      <div className="col-md-6 col-sm-12">
        <img className="w-100" src={nesseryObject?.image} />
      </div>
      <div className="col-md-6 col-sm-12 text-center">
        <h2>{nesseryObject?.name}</h2>

        <div className="row my-3">
          <div className="col-md-6 col-sm-12">
            <h3>Состав</h3>
            <DishIngridients ingredients={nesseryObject?.ingredients} />
          </div>
          <div className="col-md-6 col-sm-12">
            <Button onClick={() => console.log("изменить состав")}
              variant="outline-secondary" size="sm">
              изменить состав
            </Button>
          </div>
        </div>

        <h4>Вес: {nesseryObject?.weight}</h4>
        <h4>Стоимость: {nesseryObject?.prise}</h4>
        <Button onClick={() => console.log("заказать handler")}
          variant="outline-secondary" size="sm">
          Заказать
        </Button>
      </div>

    </div>


  )
}

export default Dish;
