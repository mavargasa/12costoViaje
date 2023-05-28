function calcularCostoTotal() {
  var tipoVehiculo = document.getElementById("tipo-vehiculo").value;
  var distancia = parseFloat(document.getElementById("distancia").value);
  var litrosConsumidos = parseFloat(document.getElementById("litros-consumidos").value);

  var precioPorKm = 0;

  if (tipoVehiculo === "coche") {
      precioPorKm = 0.20;
  } else if (tipoVehiculo === "moto") {
      precioPorKm = 0.10;
  } else if (tipoVehiculo === "autobus") {
      precioPorKm = 0.50;
  }

  var costoTotal = (precioPorKm * distancia);

  if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
      costoTotal += 5;
  } else if (litrosConsumidos > 100) {
      costoTotal += 10;
  }

  document.getElementById("costo-total").textContent = "Total a pagar: $" + costoTotal.toFixed(2);
}