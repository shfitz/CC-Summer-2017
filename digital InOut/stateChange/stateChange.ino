// adapted from the debounce example

// constants won't change. They're used here to set pin numbers:
const int buttonPin = 3;    // the number of the pushbutton pin
const int ledPin = 2;      // the number of the LED pin

// Variables will change:
int ledState = HIGH;         // the current state of the output pin
int buttonState;             // the current reading from the input pin
int lastButtonState = LOW;   // the previous reading from the input pin

void setup() {
  pinMode(buttonPin, INPUT); // set the switch pin as an input
  pinMode(ledPin, OUTPUT);

  // set initial LED state
  digitalWrite(ledPin, ledState);
}

void loop() {
  // read the state of the switch into a local variable:
  int reading = digitalRead(buttonPin);


  // if the button state has changed:
  if (reading != lastButtonState) {
    // only toggle the LED if the new button state is HIGH
    if (reading == HIGH) {
      ledState = !ledState; // change the state of the LED
    }
  }

  // set the LED:
  digitalWrite(ledPin, ledState);

  // save the reading.  Next time through the loop,
  // it'll be the lastButtonState:
  lastButtonState = reading;
}

