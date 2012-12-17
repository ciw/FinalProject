var map;
    $(document).ready(function(){
      map = new GMaps({
		  
		  
        div: '#map',
        lat: 24.024431,
        lng: -104.684386,
		zoom: 16
      });

 	  path = [[23.991900, -104.664394], [23.991899, -104.664380], [23.991976, -104.664370], [23.991850, -104.663630], [23.992580, -104.663430], [23.993700, -104.663200]];
      map.drawPolyline({
        path: path,
        strokeColor: '#009DD9',
        strokeOpacity: 0.6,
        strokeWeight: 6
      });
	  
	  map.addMarker({
        lat: 23.991832,
        lng: -104.664629,
        title: 'Edificio 113',
		icon: 'factory.png'
		});	
	  
	  map.addMarker({
        lat: 24.023931,
        lng: -104.684386,
		icon: 'bebeleche.png',
        title: 'Oxxo',
		});
		
	
		
		
      var path=[];
      var p = [[23.991955, -104.664406],[23.991840, -104.664420],[23.991890, -104.664766],[23.992006, -104.664746]];
      for(i in p){
        latlng = new google.maps.LatLng(p[i][0], p[i][1]);
        path.push(latlng);
      }
      polygon = map.drawPolygon({
        paths: path,
        strokeColor: '#BBD8E9',
        strokeOpacity: 1,
        strokeWeight: 1,
        fillColor: '#BBD8E9',
        fillOpacity: 0.6
      });	
	  

	
			
    });