
function globe(){

    document.getElementById("content").innerHTML = "";

    am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    //color theme
    // chart.colors.list = [
    //   am4core.color("#845EC2"),
    //   am4core.color("#D65DB1"),
    //   am4core.color("#FF6F91"),
    //   am4core.color("#FF9671"),
    //   am4core.color("#FFC75F"),
    //   am4core.color("#F9F871")
    // ];


    
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

    //only choosing a few countries
    var groupData = [{
      "id": "IN",
      "name": "India",
      "value": 100,
      "fill": am4core.color("#1B2DA1"),
    }, {
      "id": "EG",
      "name": "Egypt",
      "value": 50,
      "fill": am4core.color("#1B2DA1")
      }, {
        "id": "CN",
        "name": "China",
        "value": 50,
        "fill": am4core.color("#1B2DA1")
      }, {
        "id": "IT",
        "name": "Italy",
        "value": 50,
        "fill": am4core.color("#1B2DA1")
      }, {
        "id": "NP",
        "name": "Nepal",
        "value": 50,
        "fill": am4core.color("#1B2DA1")
      }, {
        "id": "BR",
        "name": "Brazil",
        "value": 50,
        "fill": am4core.color("#1B2DA1")
      }, {
        "id": "PE",
        "name": "Peru",
        "value": 50,
        "fill": am4core.color("#1B2DA1")
      }, {
        "id": "US",
        "name": "United States",
        "value": 50,
        "fill": am4core.color("#1B2DA1")
      }, {
        "id": "TR",
        "name": "Turkey",
        "value": 50,
        "fill": am4core.color("#1B2DA1"),
      }];

    groupData.forEach(
      polygonTemplate.propertyFields.fill = "fill"
    )
  
    var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.mapLines.template.line.stroke = am4core.color("#ffffff");
    graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
    graticuleSeries.fitExtent = false;
    
    
    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
    chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#ffffff");
    
    // Create hover state and set alternative fill color
    // var hs = polygonTemplate.states.create("hover");
    // hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);
    
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
