import Vector from "ol/layer/Vector"
import {Style, Icon}  from "ol/style"
import Feature from "ol/Feature"
import Point from "ol/geom/Point"

export default function addShip(){
   // alert();
    var shipLayer = new Vector({
        source: new Vector()
    });

    var shipX = [116.3,123.11,123.9,124];
    var shipY = [39.9,30,31,31.5];

    var style = new Style({
        image: new Icon({
            src: "./assets/ship.png"
        })
    });
    
   for (var i = 0; i < 4; i++){
		var imgFeature = new Feature({
			geometry: new Point([shipX[i],shipY[i]])
		});
		imgFeature.setStyle(style);
        // shipLayer.getSource().addFeature(imgFeature);
        var s = shipLayer.getSource();
        s.addFeature(imgFeature);
    };
}

