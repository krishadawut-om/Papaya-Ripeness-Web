import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np
import cv2

model = tf.keras.models.load_model("P_model.h5")

img = cv2.resize(cv2.imread("C:\\Users\\YuukiFeya\\Downloads\\r3.jpg"),(224,224))

prediction = model.predict(np.expand_dims(img, axis=0))
print(prediction)