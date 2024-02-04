const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      batteryLevel.textContent = battery.level * 100 + "%";
      batteryCharging.textContent = battery.charging ? "Yes" : "No";
      batteryChargingTime.textContent = battery.chargingTime + " seconds";
      batteryDisChargingTime.textContent = battery.dischargingTime + " seconds";
    });
  }
};

battery();
