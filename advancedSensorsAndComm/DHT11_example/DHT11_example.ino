// Example testing sketch for various DHT11 humidity/temperature sensor
// Written by ladyada, public domain
// modified by Scott Fitzgerald

#include "DHT.h"    // you'll need to include the library for the sensor
// it's called the "DHT sensor library" in the library manager
// you'll also need to get the "Adafruit Unified Sensor" library

#define DHTPIN 2     // what digital pin you're connected to
  // the library supports a number of these sensors
  // the one I used was the DHT11. You can read more about the 
  // various kinds here : https://learn.adafruit.com/dht
#define DHTTYPE DHT11  

// Initialize sensor
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  Serial.println("DHT11 test!");

  dht.begin(); // start the library
}

void loop() {
  // Wait a few seconds between measurements.
  delay(2000);

  // Reading temperature or humidity takes about 250 milliseconds!
  // Sensor readings may be 'old' (it's a very slow sensor)
  float h = dht.readHumidity();
  // Read temperature as Celsius (the default)
  float t = dht.readTemperature();
  // Read temperature as Fahrenheit (isFahrenheit = true)
  float f = dht.readTemperature(true);

  // Check if any reads failed and exit early
  // isnan() check to see if the value is a number
  // it returns 1 if it's not, 0 if it is
  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Humidity: ");
  Serial.print(h);
  Serial.print(" %\t");
  Serial.print("Temperature: ");
  Serial.print(t);
  Serial.print(" *C ");
  Serial.print(f);
  Serial.println(" *F");
}
