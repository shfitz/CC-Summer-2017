int ldrPin = A0;
int ledPin = 3;
int ldrVal;

void setup() {
  // put your setup code here, to run once:
  pinMode(ledPin, OUTPUT);
  
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  ldrVal = analogRead(ldrPin);
  delay(2);

  int ledBright = map(ldrVal, 40, 800, 0, 255);

  ledBright = constrain(ledBright, 0, 255);
  
  analogWrite(ledPin, ledBright);

  Serial.print("ldrVal : ");
  Serial.print(ldrVal);
  Serial.print(", ledBright : ");
  Serial.println(ledBright);
  
}
