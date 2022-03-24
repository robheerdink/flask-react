import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()


class Channel(Base):

    __tablename__ = 'channel'

    id = sa.Column(sa.Integer(), autoincrement=True, primary_key=True)
    name = sa.Column(sa.String(), nullable=False)
    title = sa.Column(sa.String(), nullable=False)
    timezone = sa.Column(sa.String(), nullable=False)


class Program(Base):

    __tablename__ = 'program'

    id = sa.Column(sa.Integer(), autoincrement=True, primary_key=True)
    name = sa.Column(sa.String(), nullable=False)
    title = sa.Column(sa.String(), nullable=False)
    description = sa.Column(sa.String(), nullable=False)
    genre = sa.Column(sa.String(), server_default='music')
    rating = sa.Column(sa.String(), server_default='nr')


class Schedule(Base):

    __tablename__ = 'schedule'

    id = sa.Column(sa.Integer(), autoincrement=True, primary_key=True)
    program_id = sa.Column(sa.Integer(), nullable=False, sa.ForeignKey('program.id'))
    channel_id = sa.Column(sa.Integer(), nullable=False, sa.ForeignKey('channel.id'))
    start = sa.Column(sa.TIMESTAMP(), nullable=False)
    end = sa.Column(sa.TIMESTAMP(), nullable=False)


class TemplateList(Base):

    __tablename__ = 'template_list'

    id = sa.Column(sa.Integer(), autoincrement=True, primary_key=True, sa.ForeignKey('template.id'))
    schedule_id = sa.Column(sa.Integer(), nullable=False, unique=True, sa.ForeignKey('schedule.id'))


class Template(Base):

    __tablename__ = 'template'

    id = sa.Column(sa.Integer(), primary_key=True)
    name = sa.Column(sa.String(), nullable=False)
    description = sa.Column(sa.String(), nullable=False)
