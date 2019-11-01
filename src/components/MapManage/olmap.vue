<template> 
 <div > 
  <div id="allmap" ref="allmap"></div> 
  <router-view></router-view> 
 </div> 
</template> 
<script> 
import "ol/ol.css"
import { Map, View } from "ol"
import Tile from "ol/layer/Tile"
import OSM from "ol/source/OSM"
import XYZ from "ol/source/XYZ"
import {transform} from 'ol/proj'
import {toLonLat} from 'ol/proj'
import addShip from "../../js/addShipLayer"
export default { 
 name: 'App', 
 data(){
     return{
         map: null,
        ship: null
     }
 },
 methods:{ 
  drawMap(){ 
        var _this = this;
        _this.map = new Map({
          target:"allmap",
          layers:[
              new Tile({
                  source: new XYZ({
                      url:'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
                  })
              }),
               new Tile({
                  source: new XYZ({
                      url:'http://www.google.cn/maps/vt?lyrs=h@189&gl=cn&x={x}&y={y}&z={z}'
                  })
              })
          ],
          view: new View({
             // projection: "EPSG:4326",
              center:transform([117,30],'EPSG:4326','EPSG:3857'),
              zoom:6
          })
      })
    },
    //鼠标经纬度
    mouseSite(){
        var _this = this;
        _this.map.on('pointermove',function(){
            console.log(transform(_this.map.getEventCoordinate(event),'EPSG:3857','EPSG:4326'));
      })
    }
},
    mounted(){ 
        this.drawMap();
        // this.mouseSite();
        this.ship = addShip(this.map);
    } 
 } 
</script> 
<style>
/*设置地图的宽高*/
#allmap{
 margin-bottom:10px; 
 height: 622px;
 width:165vh; 
 overflow: hidden;
 padding-top: 0px; 
} 
</style>