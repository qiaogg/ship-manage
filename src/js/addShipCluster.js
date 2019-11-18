import 'ol/ol.css';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Vector as VectorLayer} from 'ol/layer';
import {Cluster,Vector as VectorSource} from 'ol/source'
import {Circle as CircleStyle, Fill, Stroke, Style, Text} from 'ol/style';
import {fromLonLat,transform} from 'ol/proj'
import Icon from 'ol/style/Icon'
import areaSearch from './areaSearch'


export default function addShipCluster(map){
    var distance = document.getElementById('distance')

    var count = 3000;
    var features = new Array(count)
    var e = 19500000
    for (var i = 0; i < count; ++i) {
      var coordinates = [2 * e * Math.random() - e,  2 * e * Math.random() - e]
    //  console.log(transform(coordinates,"EPSG:3857","EPSG:4326"))
   // console.log(coordinates)
      features[i] = new Feature(new Point(coordinates))
    }
    
    var source = new VectorSource({
      features: features,
    });
    
    var clusterSource = new Cluster({
      distance: parseInt(distance.value, 10),
      source: source
    });
    
    var styleCache = {};
    var clusters = new VectorLayer({
      source: clusterSource,
      style: function(feature) {
        var size = feature.get('features').length;
        var style = styleCache[size];
        if (!style) {
          style = new Style({
            image: new Icon({
                src:'../../static/images/ship_normal.png',
                rotation: 1
             }),
            //   fill: new Fill({
            //     color: '#3399CC'
            //   })
            // }),
            text: new Text({
              text: size.toString(),
              fill: new Fill({
                color: '#000'
              })
            })
          });
          styleCache[size] = style;
        }
        return style;
      }
    });
    
    map.addLayer(clusters)

    map.on('moveend',function(){
        var zoom = map.getView().getZoom()
        if (zoom > 5 && zoom < 11){
            clusters.setVisible(true)
        }else{
            clusters.setVisible(false)
        }
    })
    //  console.log(clusterSource.getSource().getFeatures())//获取集群里的features
    // var extent = [0,0,500000,500000]
    // console.log(clusterSource.getSource().getFeaturesInExtent(extent))
    //console.log(extent)
    //this.$emit('getMap',_this.map)
    
    distance.addEventListener('input', function() {
      clusterSource.setDistance(parseInt(distance.value, 10));
    });

    return clusterSource
}
