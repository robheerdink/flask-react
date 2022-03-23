import time
from flask import Flask

#app = Flask(__name__)

"""
static_folder > ponit to output from > npm run build 
static_url_path > remove the default static prefix 
localhost:5000/static/inddex.html to localhost:5000/index.html
"""
app = Flask(__name__, static_folder='../build', static_url_path='/')



@app.route('/api//time')
def get_current_time():
    return {'time': time.time()}


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

"""
localhost:3000
localhost:5000
localhost:5000/index.tml

localhost:5000/api/time
localhost:5000/page2 >> client side rendering > refresh >> page does not exist >> flask reroutes to index.html
"""