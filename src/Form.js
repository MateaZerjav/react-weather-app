import React, { useState } from "react";
import axios from "axios";

export default function Form(props) {
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  const [query, setQuery] = useState("");
  let ApiKey = "636ft3f4ca7b895f0259dd71a1354d0o";
  let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=
  ${query}&key=${ApiKey}`;

  function displayWeather(response) {
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.condition.icon_url);
  }

  function handleChange(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(ApiUrl).then(displayWeather);
  }
  if (temperature) {
    return (
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a city..."
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <ul>
          <li>Temperature: {Math.round(temperature)}</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}</li>
          <li>Wind: {wind} km/h</li>
          <li>
            <img src={icon} alt="icon" />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a city..."
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>{" "}
      </div>
    );
  }
}
