<template> 

 <div > 
   <!--startprint-->
  <div id="allmap" ref="allmap"></div>
   <!--endprint-->
  <form>
      <label>cluster distance</label>
      <input id="distance" type="range" min="0" max="200" step="1" value="50"/>
    </form> 
  <!-- 船信息显示 start-->
  <div id="popup" class="ol-popup">
      <a href="#" id="popup-closer" class="ol-popup-closer"></a>
      <div id="popup-content"></div>
 </div>
 <!-- 船信息显示 end-->
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
import showShipTrace from '../../js/showShipTrace'
import addShipCluster from "../../js/addShipCluster"
import addFishingZone from "../../js/addFishingZone"


export default { 
 name: 'App',
 data(){
     return{
         val:{
            map: null,
            clusterSource:null
         },
     }
 },
 methods:{ 
  drawMap(){ 
        var _this = this;    
        _this.val.map = new Map({
          target:"allmap",
          layers:[
              new Tile({
                  source: new XYZ({
                      crossOrigin:'anonymous',
                      url:'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'                     
                  })
              }),
               new Tile({
                  source: new XYZ({
                      crossOrigin:'anonymous',
                      url:'http://www.google.cn/maps/vt?lyrs=h@189&gl=cn&x={x}&y={y}&z={z}'       
                  }),
              })
          ],
          view: new View({
             // projection: "EPSG:4326",
              center:transform([117,30],'EPSG:4326','EPSG:3857'),
              zoom:4,
              maxZoom:19,
              minZoom:0
          })
      })
    },
    //鼠标经纬度
    mouseSite(){
      var _this = this;
      _this.map.on('pointermove',function(){
          console.log(transform(_this.map.getEventCoordinate(event),'EPSG:3857','EPSG:4326'));
      })
    },
    //添加大鱼区
    addFishingZone(){

    }
},
    mounted(){ 
        this.drawMap();
        // this.mouseSite();
        addShip(this.val.map);
        showShipTrace(this.val.map);       
        this.val.clusterSource = addShipCluster(this.val.map); 
       //this.val.clusterSource = null   
       this.$emit('getMap',this.val);
       addFishingZone(this.val.map);
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
    /**船信息图框样式 start*/
      .ol-popup {
        position: absolute;
        background-color: white;
        -webkit-filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
        filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #cccccc;
        bottom: 12px;
        left: -50px;
        min-width: 200px;
      }
      .ol-popup:after, .ol-popup:before {
        top: 100%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
      }
      .ol-popup:after {
        border-top-color: white;
        border-width: 10px;
        left: 48px;
        margin-left: -10px;
      }
      .ol-popup:before {
        border-top-color: #cccccc;
        border-width: 11px;
        left: 48px;
        margin-left: -11px;
      }
      .ol-popup-closer {
        text-decoration: none;
        position: absolute;
        top: 2px;
        right: 8px;
      }
      .ol-popup-closer:after {
        content: "✖";
      }
      #popup-content {
        line-height: 1px;
        font-size: 14px
      }
     /**船信息图框样式 end*/


    .ol-tooltip {
      position: relative;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      color: white;
      padding: 4px 8px;
      opacity: 0.7;
      white-space: nowrap;
      font-size: 12px;
    }
    .ol-tooltip-measure {
      opacity: 1;
      font-weight: bold;
    }
    .ol-tooltip-static {
      background-color: #ffcc33;
      color: black;
      border: 1px solid white;
    }
    .ol-tooltip-measure:before,
    .ol-tooltip-static:before {
      border-top: 6px solid rgba(0, 0, 0, 0.5);
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
      content: "";
      position: absolute;
      bottom: -6px;
      margin-left: -7px;
      left: 50%;
    }
    .ol-tooltip-static:before {
      border-top-color: #ffcc33;
    }
</style>