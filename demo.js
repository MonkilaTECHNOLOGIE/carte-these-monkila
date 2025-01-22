
function showGeoJSONData(map) {

  var reader1 = new H.data.geojson.Reader('data/BRANCHE.geojson', {
    style: function (mapObject) {
      if (mapObject instanceof H.map.Polygon) {
        mapObject.setStyle({ fillColor: 'red', strokeColor: 'red', lineWidth: 3, });
      }
    }
  });

  var reader2 = new H.data.geojson.Reader('data/DEPART.geojson', {
    style: function (mapObject) {
      if (mapObject instanceof H.map.Polygon) {
        mapObject.setStyle({ fillColor: 'rgba(123, 123, 123, 0.5)', strokeColor: 'rgba(255, 0, 255, 0.2)', lineWidth: 3, });
      }
    }
  });

  var reader3 = new H.data.geojson.Reader('data/POCHE.geojson', {
    style: function (mapObject) {
      if (mapObject instanceof H.map.Polygon) {
        mapObject.setStyle({ fillColor: 'rgba(123, 123, 123, 0.5)', strokeColor: 'rgba(255, 0, 255, 0.2)', lineWidth: 3, });
      }
    }
  });

  var reader4 = new H.data.geojson.Reader('data/CABINE.geojson', {
    style: function (mapObject) {
      if (mapObject instanceof H.map.Polygon) {
        mapObject.setStyle({ fillColor: 'rgba(123, 123, 123, 0.5)', strokeColor: 'rgba(255, 0, 255, 0.2)', lineWidth: 3, });
      }
    }
  });

  // Start parsing the file
  reader1.parse();
  reader2.parse();
  reader3.parse();
  reader4.parse();
  
  // Add layer which shows GeoJSON data on the map
  map.addLayer(reader1.getLayer());
  map.addLayer(reader2.getLayer());
  map.addLayer(reader3.getLayer());
  map.addLayer(reader4.getLayer());

}

function addMarkerToGroup(group, coordinate, html) {

  var marker = new H.map.Marker(coordinate);
  // add custom data to the marker
  marker.setData(html);
  group.addObject(marker);
}

