import sys
from faker import Faker
from core.models import Channel, Program, db
from core import app


def create_fake_channels(n):
    faker = Faker()
    for i in range(n):
        country = faker.country()
        data = Channel(
            name=country,
            title=country,
            timezone=faker.name()
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
        print('Pass number of fake entries and model name eg: python create-fake-data.py 1000 programs')
        sys.exit(1)

    # get app context
    app.app_context().push()

    # create fake data depending on CLI param model and number of entries we want to create
    number = int(sys.argv[1])
    model = sys.argv[2]
    if model == 'channel':
        create_fake_channels(number)
    elif model == 'program':
        create_fake_programs(number)
    else:
        print("unkown model name")
