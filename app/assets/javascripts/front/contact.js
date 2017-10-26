$(document).on('turbolinks:load', function(){
    if($('body').hasClass('contact')){
        var tiltSettings = {
                movement: {
                    imgWrapper : {
                        translation : {x: -5, y: -5, z: -5},
                        rotation : {x: 0, y: 0, z: 0},
                        reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                    }
                }
            };
        $(".js-tilter").each(function(){
            new TiltFx(this, tiltSettings);
        });
        
        $('input[type="file"]').fileuploader({theme: 'onebutton', addMore: true, enableApi: true});

        mapboxgl.accessToken = 'pk.eyJ1Ijoic2NobmliYmEiLCJhIjoiMWEwYWI4YTA3YTAwYjVhYTY1YWZiZGFiZDk1Zjk5NGUifQ.ueMMb8kMdWxrP5N4iqx67Q';
        var map = new mapboxgl.Map({
            container: 'g-map',
            style: 'mapbox://styles/mapbox/light-v9',
            // style: 'mapbox://styles/schnibba/ciw9f6qp500542qmkzdjjqd8o',
            center: [37.565337, 55.805336],
            zoom: 14.5,
            hash: false,
            interactive: true
        });
    }
    
});
