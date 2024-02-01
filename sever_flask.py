from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'  # Setting URI for the database
db = SQLAlchemy(app)

class Stadium(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(50), nullable=False)
    ticket = db.Column(db.Float, nullable=False)
    capacity = db.Column(db.Integer, nullable=False)

# Request to get all stadiums
@app.route('/stadiums', methods=['GET'])
def get_all_stadiums():
    stadiums = Stadium.query.all()
    stadiums_list = [{'id': stadium.id, 'title': stadium.title, 'location': stadium.location,
                      'ticket': stadium.ticket, 'capacity': stadium.capacity} for stadium in stadiums]
    return jsonify({'stadiums': stadiums_list})

# Request to get a specific stadium
@app.route('/stadiums/<int:stadium_id>', methods=['GET'])
def get_stadium(stadium_id):
    stadium = Stadium.query.get_or_404(stadium_id)
    return jsonify({'id': stadium.id, 'title': stadium.title, 'location': stadium.location,
                    'ticket': stadium.ticket, 'capacity': stadium.capacity})

# Request to create a new stadium
@app.route('/stadiums', methods=['POST'])
def create_stadium():
    data = request.get_json()
    new_stadium = Stadium(title=data['title'], location=data['location'],
                          ticket=data['ticket'], capacity=data['capacity'])
    db.session.add(new_stadium)
    db.session.commit()
    return jsonify({'message': 'Stadium created successfully!'}), 201


# Request to update a stadium
@app.route('/stadiums/<int:stadium_id>', methods=['PUT'])
def update_stadium(stadium_id):
    stadium = Stadium.query.get_or_404(stadium_id)
    data = request.get_json()
    stadium.title = data['title']
    stadium.location = data['location']
    stadium.ticket = data['ticket']
    stadium.capacity = data['capacity']
    db.session.commit()
    return jsonify({'message': 'Stadium updated successfully!'})

# Request to delete a stadium
@app.route('/stadiums/<int:stadium_id>', methods=['DELETE'])
def delete_stadium(stadium_id):
    stadium = Stadium.query.get_or_404(stadium_id)
    db.session.delete(stadium)
    db.session.commit()
    return jsonify({'message': 'Stadium deleted successfully!'})

if __name__ == '__main__':
    app.run(debug=True, port=5500)
    db.create_all()  # Creating database tables
