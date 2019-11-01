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
import addShip from "../../js/addShipLayer"
export default { 
 name: 'App', 
 methods:{ 
  map(){ 
     // var mapcontainer = this.$refs.allmap;
      this.allmap = new Map({
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
              projection: "EPSG:4326",
              center:[114,28],
              zoom:6
          })
      })}
 }, 
    mounted(){ 
    //调用上面个的函数
        this.map();
        //addShip();
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