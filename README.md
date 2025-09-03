# 🌍 Earthquake Visualization Dashboard

An interactive web application that visualizes real-time earthquake data on a map using the **USGS Earthquake API**.  
The app includes a sidebar filter panel where users can adjust magnitude and time range filters, with smooth UI and dynamic map updates.

🚀 **Live Demo:** [Earthquake Visualiser](https://earthquake-visualiser-sigma.vercel.app/)

---

## Features

- Interactive world map with earthquake markers
- Filter sidebar for:
  - Minimum & maximum magnitude
  - Time period (past hour, past day, past week, etc.)
- Dynamic sidebar toggle (expand/collapse)
- Color-coded markers based on earthquake magnitude
- Loader component while data is being fetched
- Responsive and modern UI with TailwindCSS

---

## Tech Stack

- **React.js** – Frontend framework
- **React-Leaflet** – Map visualization
- **TailwindCSS** – Styling
- **Axios** – API requests
- **USGS Earthquake API** – Data source

---

## API Used

Data is fetched from the [USGS Earthquake API](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).

Example endpoint used:
