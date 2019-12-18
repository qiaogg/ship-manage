import Overlay from 'ol/Overlay'
import Icon from 'ol/style/Icon'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Point, LineString, Polygon } from 'ol/geom'
import Feature from 'ol/Feature'
import { Style, Stroke, Circle, Fill } from 'ol/style'
import { toStringHDMS } from 'ol/coordinate'
import { transform } from 'ol/proj'

export default function showShipTrace(map) {
  var source = new VectorSource();

  var coordinate = [//Polygon 多边形,Point 点,LineString 线
    [124, 28.5],

    [124.1, 28.4],

    [124.2, 28.3],

    [124.3, 28.2],

    [124.4, 28.1],
  ]
  function tranPoint(coordinate) {
    var len = coordinate.length
    for (var i = 0; i < len; i++) {
      coordinate[i] = transform(coordinate[i], 'EPSG:4326', 'EPSG:3857')
    }
    return coordinate
  }

  var shipSites = tranPoint(coordinate)

  var LineStringFeature = new Feature(
    new LineString(shipSites)
  );//绘制多边形的数据


  source.addFeature(LineStringFeature)

  var vectorLayer = new VectorLayer({
    source: source,
    style: new Style({
      stroke: new Stroke({
        color: '#f00',
        width: 4
      }),
      // image: new Circle({
      //   radius: 2,
      //   fill: new Fill({
      //     color: '#f00'
      //   })
      // })
    })
  });


  for (var i = 0; i < shipSites.length; i++) {
    var shipIcon = new Icon({
      src: '../../static/images/ship_normal.png',
    })
    var style = new Style({
      image: shipIcon,
    })
    var shipFeature = new Feature({
      geometry: new Point(shipSites[i])
    })
    if (i % 2 == 1) {
      shipIcon.setRotation(0.5)
    } else {
      shipIcon.setRotation(2)
    }
    shipFeature.setStyle(style);
    //shipFeature.setId(i)
    vectorLayer.getSource().addFeature(shipFeature)
  }

  map.addLayer(vectorLayer)
}