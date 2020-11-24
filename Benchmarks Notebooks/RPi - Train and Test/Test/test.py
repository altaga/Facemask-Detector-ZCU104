# import the necessary packages
from picamera.array import PiRGBArray
from tflite_runtime.interpreter import Interpreter
import picamera
from PIL import Image
import io
import numpy as np
import time
import cv2

time.sleep(0.1)

# Import haarcascade model for use with opencv and the tflite model for the neural network..

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
interpreter = Interpreter("converted_model.tflite")
interpreter.allocate_tensors()

# We enable the camera to input images.

with picamera.PiCamera(resolution=(640, 480), framerate=30) as camera:
    try:
        # Reading input image
        stream = io.BytesIO()
        for _ in camera.capture_continuous(stream, format='jpeg', use_video_port=True):
            image = Image.open(stream)
            image.save("temp.jpg")
            # Converting the image to grayscale
            frame = cv2.imread('temp.jpg')
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            faces = face_cascade.detectMultiScale(gray, 1.3, 5)
            marker = 0
            # Loop face detection
            for (x,y,w,h) in faces:
                if(w>109): # Detecting only the closest faces
                    # Taking the processing times to get the FPS
                    start_time = time.time()
                    # Processing the image to go through the TFlite model
                    raw_data = []
                    roi_gray = gray[y:y+h, x:x+w]
                    roi_gray = cv2.resize(roi_gray, (64,64), interpolation = cv2.INTER_AREA)
                    roi_gray = roi_gray/255.0
                    raw_data.append(roi_gray)
                    raw_data = np.array(raw_data, dtype="float32")
                    raw_data = np.expand_dims(raw_data, axis=3)
                    # Passing the image through the neural network.
                    input_index = interpreter.get_input_details()[0]["index"]
                    output_index = interpreter.get_output_details()[0]["index"]
                    interpreter.set_tensor(input_index, raw_data)
                    interpreter.invoke()
                    predictions = interpreter.get_tensor(output_index)
                    predict=np.argmax(predictions[0])
                    # Calculating the FPS
                    print("FPS: ", 1.0 / (time.time() - start_time))
                    frame = cv2.putText(frame, str(1.0 / (time.time() - start_time)), (0,30),cv2.FONT_HERSHEY_SIMPLEX, 1, (0,255,0), 2, cv2.LINE_AA)
                    print(predict)
                    # Attach the result
                    if(predict):
                        frame = cv2.putText(frame, str("Facemask :)"), (x,y-5),cv2.FONT_HERSHEY_SIMPLEX, 1, (0,255,0), 2, cv2.LINE_AA)
                        cv2.rectangle(frame,(x,y),(x+w,y+h),(0,255,0),2)
                    else:
                        frame = cv2.putText(frame, str("Facemask X"), (x,y-5),cv2.FONT_HERSHEY_SIMPLEX, 1, (0,0,255), 2, cv2.LINE_AA)
                        cv2.rectangle(frame,(x,y),(x+w,y+h),(0,0,255),2)
            # Display the result
            cv2.imshow("Detector", frame)
            stream.seek(0)
            stream.truncate()
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
    finally:
        ...