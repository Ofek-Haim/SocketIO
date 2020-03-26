from flask import Flask, request, jsonify
from flask_socketio import SocketIO, send, emit
from flask_cors import CORS

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

socketio = SocketIO(app, cors_allowed_origins="*")


@app.route('/send-message', methods=["POST"])
def broadcast():
    message = request.get_json()["message"]
    socketio.emit('message', message, broadcast=True)
    return jsonify({"succeeded": True})


if __name__ == '__main__':
    socketio.run(app, host="0.0.0.0")
