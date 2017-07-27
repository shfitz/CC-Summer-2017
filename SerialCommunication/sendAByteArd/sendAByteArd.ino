// fade an LED
const int ledpin = 3;
void setup() {
  Serial.begin(9600);// initialize serial communications
  pinMode(ledpin, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {//this waits for byte from P5.js
    int input = Serial.read();  // read the input from the buffer
    analogWrite(ledpin, input); // write the value to an led
  }
}
