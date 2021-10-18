import React from 'react'
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps'

interface IMapState {
  center: number[],
  zoom: number
}

interface ICustomMapProps {
  mapState: IMapState
};

const CustomMap: React.FunctionComponent<ICustomMapProps> = (props) => {
  return (
    <div className='custom-map'>
      <YMaps>
        <Map state={props.mapState} width='100%'>
          <Placemark
            geometry={[53.901573, 27.549749]}
            properties={{
              hintContent: 'ул. Революционная, 17',
              iconContent: 'Ocean bar'
            }}
            modules={['geoObject.addon.hint']}
            options={{
              preset: 'islands#redStretchyIcon',
            }}
          />
          <ZoomControl />
        </Map>
      </YMaps>
    </div>
  )
}

export default CustomMap
