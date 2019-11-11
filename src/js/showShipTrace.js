import Overlay from 'ol/Overlay'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import {Point,LineString,Polygon} from 'ol/geom'
import Feature from 'ol/Feature'
import {Style,Stroke,Circle,Fill} from 'ol/style'
import {toStringHDMS} from 'ol/coordinate'
import {transform} from 'ol/proj'

export default function showShipTrace(map) {
  var source = new VectorSource();

var coordinate = [//Polygon 多边形,Point 点,LineString 线
  [120, 30],

  [122, 30],

  [121, 31],

  [120, 29],

  [122, 29],
]
function tranPoint(coordinate){
   var len = coordinate.length
   for (var i = 0; i < len; i++){
      coordinate[i] = transform(coordinate[i],'EPSG:4326','EPSG:3857')
   }
   return coordinate
}
var c = tranPoint(coordinate)


var LineStringFeature = new Feature(
  new LineString(c)
);//绘制多边形的数据

      
source.addFeature(LineStringFeature)
var vectorLayer = new VectorLayer({
  source: source,
  style: new Style({
      stroke: new Stroke({
          color: '#f00',
          width: 4
      }),
      image: new Circle({
          radius: 2,
          fill: new Fill({
              color: '#f00'
          })
      })
  })
});
map.addLayer(vectorLayer)

}