function addInfoBubble(map) {


  var group = new H.map.Group();

  map.addObject(group);

  group.addEventListener('tap', function (evt) {

    var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
      content: evt.target.getData()
    });

    ui.addBubble(bubble);
  }, false);

  //BRANCHE

  addMarkerToGroup(group, { lat: -4.510754443722032, lng: 15.22259407296357 },
    '<div><a > BRANCHE D1\/B1\/01</a></div>' +
    '<div>{ "Name": "D1\/B1\/01", "description": "Angle(degré): 00.0\nPorte Moyenne (m):30\n" }, "geometry": { "type": "Point", "coordinates": [ 15.22259407296357, -4.510754443722032 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510483029408217, lng: 15.222639062393579 },
    '<div><a  > BRANCHE D1\/B1\/02</a></div>' +
    '<div>{ "Name": "D1\/B1\/02", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 30\n" }, "geometry": { "type": "Point", "coordinates": [ 15.222639062393579, -4.510483029408217 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510211626150063, lng: 15.222647994163729 },
    '<div><a  > BRANCHE D1\/B1\/03</a></div>' +
    '<div>{ "Name": "D1\/B1\/03", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 31\n" }, "geometry": { "type": "Point", "coordinates": [ 15.222647994163729, -4.510211626150063 ] }</div>');
  addMarkerToGroup(group, { lat: -4.509931178971256, lng: 15.222647908773279 },
    '<div><a  > BRANCHE D1\/B1\/04</a></div>' +
    '<div>{ "Name": "D1\/B1\/04", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 30" }, "geometry": { "type": "Point", "coordinates": [ 15.222647908773279, -4.509931178971256 ] }</div>');
  addMarkerToGroup(group, { lat: -4.509388397318937, lng: 15.222584642732739 },
    '<div><a  > BRANCHE D1\/B1\/05</a></div>' +
    '<div>{ "Name": "D1\/B1\/05", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 30" }, "geometry": { "type": "Point", "coordinates": [ 15.222584642732739, -4.509388397318937 ] }</div>');
  addMarkerToGroup(group, { lat: -3.474682423015218, lng: 54.333462673513743 },
    '<div><a  > BRANCHE D1\/B1\/06</a></div>' +
    '<div>{ "Name": "D1\/B1\/06", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 34" }, "geometry": { "type": "Point", "coordinates": [ 54.333462673513743, -3.474682423015218 ] }</div>');
  addMarkerToGroup(group, { lat: -4.509089870579269, lng: 15.22253947990564 },
    '<div><a > BRANCHE D1\/B1\/07</a></div>' +
    '<div>"Name": "D1\/B1\/07", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 36" }, "geometry": { "type": "Point", "coordinates": [ 15.22253947990564, -4.509089870579269 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510591727695315, lng: 15.222188374816939 },
    '<div><a > BRANCHE D1\/B2\/01</a></div>' +
    '<div>{ "Name": "D1\/B2\/01", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 36" }, "geometry": { "type": "Point", "coordinates": [ 15.222188374816939, -4.510591727695315 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510618966997582, lng: 15.221863864187929 },
    '<div><a  > BRANCHE D1\/B2\/02</a></div>' +
    '<div>{ "Name": "D1\/B2\/02", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 36" }, "geometry": { "type": "Point", "coordinates": [ 15.221863864187929, -4.510618966997582 ] }</div>');
  addMarkerToGroup(group, { lat: -4.51063715947223, lng: 15.22153935078652 },
    '<div><a  > BRANCHE D1\/B2\/03</a></div>' +
    '<div>{ "Name": "D1\/B2\/03", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 36" }, "geometry": { "type": "Point", "coordinates": [ 15.22153935078652, -4.51063715947223 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510655351802601, lng: 15.22121483736186 },
    '<div><a  > BRANCHE D1\/B2\/04</a></div>' +
    '<div>{ "Name": "D1\/B2\/04", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 35" }, "geometry": { "type": "Point", "coordinates": [ 15.22121483736186, -4.510655351802601 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510637359995054, lng: 15.220881298567249 },
    '<div><a  > BRANCHE D1\/B2\/05</a></div>' +
    '<div>{ "Name": "D1\/B2\/05", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 30\nMise à la terre: OK" }, "geometry": { "type": "Point", "coordinates": [ 15.220881298567249, -4.510637359995054 ] }</div>');
  addMarkerToGroup(group, { lat: -4.50995836323577, lng: 15.222503686560559 },
    '<div><a  > BRANCHE D1\/B3\/01</a></div>' +
    '<div>{ "Name": "D1\/B3\/01", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 29" }, "geometry": { "type": "Point", "coordinates": [ 15.222503686560559, -4.50995836323577 ] }</div>');
  addMarkerToGroup(group, { lat: -4.509696012181307, lng: 15.22249459233371 },
    '<div><a > BRANCHE D1\/B3\/02</a></div>' +
    '<div>{ "Name": "D1\/B3\/02", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 29" }, "geometry": { "type": "Point", "coordinates": [ 15.22249459233371, -4.509696012181307 ] }</div>');
  addMarkerToGroup(group, { lat: -4.509442718855037, lng: 15.22244944327629 },
    '<div><a > BRANCHE D1\/B3\/03</a></div>' +
    '<div>{ "Name": "D1\/B3\/03", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 33\nMise à la terre: OK\nPoteau MT" }, "geometry": { "type": "Point", "coordinates": [ 15.22244944327629, -4.509442718855037 ] }</div>');
  addMarkerToGroup(group, { lat: -4.509940388554145, lng: 15.222116061653249 },
    '<div><a> BRANCHE D1\/B4\/01</a></div>' +
    '<div>{ "Name": "D1\/B4\/01", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 25" }, "geometry": { "type": "Point", "coordinates": [ 15.222116061653249, -4.509940388554145 ] }</div>');
  addMarkerToGroup(group, { lat: -4.509714229736948, lng: 15.222088949752131 },
    '<div><a> BRANCHE D1\/B4\/02</a></div>' +
    '<div>{ "Name": "D1\/B4\/02", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 46" }, "geometry": { "type": "Point", "coordinates": [ 15.222088949752131, -4.509714229736948 ] }</div>');
  addMarkerToGroup(group, { lat: -4.509361428370407, lng: 15.22202574182389 },
    '<div><a > BRANCHE D1\/B4\/03</a></div>' +
    '<div>{ "Name": "D1\/B4\/03", "description": "Angle(degré): 00.0\nMise à la tere: OK" }, "geometry": { "type": "Point", "coordinates": [ 15.22202574182389, -4.509361428370407 ] }</div>');
  addMarkerToGroup(group, { lat: -4.509442964189326, lng: 15.221647161789759 },
    '<div><a > BRANCHE D1\/B5\/01</a></div>' +
    '<div>{ "Name": "D1\/B5\/02", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 40" }, "geometry": { "type": "Point", "coordinates": [ 15.221647161789759, -4.509442964189326 ] }</div>');
  addMarkerToGroup(group, { lat: -80.615619530830628, lng: -10.404406028293501 },
    '<div><a > BRANCHE D1\/B5\/01</a></div>' +
    '<div>{ "Name": "D1\/B5\/02", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 40" }, "geometry": { "type": "Point", "coordinates": [ -10.404406028293501, -80.615619530830628 ] }</div>');



  //CABINE

  addMarkerToGroup(group, { lat: -4.51116158314757, lng: 15.222467995037309 },
    '<div><a > CABINE PPRO7-2</a></div>' +
    '<div>{ "Name": "PPRO7-2", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.222467995037309, -4.51116158314757 ] }</div>');
  addMarkerToGroup(group, { lat: -4.513295539013589, lng: 15.22590314840858 },
    '<div><a> CABINE PPRO7-3</a></div>' +
    '<div> { "Name": "PPRO7-3", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.22590314840858, -4.513295539013589 ] }</div>');
  addMarkerToGroup(group, { lat: -4.515078085115934, lng: 15.224776891216139 },
    '<div><a  > CABINE PPRO7-4</a></div>' +
    '<div>{ "Name": "PPRO7-4", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.224776891216139, -4.515078085115934 ] }</div>');
  addMarkerToGroup(group, { lat: -4.507860918221114, lng: 15.217932757258261 },
    '<div><a  > CABINE PPRO7-6</a></div>' +
    '<div>{ "Name": "PPRO7-6", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.217932757258261, -4.507860918221114 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510393624048988, lng: 15.219150457734489 },
    '<div><a > CABINE PPRO7-7</a></div>' +
    '<div>{ "Name": "PPRO7-7", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.219150457734489, -4.510393624048988 ] }</div>');
  addMarkerToGroup(group, { lat: -4.511998104290298, lng: 15.208225442248141 },
    '<div><a  > CABINE PPRO8-1</a></div>' +
    '<div>{ "Name": "PPRO8-1", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.208225442248141, -4.511998104290298 ] }</div>');
  addMarkerToGroup(group, { lat: -4.507564904008866, lng: 15.209341963596 },
    '<div><a  > CABINE PPRO8-2</a></div>' +
    '<div>{ "Name": "PPRO8-2", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.209341963596, -4.507564904008866 ] }</div>');
  addMarkerToGroup(group, { lat: -4.506650755448327, lng: 15.210838087850799 },
    '<div><a  > CABINE PPRO8-3</a></div>' +
    '<div>{ "Name": "PPRO8-3", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.210838087850799, -4.506650755448327 ] }</div>');
  addMarkerToGroup(group, { lat: -4.507384337910116, lng: 15.20806186968284 },
    '<div><a > CABINE PPRO8-4</a></div>' +
    '<div>{ "Name": "PPRO8-4", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.20806186968284, -4.507384337910116 ] }</div>');
  addMarkerToGroup(group, { lat: -4.508017629619023, lng: 15.20798092026773 },
    '<div><a  > CABINE PPRO8-5</a></div>' +
    '<div>{ "Name": "PPRO8-5", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.20798092026773, -4.508017629619023 ] }</div>');
  addMarkerToGroup(group, { lat: -4.484156187412356, lng: 15.19439891900439 },
    '<div><a  > CABINE PPRO9-1</a></div>' +
    '<div>{ "Name": "PPRO9-1", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.19439891900439, -4.484156187412356 ] }</div>');
  addMarkerToGroup(group, { lat: -4.483478240511877, lng: 15.192298455290199 },
    '<div><a > CABINE PPRO9-2</a></div>' +
    '<div>{ "Name": "PPRO9-2", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.192298455290199, -4.483478240511877 ] }</div>');
  addMarkerToGroup(group, { lat: -4.483740836556439, lng: 15.19137908566424 },
    '<div><a  > CABINE PPRO9-3</a></div>' +
    '<div>{ "Name": "PPRO9-3", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.19137908566424, -4.483740836556439 ] }</div>');
  addMarkerToGroup(group, { lat: -4.485522158302624, lng: 15.19470576022357 },
    '<div><a  > CABINE PPRO9-4</a></div>' +
    '<div>{ "Name": "PPRO9-4", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.19470576022357, -4.485522158302624 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490767995085994, lng: 15.199340440867561 },
    '<div><a  > CABINE PPRO9-5</a></div>' +
    '<div>{ "Name": "PPRO9-5", "description": "CABINE" }, "geometry": { "type": "Point", "coordinates": [ 15.199340440867561, -4.490767995085994 ] }</div>');
  addMarkerToGroup(group, { lat: -4.489266373001437, lng: 15.198862282620579 },
    '<div><a  > CABINE PPRO9-7</a></div>' +
    '<div>{ "Name": "PPRO9-7", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.198862282620579, -4.489266373001437 ] }</div>');
  addMarkerToGroup(group, { lat: -4.486137437565717, lng: 15.1943183156337 },
    '<div><a  > CABINE PPRO9-8</a></div>' +
    '<div>{ "Name": "PPRO9-8", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.1943183156337, -4.486137437565717 ] }</div>');
  addMarkerToGroup(group, { lat: -4.484889219607159, lng: 15.19346164494474 },
    '<div><a  > CABINE PPRO9-9</a></div>' +
    '<div>{ "Name": "PPRO9-9", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.19346164494474, -4.484889219607159 ] }</div>');
  addMarkerToGroup(group, { lat: -4.488959413032051, lng: 15.196545559997981 },
    '<div><a  > CABINE PPRO9-13\/1</a></div>' +
    '<div>{ "Name": "PPRO9-13\/1", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.196545559997981, -4.488959413032051 ] }</div>');
  addMarkerToGroup(group, { lat: -4.48466223584839, lng: 15.19651736864515 },
    '<div><a  > CABINE PPRO9-13\/2</a></div>' +
    '<div>{ "Name": "PPRO9-13\/2", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.19651736864515, -4.48466223584839 ] }</div>');
  addMarkerToGroup(group, { lat: -4.483712373066044, lng: 15.196363875180699 },
    '<div><a  > CABINE PPRO9-13\/3</a></div>' +
    '<div>{ "Name": "PPRO9-13\/3", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.196363875180699, -4.483712373066044 ] }</div>');
  addMarkerToGroup(group, { lat: -4.485693601406767, lng: 15.196364404205131 },
    '<div><a > CABINE PPRO9-13\/4</a></div>' +
    '<div>{ "Name": "PPRO9-13\/4", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.196364404205131, -4.485693601406767 ] }</div>');
  addMarkerToGroup(group, { lat: -4.478867144132955, lng: 15.243821423497341 },
    '<div><a  > CABINE PPR011-1</a></div>' +
    '<div>{ "Name": "PPRO11-1", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.243821423497341, -4.478867144132955 ] }</div>');
  addMarkerToGroup(group, { lat: -4.478117223136551, lng: 15.24094570859979 },
    '<div><a  > CABINE PPRO11-2\/2</a></div>' +
    '<div>{ "Name": "PPRO11-2", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.24094570859979, -4.478117223136551 ] }</div>');
  addMarkerToGroup(group, { lat: -4.477429675500506, lng: 15.240945483680189 },
    '<div><a > CABINE PPRO11-3\/2</a></div>' +
    '<div>{ "Name": "PPRO11-3", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.240945483680189, -4.477429675500506 ] }</div>');
  addMarkerToGroup(group, { lat: -4.476732065118971, lng: 15.24401001036513 },
    '<div><a  > CABINE PPRO11-4\/2</a></div>' +
    '<div>{ "Name": "PPRO11-4", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.24401001036513, -4.476732065118971 ] }</div>');
  addMarkerToGroup(group, { lat: -4.479373520175653, lng: 15.244533698448381 },
    '<div><a  > CABINE PPRO11-5\/2</a></div>' +
    '<div>{ "Name": "PPRO11-5", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.244533698448381, -4.479373520175653 ] }</div>');

  //DEPART
  addMarkerToGroup(group, { lat: -4.51101681134968, lng: 15.222549080751079 },
    '<div><a> DEPART D1\/01</a></div>' +
    '<div>{ "Name": "D1\/01", "description": "Angle: 00.0°\nPortée Moyenne :18\nMise à la terre : OK" }, "geometry": { "type": "Point", "coordinates": [ 15.222549080751079, -4.51101681134968 ] } </div>');
  addMarkerToGroup(group, { lat: -4.510853973818662, lng: 15.222540016766199 },
    '<div><a > DEPART D1\/02</a></div>' +
    '<div>{ "Name": "D1\/02", "description": "Angle(degré) :81.52\nPorte Moyenne (m): 24\nMise à la terre : OK\nPoteau  MT" }, "geometry": { "type": "Point", "coordinates": [ 15.222540016766199, -4.510853973818662 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510709221362312, lng: 15.22255800153617 },
    '<div><a > DEPART D1\/03</a></div>' +
    '<div>{ "Name": "D1\/03", "description": "Porte Moyenne (m): 34\n" }, "geometry": { "type": "Point", "coordinates": [ 15.22255800153617, -4.510709221362312 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510600658401481, lng: 15.222566982903549 },
    '<div><a > DEPART D1\/04</a></div>' +
    '<div>{ "Name": "D1\/04", "description": "Angle(degré106\nPorte Moyenne (m): 26\nMise à la terre : OK\nPoteau  MT" }, "geometry": { "type": "Point", "coordinates": [ 15.222566982903549, -4.510600658401481 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510401647952131, lng: 15.222512835858669 },
    '<div><a > DEPART D1\/05</a></div>' +
    '<div>{ "Name": "D1\/05", "description": "Angle(degré): 00.0\n" }, "geometry": { "type": "Point", "coordinates": [ 15.222512835858669, -4.510401647952131 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510220714287906, lng: 15.22251278079856 },
    '<div><a > DEPART D1\/06</a></div>' +
    '<div>{ "Name": "D1\/06", "description": "Angle(degré): 93.26\nPorte Moyenne (m): 40\nMise à la terre : OK\nPoteau  MT" }, "geometry": { "type": "Point", "coordinates": [ 15.22251278079856, -4.510220714287906 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510238912560634, lng: 15.22217023878688 },
    '<div><a > DEPART D1\/07</a></div>' +
    '<div> { "Name": "D1\/07", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 13\n" }, "geometry": { "type": "Point", "coordinates": [ 15.22217023878688, -4.510238912560634 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510238948412517, lng: 15.22205305147639 },
    '<div><a > DEPART D1\/08</a></div>' +
    '<div>{ "Name": "D1\/08", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 40\nMise à la terre : OK\nPoteau  MT" }, "geometry": { "type": "Point", "coordinates": [ 15.22205305147639, -4.510238948412517 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510248091526504, lng: 15.221737549917609 },
    '<div><a > DEPART D1\/09</a></div>' +
    '<div>{ "Name": "D1\/09", "description": "Angle(degré):82.17\nPorte Moyenne (m)27\nMise à la terre : OK\n" }, "geometry": { "type": "Point", "coordinates": [ 15.221737549917609, -4.510248091526504 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510248165822048, lng: 15.221494160876849 },
    '<div><a > DEPART 1\/10</a></div>' +
    '<div>{ "Name": "1\/10", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 26\nMise à la terre : OK\nPoteau  MT" }, "geometry": { "type": "Point", "coordinates": [ 15.221494160876849, -4.510248165822048 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510248237288788, lng: 15.22125978624118 },
    '<div><a > DEPART D1\/11</a></div>' +
    '<div>{ "Name": "D1\/11", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 26\nMise à la terre : OK" }, "geometry": { "type": "Point", "coordinates": [ 15.22125978624118, -4.510248237288788 ] }</div>');
  addMarkerToGroup(group, { lat: -4.510248300446296, lng: 15.22105245482958 },
    '<div><a > DEPART D1\/12</a></div>' +
    '<div>{ "Name": "D1\/12", "description": "Angle(degré): 00.0\nPorte Moyenne (m): 30\nMise à la terre : OK\n" }, "geometry": { "type": "Point", "coordinates": [ 15.22105245482958, -4.510248300446296 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490659405085838, lng: 15.199448581571611 },
    '<div><a > DEPART D2-D3\/01</a></div>' +
    '<div>{ "Name": "D2-D3\/01", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.199448581571611, -4.490659405085838 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490668370357937, lng: 15.19974605199771 },
    '<div><a > DEPART D2-D3\/02</a></div>' +
    '<div>{ "Name": "D2-D3\/02", "description": "PoteauMT" }, "geometry": { "type": "Point", "coordinates": [ 15.19974605199771, -4.490668370357937 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490704525051732, lng: 15.19986324619564 },
    '<div><a > DEPART D2-D3\/03</a></div>' +
    '<div>{ "Name": "D2-D3\/03", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.19986324619564, -4.490704525051732 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490758745926124, lng: 15.20007960133057 },
    '<div><a > DEPART D2-D3\/04</a></div>' +
    '<div>{ "Name": "D2-D3\/04", "description": null }, "geometry": { "type": "Point", "coordinates": [ 15.20007960133057, -4.490758745926124 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490831047754129, lng: 15.200341032341949 },
    '<div><a > DEPART D2-D3\/05</a></div>' +
    '<div>{ "Name": "D2-D3\/05", "description": "PoteauMT" }, "geometry": { "type": "Point", "coordinates": [ 15.200341032341949, -4.490831047754129 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490912403626687, lng: 15.200575423322171 },
    '<div><a > DEPART D2-D3\/06</a></div>' +
    '<div> { "Name": "D2-D3\/06", "description": "Angle:00.0°" }, "geometry": { "type": "Point", "coordinates": [ 15.200575423322171, -4.490912403626687 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490984725132861, lng: 15.200764740957 },
    '<div><a > DEPART D2-D3\/07</a></div>' +
    '<div>{ "Name": "D2-D3\/07", "description": "Observation: PoteauMT,\nAngle: 00.0°" }, "geometry": { "type": "Point", "coordinates": [ 15.200764740957, -4.490984725132861 ] }</div>');
  addMarkerToGroup(group, { lat: -4.491057051556932, lng: 15.200936030257431 },
    '<div><a > DEPART D2-D3\/08</a></div>' +
    '<div>{ "Name": "D2-D3\/08", "description": "Angle: 78.27,\nMise A LaTerre: OK" }, "geometry": { "type": "Point", "coordinates": [ 15.200936030257431, -4.491057051556932 ] }</div>');
  addMarkerToGroup(group, { lat: -4.491138474347103, lng: 15.200927038350271 },
    '<div><a > DEPART D2\/09</a></div>' +
    '<div> { "Name": "D2\/09", "description": "Angle: 00.0" }, "geometry": { "type": "Point", "coordinates": [ 15.200927038350271, -4.491138474347103 ] }</div>');
  addMarkerToGroup(group, { lat: -4.491355525555651, lng: 15.201179495038049 },
    '<div><a > DEPART D2\/10</a></div>' +
    '<div>{ "Name": "D2\/10", "description": "PoteauMT,\nAngle: 0.00°" }, "geometry": { "type": "Point", "coordinates": [ 15.201179495038049, -4.491355525555651 ] }</div>');
  addMarkerToGroup(group, { lat: -4.491572594101227, lng: 15.201368852537129 },
    '<div><a > DEPART D2\/11</a></div>' +
    '<div>{ "Name": "D2\/11", "description": "Angle: 0.00°" }, "geometry": { "type": "Point", "coordinates": [ 15.201368852537129, -4.491572594101227 ] }</div>');
  addMarkerToGroup(group, { lat: -4.491798714276046, lng: 15.20154018424495 },
    '<div><a > DEPART D2\/12</a></div>' +
    '<div>{ "Name": "D2\/12", "description": "PoteauMT,\nAngle: 0.00°,\nMise à la terre: OK" }, "geometry": { "type": "Point", "coordinates": [ 15.20154018424495, -4.491798714276046 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490568854172799, lng: 15.199755039111849 },
    '<div><a > DEPART D2-D3\/08</a></div>' +
    '<div>{ "Name": "D2-D3\/01", "description": "Angle: 0.00°,\nMise à la terre: OK" }, "geometry": { "type": "Point", "coordinates": [ 15.199755039111849, -4.490568854172799 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490668370357937, lng: 15.19974605199771 },
    '<div><a > DEPART D2-D3\/02</a></div>' +
    '<div>{ "Name": "D2-D3\/02", "description": "Angle\/ 13.33°,\nPoteauMT" }, "geometry": { "type": "Point", "coordinates": [ 15.19974605199771, -4.490668370357937 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490704525051732, lng: 15.19986324619564 },
    '<div><a > DEPART D2-D3\/03</a></div>' +
    '<div>{ "Name": "D2-D3\/03", "description": "Angle: 75.09°,\nMise à la terre : OK" }, "geometry": { "type": "Point", "coordinates": [ 15.19986324619564, -4.490704525051732 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490758745926124, lng: 15.20007960133057 },
    '<div><a > DEPART D2-D3\/04</a></div>' +
    '<div>{ "Name": "D2-D3\/04", "description": "Angle: 0.00°" }, "geometry": { "type": "Point", "coordinates": [ 15.20007960133057, -4.490758745926124 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490831047754129, lng: 15.200341032341949 },
    '<div><a > DEPART D2-D3\/05</a></div>' +
    '<div>{ "Name": "D2-D3\/05", "description": "Angle: 0.00°" }, "geometry": { "type": "Point", "coordinates": [ 15.200341032341949, -4.490831047754129 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490912403626687, lng: 15.200575423322171 },
    '<div><a > DEPART D2-D3\/06</a></div>' +
    '<div>{ "Name": "D2-D3\/06", "description": "Angle : 0.00°" }, "geometry": { "type": "Point", "coordinates": [ 15.200575423322171, -4.490912403626687 ] }</div>');
  addMarkerToGroup(group, { lat: -4.490984725132861, lng: 15.200764740957 },
    '<div><a > DEPART D2-D3\/07</a></div>' +
    '<div>{ "Name": "D2-D3\/07", "description": "Angle: 0.00°" }, "geometry": { "type": "Point", "coordinates": [ 15.200764740957, -4.490984725132861 ] }</div>');
  addMarkerToGroup(group, { lat: -4.491057051556932, lng: 15.200936030257431 },
    '<div><a > DEPART D2-D3\/08</a></div>' +
    '<div>{ "Name": "D2-D3\/08", "description": "Angle: 78.27°,\nMise à la terre: OK" }, "geometry": { "type": "Point", "coordinates": [ 15.200936030257431, -4.491057051556932 ] }</div>');
  addMarkerToGroup(group, { lat: -4.49112937047915, lng: 15.20113436214722 },
    '<div><a > DEPART D3\/09</a></div>' +
    '<div>{ "Name": "D3\/09", "description": "Angle: 0.00°,\nMise à la terre: OK,\nPoteauMT" }, "geometry": { "type": "Point", "coordinates": [ 15.20113436214722, -4.49112937047915 ] }</div>');


}

var platform = new H.service.Platform({
  apikey: 'x-THWJki1iqfW20blk52Dje0vTf4nUEJ-3wlih8BCRE'
});

var defaultLayers = platform.createDefaultLayers();


var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
  zoom: 10,
  center: { lat: -4.499546448366036, lng: 15.203552938873946 },
  pixelRatio: window.devicePixelRatio || 1
});

window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));


var ui = H.ui.UI.createDefault(map, defaultLayers);

addInfoBubble(map);
// showGeoJSONData(map);

