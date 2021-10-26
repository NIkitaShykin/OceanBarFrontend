import { API } from "../dal/Api";
import { Dispatch } from 'redux';

type ingrType = {name:string, isAdded:boolean}
type dishType = {
        "id": number,
        "name": string,
        "price": number,
        "weight": string,
        "calories": string,
        "imageURL": string,
        "ingredients": Array<ingrType>,
        "dishCategory": string
}

type initStateType = Array<dishType>
type actionType = { type: string; dishesData?: dishType[] }


const initialState: initStateType = [
    {
        "id": 1,
        "name": "ПЛАТО УСТРИЦ",
        "price": 50,
        "weight": "1000 гр",
        "calories": "1000 ккал",
        "imageURL": "blob:https://itechart-vs.atlassian.net/b64f8031-90c1-4ad9-a9a5-470ad4f1d2d6#media-blob-url=true&id=4adee541-05f9-45a2-b69d-d2478116dd1d&collection=contentId-2818049&contextId=2818049&mimeType=image%2Fpng&name=TM3vUYf2l5GfdF2cKJJ-ypShdJu3jwn9wMFPcBo2sJfZCspJ7I9YU07zHwkEebL4cTrbkW6Hlf7bGHkns3Pf-dPFGO-YH3eoxHaHBb5-kADeSoy9FD4CdkMQ0WlWt45VwbRdWP0%3Ds0&size=1368186&width=778&height=1384&alt=",
        "ingredients": [{ name: "соус", isAdded: true }, { name: "сметана", isAdded: true }, { name: "лук", isAdded: true }, { name: "чеснок", isAdded: true }],
        "dishCategory": "Плато"
    },
    {
        "id": 2,
        "name": "ПЛАТО КРАБЫ И МОЛЮСКИ",
        "price": 60,
        "weight": "1500 гр",
        "calories": "1000 ккал",
        "imageURL": "blob:https://itechart-vs.atlassian.net/c1a85865-1649-4060-8b96-0bf37de1e148#media-blob-url=true&id=0495b1d7-1ad9-4afd-bd1d-a2660547451b&collection=contentId-2818049&contextId=2818049&mimeType=image%2Fjpeg&name=Yt0cWs5SLWCMe_178U6hlpG0JmjaInbZVWLtAzlPT2yjpNNWlHfj3FSFKx-cCe2TXDKPUCffy8anNfs9KXDQ_sI8a3kvG7DkaUMmYxyJwjqw0rZCygA0199zT66F3gUNCqxuk4c%3Ds0&size=126176&width=750&height=938&alt=",
        "ingredients": [{ name: "соус", isAdded: true }, { name: "сметана", isAdded: true }, { name: "лук", isAdded: true }, { name: "чеснок", isAdded: true }],
        "dishCategory": "Плато"
    },
    {
        "id": 3,
        "name": "ГОРЯЧЕЕ ПЛАТО",
        "price": 70,
        "weight": "1000 гр",
        "calories": "900 ккал",
        "imageURL": "blob:https://itechart-vs.atlassian.net/69a2b7b5-cd08-48ea-b074-bc336254d3c4#media-blob-url=true&id=cdfdcab2-ffdc-4792-af2f-17d4f3291c85&collection=contentId-2818049&contextId=2818049&mimeType=image%2Fjpeg&name=C_QF38PYwa19SGfrP1BfwAgDhOATWNLtnDq96lN5MAHd7uKevnpq8GacJncbWEN1Kl9ghkXK8DvDqhylTQ2YO0SOI8rAsOCkAu_jty7jNhRfZlCKQXI0vyM1zRnVbw%3Ds0&size=203896&width=882&height=1080&alt=",
        "ingredients": [{ name: "соус", isAdded: true }, { name: "сметана", isAdded: true }, { name: "лук", isAdded: true }, { name: "чеснок", isAdded: true }],
        "dishCategory": "Плато"
    },
    {
        "id": 4,
        "name": "БУЙАБЕС",
        "price": 20,
        "weight": "600 гр",
        "calories": "300 ккал",
        "imageURL": "blob:https://itechart-vs.atlassian.net/db1444f8-46c5-4f74-8dcb-f284e99c6d2a#media-blob-url=true&id=f90ae2c3-320c-4344-a0bd-831b296fbfcb&collection=contentId-2818049&contextId=2818049&mimeType=image%2Fjpeg&name=Erd5lac15pcLuMZIoPWeO62-da9EXqNk-toryrADdOLTEer2Zx4a-kfVGWmyusvSfzA3-W3W7nAnDFR-6aoTBBxryQYVsYRh6P4aFhN4WBprDD1NdLeLev_FiI8mww%3Ds0&size=166330&width=936&height=1080&alt=",
        "ingredients": [{ name: "соус", isAdded: true }, { name: "сметана", isAdded: true }, { name: "лук", isAdded: true }, { name: "чеснок", isAdded: true }],
        "dishCategory": "Супы"
    },
    {
        "id": 5,
        "name": "СУП БИСК БУЛЬОНЕ ИЗ ЛОБСТЕРА",
        "price": 30,
        "weight": "500 гр",
        "calories": "250 ккал",
        "imageURL": "blob:https://itechart-vs.atlassian.net/a8a60e66-c04d-4312-aae1-d1486d258cd3#media-blob-url=true&id=a87134f2-f75f-4a2d-8073-bd19bdb0918f&collection=contentId-2818049&contextId=2818049&mimeType=image%2Fjpeg&name=ERCasMNJlRycwHj5XHi3RFF3y_SR825RS4tUv7cxo1qDZHjpl7RhGufpr15Eq5H6SYqv2d7lH56J_n6nOR62scJDVd4cEoP8waJKH5tqz9WyCev_ZnZnOKa0VytZFg%3Ds0&size=56879&width=510&height=510&alt=",
        "ingredients": [{ name: "соус", isAdded: true }, { name: "сметана", isAdded: true }, { name: "лук", isAdded: true }, { name: "чеснок", isAdded: true }],
        "dishCategory": "Супы"
    },
    {
        "id": 6,
        "name": "ТАЙСКИЙ САЛАТ С ТИГРОВЫМИ КРЕВЕТКАМИ И БЕЙБИ-КАЛЬМАРАМИ",
        "price": 35,
        "weight": "450 гр",
        "calories": "400 ккал",
        "imageURL": "blob:https://itechart-vs.atlassian.net/5ccd8ae5-2273-4f13-ae36-e079565015a0#media-blob-url=true&id=e00a0f9c-65d8-4ea6-a99b-7348bb29269e&collection=contentId-2818049&contextId=2818049&mimeType=image%2Fjpeg&name=qzMGPT0i8rX1nCa1XepZCoPx5CIcnZ9jvDhD38os6tUAD4YqsH_W6gWLN-lYIz4BicTiG1fQkM8Q9U_MLKc5MRJDwfvcZzXw1DE0ZJVDSmJ1UmGP38ETzA16tuDw3Q%3Ds0&size=137047&width=862&height=1080&alt=",
        "ingredients": [{ name: "соус", isAdded: true }, { name: "сметана", isAdded: true }, { name: "лук", isAdded: true }, { name: "чеснок", isAdded: true }],
        "dishCategory": "Салаты"
    }
]

export type dishesDataType = {}

// const initialState: dishesDataType = {};

export const dishesReducer = (state = initialState, action: actionType): dishType[] => {

    switch (action.type) {
        case "addDishes": {
        
            //@ts-ignore
            // console.log(action.dishesData);
            //@ts-ignore
            return {...state}
        }


        default:
            return {...state};
    }

};

type addDishesACType = {};

export const addDishesAC = (dishesData: initStateType): any => { return { type: "addDishes", dishesData } };


// thunks-------------------------------------------------------------------

export const getDishesFromApiTC = () => {

    return (dispatch: Dispatch) => {
         API.getAllDish()
            .then((res) => {
                // @ts-ignore
                // console.log(res.data.data.dishes);
            //   dispatch(addDishesAC(res.data.data.dishes))
            })
            .catch((rej) => {
                console.log(rej)
            })
    }
}
