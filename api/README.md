```
Example flask template with
- Postgress database
- SqlAlchemy
- Models 
- generate models
- generate data

python -m venv venv
. venv/bin/activate

pip install --upgrade pip
pip install Flask
pip install Flask-SQLAlchemy
pip install flask-marshmallow
pip install marshmallow-sqlalchemy
pip install psycopg2-binary
pip install python-dotenv

optional, only needed for devlopment
pip install Faker
pip install omymodels

add e.g 100000 rows for model channel:
python create-fake-data.py 100000 channel


Debugging:
Because venv is not in root of project most ide's dont detect it automaticly

vscode see cwd and pythonPath 
.vscode/launch.json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python: Flask Run / Debug",
            "type": "python",
            "request": "launch",
            "cwd": "${workspaceRoot}/api",
            "pythonPath": "${workspaceRoot}/api/venv/bin/python",
            "program": "run.py",
            "env": {
                "FLASK_APP": "run.py",
                "FLASK_ENV": "development"
            },
            "args": [
                "run",
                "--no-debugger"
            ]
        }
    ]
}

pycharm: ctrl + alt +s >> project structure >> select api as sources

```
