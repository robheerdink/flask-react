import sys
from faker import Faker
from core.models import Channel, Program, Schedule, Template, TemplateList, db
from core import app


def remove_channels():
    db.session.query(TemplateList).delete()
    db.session.query(Template).delete()
    db.session.query(Schedule).delete()
    db.session.query(Channel).delete()
    db.session.commit()


def remove_programs():
    db.session.query(TemplateList).delete()
    db.session.query(Template).delete()
    db.session.query(Schedule).delete()
    db.session.query(programs).delete()
    db.session.commit()

def create_fake_channels(n):
    faker = Faker()
    for i in range(n):
        country = faker.country()
        data = Channel(
            name="xite_" + country,
            title="XITE " + country,
            timezone=country
        )
        db.session.add(data)
    db.session.commit()
    print('Added {} fake channels to the database.'.format(n))

def create_fake_programs(n):
    faker = Faker()
    for i in range(n):
        name = faker.name()
        data = Program(
            name=name,
            title=name,
            description=faker.text(),
            genre=faker.color(),
            rating=faker.color()
        )
        db.session.add(data)
    db.session.commit()
    print('Added {} fake programs to the database.'.format(n))


if __name__ == '__main__':
    if len(sys.argv) <= 2:
        print('Pass number of fake entries and model name eg:'
        +'\npython create-fake-data.py channel 10000'
        +'\npython create-fake-data.py channel remove')
        sys.exit(1)

    # get app context
    app.app_context().push()

    # get params
    model = sys.argv[1]
    action = sys.argv[2]
    
    # Determine if we want to add records or remove all from model
    remove, add = False, 0
    if action == "remove":
        remove = True
    else:
        try:
            add=int(action)
            if add < 0:
                raise ValueError()
        except:
            print("second param is not a positive number or remove")
            sys.exit(1)

    if model == 'channel':
        if remove:
            remove_channels()
        else:
            create_fake_channels(add)

    elif model == 'program':
        if remove:
            remove_programs()
        else:
            create_fake_programs(add)

    else:
        print("unkown model name")
