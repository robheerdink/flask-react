import time
from flask import jsonify
from core import app
from core.models import *
"""
localhost:3000
localhost:5000
localhost:5000/index.tml
localhost:5000/api/time
localhost:5000/api/get_channels
localhost:5000/api/get_programs
localhost:5000/api/get_schedules

http://localhost:5000/api/channels
http://localhost:5000/api/channels?id=0
"""


@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}


@app.errorhandler(404)
def not_found(e):
    """ redirect unknown (client) routes, back to single page index """
    return app.send_static_file('index.html')


@app.route('/api/db')
def test_db():
    """ test if db is working """
    try:
        db.session.execute('SELECT 1')
        return "ok"
    except:
        return "error"





@app.route('/api/get_channels')
def get_channels_old():
    return jsonify(channels.dump(Channel.query.all()))


# @app.route('/get_programs')
# def get_programs():
#     return jsonify(programs.dump(Program.query.all()))


# @app.route('/get_schedules')
# def get_schedules():
#     return jsonify(schedules.dump(Schedule.query.all()))



@app.route('/api/channels', methods=["GET"])
def get_channels():
     return jsonify(channels.dump(Channel.query.all()))

@app.route('/api/channels/<int:id>', methods=["GET"])
def get_channel(id):
    return jsonify(channel.dump(Channel.query.get(id)))

@app.route('/api/channels', methods=["POST"])
def create_channel():
    pass

@app.route('/api/channels/<int:id>', methods=["PUT"])
def update_channel(id):
    pass

@app.route('/api/channels/<int:id>', methods=["DELETE"])
def remove_channel(id):
    pass

@app.route('/api/channels/<int:id>', methods=["DELETE"])
def remove_remove_all_channels(id):
    pass

@app.route('/api/channels/<string:title>', methods=["GET"])
def find_channel_by_title(title):
    pass

