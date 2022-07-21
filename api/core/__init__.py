from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import logging

app = Flask(__name__,)
app.config.from_object('config.Config')
app.static_folder = app.config.get('STATIC_FOLDER')
app.static_url_path = app.config.get('STATIC_URL_PATH')

logging.getLogger("werkzeug").setLevel(logging.WARNING)
logging.basicConfig(format='%(levelname)s:%(message)s', level=logging.DEBUG)

logging.info("--------------------------")
logging.info(app.static_folder)
logging.info(app.static_url_path)
logging.info("--------------------------")

db = SQLAlchemy()
db.init_app(app)
with app.app_context():
    db.create_all()

ma = Marshmallow()

# import at the end to prevent circular dependency
import core.routes
