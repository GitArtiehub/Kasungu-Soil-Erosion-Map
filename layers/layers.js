var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DistrictBoundary_1 = new ol.format.GeoJSON();
var features_DistrictBoundary_1 = format_DistrictBoundary_1.readFeatures(json_DistrictBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictBoundary_1.addFeatures(features_DistrictBoundary_1);
var lyr_DistrictBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictBoundary_1, 
                style: style_DistrictBoundary_1,
                popuplayertitle: 'District Boundary',
                interactive: false,
                title: 'District Boundary'
            });
var lyr_SoilLosstonHayr_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Soil Loss(ton/Ha/yr)<br />\
    <img src="styles/legend/SoilLosstonHayr_2_0.png" /> <= 2.0000<br />\
    <img src="styles/legend/SoilLosstonHayr_2_1.png" /> 2.0000 - 5.0000<br />\
    <img src="styles/legend/SoilLosstonHayr_2_2.png" /> 5.0000 - 8.0000<br />\
    <img src="styles/legend/SoilLosstonHayr_2_3.png" /> 8.0000 - 11.0000<br />\
    <img src="styles/legend/SoilLosstonHayr_2_4.png" /> > 11.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SoilLosstonHayr_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3665211.816194, -1531308.782357, 3785345.143491, -1389194.360703]
        })
    });
var format_AdminstrationArea_3 = new ol.format.GeoJSON();
var features_AdminstrationArea_3 = format_AdminstrationArea_3.readFeatures(json_AdminstrationArea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdminstrationArea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdminstrationArea_3.addFeatures(features_AdminstrationArea_3);
var lyr_AdminstrationArea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdminstrationArea_3, 
                style: style_AdminstrationArea_3,
                popuplayertitle: 'Adminstration Area',
                interactive: true,
                title: '<img src="styles/legend/AdminstrationArea_3.png" /> Adminstration Area'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DistrictBoundary_1.setVisible(true);lyr_SoilLosstonHayr_2.setVisible(true);lyr_AdminstrationArea_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DistrictBoundary_1,lyr_SoilLosstonHayr_2,lyr_AdminstrationArea_3];
lyr_DistrictBoundary_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'MA_DIST_': 'MA_DIST_', 'MA_DIST_ID': 'MA_DIST_ID', 'HECTARES': 'HECTARES', 'KM_SQ': 'KM_SQ', 'DIST_NAME': 'DIST_NAME', 'DIS_POPUL': 'DIS_POPUL', });
lyr_AdminstrationArea_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'REG_NAME': 'REG_NAME', 'REG_CODE': 'REG_CODE', 'DIST_NAME': 'DIST_NAME', 'TA_CODE': 'TA_CODE', 'TA_NAME': 'Name of Area', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Mean_Soil_': 'Mean Soil Loss(tonnes/Hectare/year)', 'Level': 'Level of Erosion', });
lyr_DistrictBoundary_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'MA_DIST_': 'TextEdit', 'MA_DIST_ID': 'TextEdit', 'HECTARES': 'TextEdit', 'KM_SQ': 'TextEdit', 'DIST_NAME': 'TextEdit', 'DIS_POPUL': 'TextEdit', });
lyr_AdminstrationArea_3.set('fieldImages', {'OBJECTID_1': 'Hidden', 'REG_NAME': 'Hidden', 'REG_CODE': 'Hidden', 'DIST_NAME': 'Hidden', 'TA_CODE': 'Hidden', 'TA_NAME': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Mean_Soil_': 'TextEdit', 'Level': 'TextEdit', });
lyr_DistrictBoundary_1.set('fieldLabels', {'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'MA_DIST_': 'hidden field', 'MA_DIST_ID': 'hidden field', 'HECTARES': 'hidden field', 'KM_SQ': 'hidden field', 'DIST_NAME': 'hidden field', 'DIS_POPUL': 'hidden field', });
lyr_AdminstrationArea_3.set('fieldLabels', {'TA_NAME': 'inline label - always visible', 'Mean_Soil_': 'inline label - always visible', 'Level': 'inline label - always visible', });
lyr_AdminstrationArea_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});