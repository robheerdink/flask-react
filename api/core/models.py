"""Data models."""
from core import db, ma


class Channel(db.Model):
    __tablename__ = 'channel'
    id = db.Column(db.Integer(), autoincrement=True, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    title = db.Column(db.String(), nullable=False)
    timezone = db.Column(db.String(), nullable=False)

    def __repr__(self):
        return '{}'.format(self.name)


class ChannelSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "title", "timezone")


class Program(db.Model):
    __tablename__ = 'program'
    id = db.Column(db.Integer(), autoincrement=True, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    title = db.Column(db.String(), nullable=False)
    description = db.Column(db.String(), nullable=False)
    genre = db.Column(db.String(), server_default='music')
    rating = db.Column(db.String(), server_default='nr')

    def __repr__(self):
        return '{}'.format(self.name)


class ProgramSchema(ma.Schema):
    class Meta:
        fields = ("name", "title", "description", "genre", "rating")


class Schedule(db.Model):
    __tablename__ = 'schedule'
    id = db.Column(db.Integer(), autoincrement=True, primary_key=True)
    program_id = db.Column(db.Integer(), db.ForeignKey('program.id'), nullable=False)
    channel_id = db.Column(db.Integer(), db.ForeignKey('channel.id'), nullable=False)
    start = db.Column(db.TIMESTAMP(), nullable=False)
    end = db.Column(db.TIMESTAMP(), nullable=False)

    def __repr__(self):
        return 'id:{}, program_id:{}, channel_id:{}'.format(self.id, self.program_id, self.channel_id)


class ScheduleSchema(ma.Schema):
    class Meta:
        fields = ("program_id", "channel_id", "start", "end")


class Template(db.Model):
    __tablename__ = 'template'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(), nullable=False)
    description = db.Column(db.String(), nullable=False)

    def __repr__(self):
        return '{}'.format(self.name)


class TemplateSchema(ma.Schema):
    class Meta:
        fields = ("name", "description")


class TemplateList(db.Model):
    __tablename__ = 'template_list'
    id = db.Column(db.Integer(), db.ForeignKey('template.id'), autoincrement=True, primary_key=True)
    schedule_id = db.Column(db.Integer(), db.ForeignKey('schedule.id'), nullable=False, unique=True)

    def __repr__(self):
        return 'id:{}, schedule_id:{}'.format(self.id, self.schedule_id)


class TemplateListSchema(ma.Schema):
    class Meta:
        fields = ("id", "schedule_id")


# schema's, which have the exposed fields
channel = ChannelSchema()
channels = ChannelSchema(many=True)

program = ProgramSchema()
programs = ProgramSchema(many=True)

schedule = ScheduleSchema
schedules = ScheduleSchema(many=True)

template = TemplateSchema()
templates = TemplateSchema(many=True)

templateList = TemplateListSchema()
templatesList = TemplateListSchema(many=True)