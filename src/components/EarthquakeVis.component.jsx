import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import SideFilter from "./SideFilter.component";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./loader.component";

const EarthquakeVis = () => {
  const [FilterObject, setFilterObject] = useState({
    maxmag: 10.0,
    minmag: 0.0,
  });
  const [timeperiod, settimeperiod] = useState("all_day");
  const [Earthquakes, setEarthquakes] = useState([]);

  const [Loading, setLoading] = useState(true);

  function magnitudeColor(m) {
    if (m >= 7) return "#7f0000";
    if (m >= 6) return "#b30000";
    if (m >= 5) return "#e34a33";
    if (m >= 4) return "#fc8d59";
    if (m >= 3) return "#fdcc8a";
    if (m >= 2) return "#fef0d9";
    return "#d9f0a3";
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${timeperiod}.geojson`;
        const res = await axios.get(url);
        setEarthquakes(res.data.features);
      } catch (err) {
        console.error("Error fetching data:", err);
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [timeperiod]);

  useEffect(() => {
    console.log("Earthquakes updated:", Earthquakes);
  }, [Earthquakes]);

  return (
    <div className="flex w-full h-screen">
      <SideFilter
        FilterObject={FilterObject}
        setFilterObject={setFilterObject}
        timeperiod={timeperiod}
        settimeperiod={settimeperiod}
      />
      <div className=" size-full bg-gradient-to-br from-gray-700 via-gray-600 to-black p-2">
        <div className="size-full border-2 border-gray-400 rounded-xl overflow-hidden">
          <MapContainer
            center={[20, 0]}
            zoom={2}
            className="h-full w-full"
            scrollWheelZoom
          >
            {/* Background map tiles (here from OpenStreetMap) */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />

            {/* Example Marker */}

            {!Loading ? (
              Earthquakes.filter(
                (eq) =>
                  eq.properties.mag !== null &&
                  eq.properties.mag >= FilterObject.minmag &&
                  eq.properties.mag <= FilterObject.maxmag
              ).map((eq) => {
                const [lon, lat] = eq.geometry.coordinates;
                const { mag, place, time } = eq.properties;
                return (
                  <CircleMarker
                    key={eq.id}
                    center={[lat, lon]}
                    radius={Math.max(mag * 2, 2)}
                    color={magnitudeColor(mag)}
                    fillOpacity={1}
                    className="animate-pulse"
                  >
                    <Popup>
                      <b>Location:</b> {place} <br />
                      <b>Magnitude:</b> {mag} <br />
                      <b>Time:</b> {new Date(time).toLocaleString()}
                    </Popup>
                  </CircleMarker>
                );
              })
            ) : (
              <Loader />
            )}
          </MapContainer>
          {/* {Loading && } */}
        </div>
      </div>
    </div>
  );
};

export default EarthquakeVis;
