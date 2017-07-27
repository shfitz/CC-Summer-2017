void setup() {
  Serial.begin(9600);
  pinMode(7, INPUT);

  while (Serial.available() <= 0) {
    Serial.println("hello");
    delay(300);
  }

}

void loop() {
  if (Serial.available() > 0) {
    int inByte = Serial.read();
    //we did it to slow things down for synchronization
    //notice we didn't even put the number in anything

    int pot1 = analogRead(A0);
    int pot2 = analogRead(A1);
    int button = digitalRead(7);
    Serial.print(pot1);  //notice I did not say println
    Serial.print(",");
    Serial.print(pot2);
    Serial.print(","); //using the comma as a delimiter
    Serial.println(button);
  }
}
