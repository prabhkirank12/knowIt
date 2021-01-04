
function globe(){

    document.getElementById("content").innerHTML = "";

    am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.deltaLatitude = -20;
    chart.padding(20,20,20,20);
    
    // limits vertical rotation
    chart.adapter.add("deltaLatitude", function(delatLatitude){
        return am4core.math.fitToRange(delatLatitude, -90, 90);
    })
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    
    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    // polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("lightgray");
    polygonTemplate.stroke = am4core.color("#454a58");
    polygonTemplate.strokeWidth = 1.0;

    //only choosing a few countries and filling the color
    polygonSeries.data = [{
      "id": "IN",
      "name": "India",
      "fill": am4core.color("#1B2DA1"),
      tooltipContent: "Taj Mahal, India"
    }, {
      "id": "EG",
      "name": "Egypt",
      "fill": am4core.color("#1B2DA1"),
      tooltipContent: "Great Pyramid of Giza, Eygpt"
      }, {
        "id": "CN",
        "name": "China",
        "fill": am4core.color("#1B2DA1"),
        tooltipContent: "Great Wall of China, China"
      }, {
        "id": "IT",
        "name": "Italy",
        "fill": am4core.color("#1B2DA1"),
        tooltipContent: "Leaning Tower of Pisa, Italy"
      }, {
        "id": "BR",
        "name": "Brazil",
        "fill": am4core.color("#1B2DA1"),
        tooltipContent: "Christ the Redeemer, Brazil"
      }, {
        "id": "PE",
        "name": "Peru",
        "fill": am4core.color("#1B2DA1"),
        tooltipContent: "Machu Picchu, Peru"
      }, {
        "id": "US",
        "name": "United States",
        "fill": am4core.color("#1B2DA1"),
        tooltipContent: "Golden Gate Bridge, United States"
      }, {
        "id": "TR",
        "name": "Turkey",
        "fill": am4core.color("#1B2DA1"),
        tooltipContent: "Hagia Sophia, Turkey"
      }];
      polygonTemplate.propertyFields.fill = "fill";
      
      var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
      graticuleSeries.mapLines.template.line.stroke = am4core.color("#ffffff");
      graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
      graticuleSeries.fitExtent = false;
      
      // Hover over text
      polygonSeries.calculateVisualCenter = true;
      polygonTemplate.tooltipText = "{tooltipContent}"
      polygonTemplate.tooltipPosition = "fixed";
      polygonTemplate.showTooltipOn = "hover";

      //on Click handler
      polygonTemplate.events.on("hit", function (ev) {
        // zoom to an object
        ev.target.series.chart.zoomToMapObject(ev.target);

        // get object info
        console.log(ev.target.dataItem.dataContext.name);
      });
    
    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
    chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#ffffff");
    
  
    let animation;
    setTimeout(function(){
      animation = chart.animate({property:"deltaLongitude", to:100000}, 20000000);
    }, 3000)
    
    chart.seriesContainer.events.on("down", function(){
    if(animation){
      animation.stop();
    }
    })
    
    }); // end am4core.ready()

}   

export default globe;
