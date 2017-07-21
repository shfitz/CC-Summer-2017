int buzzPin = 3;

void setup() {
  // put your setup code here, to run once:
  for ( int x = 0; x < 3; x++) {
    tone(buzzPin, 440);
    delay(1000);
    noTone(buzzPin);
    delay(1000);
  }
}

void loop() {
  // put your main code here, to run repeatedly:

}
