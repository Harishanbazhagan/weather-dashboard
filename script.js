function getWeather() {
  let city = document.getElementById("city").value;
  document.getElementById("result").innerText =
    "You searched: " + city;
}