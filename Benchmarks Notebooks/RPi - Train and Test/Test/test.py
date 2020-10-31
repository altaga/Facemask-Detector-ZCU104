# import the necessary packages
from picamera.array import PiRGBArray
from tflite_runtime.interpreter import Interpreter
import picamera
from PIL import Image
import io
import numpy as np
import time
import cv2
# initialize the camera and grab a reference to the raw camera capture
# allow the camera to warmup
time.sleep(0.1)
# capture frames from the camera
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
interpreter = Interpreter("converted_model.tflite")
interpreter.allocate_tensors()

with picamera.PiCamera(resolution=(640, 480), framerate=30) as camera:
    try:
        stream = io.BytesIO()
        for _ in camera.capture_continuous(stream, format='jpeg', use_video_port=True):
            image = Image.open(stream)
            image.save("temp.jpg")
            frame = cv2.imread('temp.jpg')
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            faces = face_cascade.detectMultiScale(gray, 1.3, 5)
            marker = 0
            for (x,y,w,h) in faces:
                if(w>109):
                    start_time = time.time()
                    raw_data = []
                    roi_gray = gray[y:y+h, x:x+w]
                    roi_gray = cv2.resize(roi_gray, (64,64), interpolation = cv2.INTER_AREA)
                    roi_gray = roi_gray/255.0
                    raw_data.append(roi_gray)
                    raw_data = np.array(raw_data, dtype="float32")
                    raw_data = np.expand_dims(raw_data, axis=3)
                    input_index = interpreter.get_input_details()[0]["index"]
                    output_index = interpreter.get_output_details()[0]["index"]
                    interpreter.set_tensor(input_index, raw_data)
                    interpreter.invoke()
                    predictions = interpreter.get_tensor(output_index)
                    predict=np.argmax(predictions[0])
                    print("FPS: ", 1.0 / (time.time() - start_time))
                    frame = cv2.putText(frame, str(1.0 / (time.time() - start_time)), (0,30),cv2.FONT_HERSHEY_SIMPLEX, 1, (0,255,0), 2, cv2.LINE_AA)
                    print(predict)
                    if(predict):
                        frame = cv2.putText(frame, str("Facemask :)"), (x,y-5),cv2.FONT_HERSHEY_SIMPLEX, 1, (0,255,0), 2, cv2.LINE_AA)
                        cv2.rectangle(frame,(x,y),(x+w,y+h),(0,255,0),2)
                    else:
                        frame = cv2.putText(frame, str("Facemask X"), (x,y-5),cv2.FONT_HERSHEY_SIMPLEX, 1, (0,0,255), 2, cv2.LINE_AA)
                        cv2.rectangle(frame,(x,y),(x+w,y+h),(0,0,255),2)
            cv2.imshow("Detector", frame)
            stream.seek(0)
            stream.truncate()
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
    finally:
        ...