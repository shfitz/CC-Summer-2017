// this sketch blinks an led connected to pin 2
// in series with a resistor

void setup() {
  // put your setup code here, to run once:
  pinMode(2, OUTPUT); // configure pin 2 as an output
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(2, HIGH); // write 5V to pin 2
  delay(1000);  // wait for one second
  digitalWrite(2, LOW); // write 0V to pin 2
  delay(1000);
}
