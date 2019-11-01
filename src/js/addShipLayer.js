import VectorLayer from 'ol/layer/Vector'
import {Vector} from 'ol/source';
import Icon from 'ol/style/Icon'
import Style from 'ol/style/Style'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import {fromLonLat} from 'ol/proj';

export default function addShip(map){
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
    
   for (var i = 0; i < 4; i++){
		var imgFeature = new Feature({
            type: 'icon',
			geometry: new Point(fromLonLat([shipX[i],shipY[i]]))
		});
		imgFeature.setStyle(style);
        shipLayer.getSource().addFeature(imgFeature);
    }
    map.addLayer(shipLayer)
}

