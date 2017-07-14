// this sketch mimics serial and parallel connections
// with the same circuit but in code

int LEDpin = 2;
int buttonPin1 = 3;
int buttonPin2 = 4;

void setup() {
  // put your setup code here, to run once:
  pinMode(LEDpin, OUTPUT);
  pinMode(buttonPin1, INPUT);
  pinMode(buttonPin2, INPUT);

}

void loop() {
  // put your main code here, to run repeatedly:

  int buttonVal1 = digitalRead(buttonPin1);
  int buttonVal2 = digitalRead(buttonPin2);
  
//  you can press either button for the light to change
//  if (buttonVal1 == HIGH || buttonVal2 == HIGH) {

// you must press both buttons for the light to change
  if (buttonVal1 == HIGH && buttonVal2 == HIGH) {
    digitalWrite(LEDpin, LOW);
  } else {
    digitalWrite(LEDpin, HIGH);
  }

}
