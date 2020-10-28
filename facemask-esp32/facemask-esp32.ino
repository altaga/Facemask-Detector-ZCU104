#include "images.h"
#include "Ultrasonic.h"
#include <ESP32Servo.h>
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>
#define uS_TO_S_FACTOR 1000000 /* Conversion factor for micro seconds to seconds */
#define TIME_TO_SLEEP 60 /* Time ESP32 will go to sleep (in seconds) */

// Define digital pins

#define SERVICE_UUID        "91e8811b-184e-4f7f-bf3e-c834af88d46f"
#define CHARACTERISTIC_UUID "7325577d-a662-4789-bc62-24dfb14e5759"

#define PIN_RESET 27
#define PIN_SCE   26
#define PIN_DC    25
#define PIN_SDIN  33
#define PIN_SCLK  32

#define LCD_C     LOW
#define LCD_D     HIGH

// Bounds of the display

#define LCD_X     84
#define LCD_Y     48

Servo myservo;
Ultrasonic ultrasonic(19);
int servoPin = 18;
bool deviceConnected = false;
BLEServer* pServer = NULL;

void LcdBitmap(char my_array[]);

class MyServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      deviceConnected = true;
      BLEDevice::startAdvertising();
    };

    void onDisconnect(BLEServer* pServer) {
      deviceConnected = false;
    }
};

class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      String temp = pCharacteristic->getValue().c_str();
      Serial.println(" ");
      Serial.println(temp);
      if (temp == "0") {
        Serial.println("Facemask OFF");
        pCharacteristic->setValue("Hello From Dispenser 1");

        LcdBitmap(sam);
        for (int x = 179; x > 45; --x) {
          myservo.write(x);
          delay(20);
        }
        delay(10000);
        for (int x = 45; x < 179; x++) {
          myservo.write(x);
          delay(20);
        }
        pCharacteristic->setValue("Hello From Dispenser 1");
        LcdBitmap(main);
      }
      else if (temp == "1") {
        Serial.println("Facemask ON");
        pCharacteristic->setValue("Hello From Dispenser 1");
        LcdBitmap(wel);
        delay(10000);
        LcdBitmap(main);
      }
      else {
        Serial.println("Main");
        pCharacteristic->setValue("Hello From Dispenser 1");
        LcdBitmap(main);
      }
      delay(500);
    }
};

void startBLE() {
  BLEDevice::init("Facemaskdispenser");
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());
  BLEService *pService = pServer->createService(SERVICE_UUID);
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  pCharacteristic->setValue("Hello From Dispenser 1");
  pCharacteristic->setCallbacks(new MyCallbacks());
  pService->start();
  // BLEAdvertising *pAdvertising = pServer->getAdvertising();  // this still is working for backward compatibility
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // functions that help with iPhone connections issue
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
}

void LcdClear(void)
{
  for (int index = 0; index < LCD_X * LCD_Y / 8; index++)
  {
    LcdWrite(LCD_D, 0x00);
  }
}

void LcdInitialise(void)
{
  pinMode(PIN_SCE, OUTPUT);
  pinMode(PIN_RESET, OUTPUT);
  pinMode(PIN_DC, OUTPUT);
  pinMode(PIN_SDIN, OUTPUT);
  pinMode(PIN_SCLK, OUTPUT);
  digitalWrite(PIN_RESET, LOW);
  digitalWrite(PIN_RESET, HIGH);
  LcdWrite(LCD_C, 0x21 );  // LCD Extended Commands.
  LcdWrite(LCD_C, 0xB1 );  // Set LCD Vop (Contrast).
  LcdWrite(LCD_C, 0x04 );  // Set Temp coefficent. //0x04
  LcdWrite(LCD_C, 0x14 );  // LCD bias mode 1:48. //0x13
  LcdWrite(LCD_C, 0x0C );  // LCD in normal mode.
  LcdWrite(LCD_C, 0x20 );
  LcdWrite(LCD_C, 0x0C );
}

void gotoXY(int x, int y)
{
  LcdWrite( 0, 0x80 | x);  // Column.
  LcdWrite( 0, 0x40 | y);  // Row.

}
void LcdWrite(byte dc, byte data)
{
  digitalWrite(PIN_DC, dc);
  digitalWrite(PIN_SCE, LOW);
  shiftOut(PIN_SDIN, PIN_SCLK, MSBFIRST, data);
  digitalWrite(PIN_SCE, HIGH);
}

void LcdBitmap(char my_array[]) {
  LcdClear();
  for (int index = 0 ; index < (LCD_X * LCD_Y / 8) ; index++)
    LcdWrite(LCD_D, my_array[index]);
}

void setup(void)
{
  Serial.begin(9600);
  pinMode(5, OUTPUT);
  digitalWrite(5, LOW);
  ESP32PWM::allocateTimer(0);
  ESP32PWM::allocateTimer(1);
  ESP32PWM::allocateTimer(2);
  ESP32PWM::allocateTimer(3);
  myservo.setPeriodHertz(50);    // standard 50 hz servo
  myservo.attach(servoPin, 1000, 2000); // attaches the servo on pin 18 to the servo object
  myservo.write(175);
  LcdInitialise();
  LcdClear();
  gotoXY(0, 0);
  LcdBitmap(main);
  startBLE();
  digitalWrite(5, HIGH);
  Serial.println("BLE OK");

}

void loop(void)
{
  long RangeInCentimeters;
  RangeInCentimeters = ultrasonic.MeasureInCentimeters(); // two measurements should keep an interval
  if (RangeInCentimeters < 3) {
    for (int x = 179; x > 45; --x) {
      myservo.write(x);
      delay(20);
    }
    delay(5000);
    for (int x = 45; x < 179; x++) {
      myservo.write(x);
      delay(20);
    }
  }
  delay(100);
}
