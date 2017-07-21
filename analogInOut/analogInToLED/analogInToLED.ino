int potPin = A0;
int ledPin = 3;
int potVal;

void setup() {
  // put your setup code here, to run once:
  pinMode(ledPin, OUTPUT);
  
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  potVal = analogRead(potPin);
  delay(2);

  int ledBright = potVal / 4;

  analogWrite(ledPin, ledBright);

  Serial.print("potVal : ");
  Serial.print(potVal);
  Serial.print(", ledBright : ");
  Serial.println(ledBright);
  
}
