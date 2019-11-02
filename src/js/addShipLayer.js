import VectorLayer from 'ol/layer/Vector'
import {Vector} from 'ol/source';
import Icon from 'ol/style/Icon'
import Style from 'ol/style/Style'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import {fromLonLat} from 'ol/proj'
import Overlay from 'ol/Overlay'
import {toStringHDMS} from 'ol/coordinate'
import {transform} from 'ol/proj'

export default function addShip(map,shipMsgDiv){
    var coordinate = null
    var shipLayer = new VectorLayer({
        source: new Vector()
    })

    var shipX = [116.3,123.11,123.9,124]
    var shipY = [39.9,30,31,31.5]

    var style = new Style({
        image: new Icon({
           src:'../../static/images/ship.png'
        })
    })
    
    map.on('pointermove',function(event){
        coordinate = event.coordinate
        map.forEachFeatureAtPixel(event.pixel, function(feature){
            // 为移动到的feature发送自定义的mousemove消息
            feature.dispatchEvent({type: 'mousemove', event: event});
        });
    })
    


    var contaioner = document.getElementById(shipMsgDiv.container)
    var content = document.getElementById(shipMsgDiv.content)
    var closer = document.getElementById(shipMsgDiv.closer)
    // 创建一个overlay, 绑定html元素container
    var overlay = new Overlay({
        element: contaioner,
        autoPan: true,
        autoPanAnimation: {
          duration: 250
        }
    })

    closer.onclick = function() {
        overlay.setPosition(undefined);
        closer.blur();
        return false;
      };


   for (var i = 0; i < 4; i++){
		var imgFeature = new Feature({
            type: 'icon',
			geometry: new Point(fromLonLat([shipX[i],shipY[i]]))
        });
        imgFeature.on('mousemove',function(evt){
            console.log(coordinate)
            var hdms = toStringHDMS(transform(coordinate, 'EPSG:3857', 'EPSG:4326'))
            // var hdms = transform(coordinate, 'EPSG:3857', 'EPSG:4326')
             content.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>'
             // 设置overlay的位置，从而显示在鼠标点击处
             overlay.setPosition(coordinate)
             map.addOverlay(overlay)
        })
		imgFeature.setStyle(style);
        shipLayer.getSource().addFeature(imgFeature);
    }
    map.addLayer(shipLayer)
    
   
    
}

