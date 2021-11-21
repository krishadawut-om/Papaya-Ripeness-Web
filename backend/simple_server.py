import os
from flask import Flask, request, Response
import jsonpickle
import tensorflow as tf
import numpy as np
from werkzeug.utils import secure_filename
from flask_cors import CORS
import cv2


app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = 'upload'

model_path = 'P_model.h5'
model = tf.keras.models.load_model(model_path)

class_names =['Ripe', 'Partially Ripe', 'Unripe']

@app.route("/")
def home():
    return "Hello!"


@app.route('/upload', methods=['POST'])
def upload():
    try:
        imagefile = request.files.get('file')
        if imagefile:
            ffilename = secure_filename(imagefile.filename)
            print(ffilename)
            imagefile.save(os.path.join(app.config['UPLOAD_FOLDER'], ffilename))

        imagepath = 'upload' + '\\' + ffilename
        img = cv2.resize(cv2.imread(imagepath),(224,224))

        img_array = np.expand_dims(img, 0)        

        predictions = model.predict(img_array)
        # score = tf.nn.softmax(predictions[0])
        # print(score)

        result = "This image likely to belongs to {} with a {:.2f} percent confidence.".format(class_names[np.argmax(predictions[0])], 100 * np.max(predictions[0]))

        response = {'result': result}
        response_pickled = jsonpickle.encode(response)

        os.remove(imagepath)

        return Response(response=response_pickled, status=200, mimetype="application/json")

    except Exception as err:
        print(err)
        response = {'message': 'Error'}
        response_pickled = jsonpickle.encode(response)

        return Response(response=response_pickled, status=400, mimetype="application/json")

# start flask app
app.run(host="localhost", port=5000)