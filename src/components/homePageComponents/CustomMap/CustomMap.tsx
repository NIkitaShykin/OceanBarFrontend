import React from 'react'
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps'

// interface ICustomMapProps extends CommonProps {
//   mapState: MapState
// };

const CustomMap: React.FunctionComponent<any> = () => {
  const mapState = {center: [53.901573, 27.549749], zoom: 16}

  return (
    <div className='custom-map'>
      <YMaps>
        <Map state={mapState} width='100%'>
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
