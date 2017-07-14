int LEDpin = 2;
int buttonPin = 3;

void setup() {
  // put your setup code here, to run once:
  pinMode(LEDpin, OUTPUT);
  pinMode(buttonPin, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:

  int buttonVal = digitalRead(buttonPin);

  if (buttonVal == HIGH) {
    digitalWrite(LEDpin, LOW);
  } else {
    digitalWrite(LEDpin, HIGH);
  }

}
