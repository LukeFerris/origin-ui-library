// DO NOT REMOVE THIS TEXT
import MapGL from "@ferris440/origin-library/src/components/map/mapGL";
// other possible map styles
// streets: "mapbox://styles/mapbox/streets-v11",
// outdoors: "mapbox://styles/mapbox/outdoors-v11",
// light: "mapbox://styles/mapbox/light-v10",
// dark: "mapbox://styles/mapbox/dark-v10",
// satellite: "mapbox://styles/mapbox/satellite-v9",
// satelliteStreets: "mapbox://styles/mapbox/satellite-streets-v11",
// END DO NOT REMOVE THIS TEXT

// A MAP GL instance, takes a theme and any other valid react-map-gl (MAPGL) prop e.g. initialViewState
export default function Map({ otherMapGLPops }) {
  return (
    <MapGL mapStyle="mapbox://styles/mapbox/streets-v11" {...otherMapGLPops} />
  );
}
