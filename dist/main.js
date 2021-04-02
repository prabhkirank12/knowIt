!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.createElement("p");e.classList.add("text");var t=document.createTextNode("How much do you know?"),n=document.getElementById("content");e.appendChild(t),n.appendChild(e);var o=document.createElement("img");o.src="./dist/".concat("images/landmarks.png"),document.getElementById("content").appendChild(o);var a=document.querySelector("#content"),r=document.querySelector("#container"),i=document.querySelector("img"),l=document.querySelector(".text");r.addEventListener("mousemove",(function(e){var t=(window.innerWidth/2-e.pageX)/25,n=(window.innerHeight/2-e.pageY)/25;a.style.transform="rotateY(".concat(t,"deg) rotateX(").concat(n,"deg)")})),r.addEventListener("mouseenter",(function(e){a.style.transition="none",i.style.transform="translateZ(150px)",l.style.transform="translateZ(150px)"})),r.addEventListener("mouseleave",(function(e){a.style.transition="all 0.5s ease",a.style.transform="rotateY(0deg) rotateX(0deg)",i.style.transform="translateZ(0px) ",l.style.transform="translateZ(0px) "}))};var a=function(){var e=document.getElementById("myModal"),t=document.getElementById("dirs"),n=document.getElementsByClassName("close")[0];t.onclick=function(){e.style.display="block"},n.onclick=function(){e.style.display="none"},window.onclick=function(t){t.target==e&&(e.style.display="none")}},r=[{id:"IN",title:"Taj Mahal, India",built:"Shah Jahan, a Mughal Dynasty Ruler",tourist:"8 million visitors",purpose:"An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favorite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."},{id:"EG",title:"Great Pyramid of Giza, Eygpt",built:"Shah Jahan, a Mughal Dynasty Ruler",tourist:"8 million visitors",purpose:"An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."}];var i=function(){document.getElementById("content").innerHTML="",am4core.ready((function(){am4core.useTheme(am4themes_animated);var e=am4core.create("chartdiv",am4maps.MapChart);e.geodata=am4geodata_worldLow,e.projection=new am4maps.projections.Orthographic,e.panBehavior="rotateLongLat",e.deltaLatitude=-20,e.padding(20,20,20,20),e.adapter.add("deltaLatitude",(function(e){return am4core.math.fitToRange(e,-90,90)}));var t=e.series.push(new am4maps.MapPolygonSeries);t.useGeodata=!0;var n=t.mapPolygons.template;n.fill=am4core.color("lightgray"),n.stroke=am4core.color("#454a58"),n.strokeWidth=1,t.data=[{id:"IN",name:"India",fill:am4core.color("#1B2DA1"),tooltipContent:"Taj Mahal, India"},{id:"EG",name:"Egypt",fill:am4core.color("#1B2DA1"),tooltipContent:"Great Pyramid of Giza, Eygpt"},{id:"CN",name:"China",fill:am4core.color("#1B2DA1"),tooltipContent:"Great Wall of China, China"},{id:"IT",name:"Italy",fill:am4core.color("#1B2DA1"),tooltipContent:"Leaning Tower of Pisa, Italy"},{id:"BR",name:"Brazil",fill:am4core.color("#1B2DA1"),tooltipContent:"Christ the Redeemer, Brazil"},{id:"PE",name:"Peru",fill:am4core.color("#1B2DA1"),tooltipContent:"Machu Picchu, Peru"},{id:"US",name:"United States",fill:am4core.color("#1B2DA1"),tooltipContent:"Golden Gate Bridge, United States"},{id:"TR",name:"Turkey",fill:am4core.color("#1B2DA1"),tooltipContent:"Hagia Sophia, Turkey"}],n.propertyFields.fill="fill";var o,a=e.series.push(new am4maps.GraticuleSeries);a.mapLines.template.line.stroke=am4core.color("#ffffff"),a.mapLines.template.line.strokeOpacity=.08,a.fitExtent=!1,t.calculateVisualCenter=!0,n.tooltipText="{tooltipContent}",n.tooltipPosition="fixed",n.showTooltipOn="hover",n.events.on("hit",(function(t){var n=t.target.dataItem.dataContext.id,o="",a="",i="",l="";r.forEach((function(e){return e.id===n&&(o=e.title,a=e.built,i=e.tourist,l=e.purpose),l})),e.openModal("Name: ".bold().fontsize(12)+o.fontcolor("#0994FD")+"<br>"+"Built by: ".bold()+a+"<br>"+"Number of visitors per year: ".bold()+i+"<br>"+"Why was it built: ".bold()+l)})),e.backgroundSeries.mapPolygons.template.polygon.fillOpacity=.1,e.backgroundSeries.mapPolygons.template.polygon.fill=am4core.color("#ffffff"),setTimeout((function(){o=e.animate({property:"deltaLongitude",to:1e5},2e7)}),3e3),e.seriesContainer.events.on("down",(function(){o&&o.stop()}))}))};var l=function(){document.getElementById("chartdiv").innerHTML="",o()};var d=function(){var e=document.querySelector('input[type="checkbox"]'),t=document.getElementById("toggle-icon");function n(){t.children[0].textContent="Dark Mode",t.children[1].classList.replace("fa-sun","fa-moon")}e.addEventListener("change",(function(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"),n()):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"),t.children[0].textContent="Light Mode",t.children[1].classList.replace("fa-moon","fa-sun"))}));var o=localStorage.getItem("theme");o&&(document.documentElement.setAttribute("data-theme",o),"dark"===o&&(e.checked=!0,n()))};document.addEventListener("DOMContentLoaded",(function(){document.getElementById("play-bttn").addEventListener("click",i),document.getElementById("play-bttn").addEventListener("click",(function(e){return e.stopPropagation()})),document.getElementById("title").addEventListener("click",l),document.getElementById("title").addEventListener("click",(function(e){return e.stopPropagation()})),document.getElementById(body),o(),a(),d()}))}]);
//# sourceMappingURL=main.js.map