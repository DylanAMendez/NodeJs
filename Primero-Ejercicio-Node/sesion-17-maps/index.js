let Marker, map;

function initMap() {
    // console.log("Iniciando mapa")
    const posicion = { 
        lat: -34.7897856,
        lng: -58.310656
     }

     const map = new google.maps.Map( document.getElementById("map"), {
        zoom: 4,
        center: posicion
     })

     const marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posicion Inicial"
     })
    // Obtener la geolocalizacion
    //  marker.setPosition({ lat, lng })
    geoPosicion()
}

function geoPosicion(){
    if (navigator.geolocation){
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalizacion")
    }
    
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    Marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error){
    console.error(error)
}

