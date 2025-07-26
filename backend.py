import json
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Enable CORS for frontend communication

# Hardcoded PUBG/BGMI Esports Data (Simplified for demonstration)
# This data mimics what you would fetch from a database or external API
EVENTS_DATA = {
    "bgis2023": {
        "id": "bgis2023",
        "name": "Battlegrounds Mobile India Series (BGIS) 2023",
        "year": 2023,
        "month": "October",
        "dates": "August 31 - October 15, 2023",
        "location": "Sardar Vallabhbhai Patel Indoor Stadium, Mumbai (Grand Finals)",
        "prizePool": "₹2,00,00,000 INR (approx. $240,000 USD)",
        "winner": "Gladiators Esports",
        "runnerUp": "Big Brother Esports",
        "mvp": "DeltaPG (Gladiators Esports)",
        "teams": [
            {"name": "Gladiators Esports", "players": ["DeltaPG", "Destro", "Justin", "Shogun"]},
            {"name": "Big Brother Esports", "players": ["Saif", "Asif", "Vampire", "Ninjajod"]},
            {"name": "Team XSpark", "players": ["Pukar", "Aditya", "ScoutOP", "DreamS"]},
            {"name": "Blind Esports", "players": ["Manya", "Nakul", "Joker", "Aadi"]},
            {"name": "Gods Reign", "players": ["Aquanox", "Jelly", "Shadow", "Smokey"]},
            {"name": "Medal Esports", "players": ["Paradox", "Topdawg", "Encore", "KyOya"]},
            {"name": "Revenant Esports", "players": ["Sensei", "MJ", "Apollo", "Fierce"]},
            {"name": "TWM Gaming", "players": ["Roxx", "Immortal", "Blaze", "Zigsaw"]},
            {"name": "OR Esports", "players": ["Joker", "Anto", "Iconic", "Robin"]},
            {"name": "Midwave Esports", "players": ["Maxy", "Tsunami", "Sparky", "Godbot"]},
            {"name": "GlitchXReborn", "players": ["Duke", "Shubh", "Viper", "Zeref"]},
            {"name": "MICI Esports", "players": ["KingKO", "SpiderJOD", "Skillful", "KAR4N"]},
            {"name": "Growing Strong", "players": ["ParaBTC", "SeviPlays", "Saikat09", "Krunal"]},
            {"name": "4 Aggressive Man", "players": ["P4SSWORD", "Commando", "Ace", "Faith"]},
            {"name": "Night OWLS", "players": ["EclipseOP", "Sparkey", "Godbott", "Zack"]},
            {"name": "CS Esports X One Power", "players": ["Omega", "Hector", "Fury", "ScaryJod"]}
        ],
        "matches": "18 matches in Grand Finals over 3 days"
    },
    "bgms2022": {
        "id": "bgms2022",
        "name": "BGMI Masters Series (BGMS) 2022",
        "year": 2022,
        "month": "July",
        "dates": "June 24 - July 17, 2022",
        "location": "Offline (Delhi NCR)",
        "prizePool": "₹1,50,00,000 INR",
        "winner": "Global Esports",
        "runnerUp": "GodLike Esports",
        "mvp": "JONATHAN (GodLike Esports)",
        "teams": [
            {"name": "Global Esports", "players": ["Mavi", "Jokerr", "Roxx", "Sayyam"]},
            {"name": "GodLike Esports", "players": ["Jonathan", "Neyoo", "ZGOD", "ClutchGod"]},
            {"name": "Team SouL", "players": ["Omega", "Hector", "Akshat", "Goblin"]},
            {"name": "Orangutan", "players": ["Akash", "Ash", "MJ", "Tryhard"]},
            {"name": "Enigma Gaming", "players": ["Maxy", "Tsunami", "Sparky", "Godbot"]},
            {"name": "Blind Esports", "players": ["Manya", "Nakul", "Joker", "Aadi"]}
        ],
        "matches": "League Stage + Weekly Finals + Grand Finals"
    },
    "bgis2021": {
        "id": "bgis2021",
        "name": "Battlegrounds Mobile India Series (BGIS) 2021",
        "year": 2021,
        "month": "January (Finals)",
        "dates": "December 2, 2021 - January 16, 2022",
        "location": "Online (Grand Finals)",
        "prizePool": "₹1,00,00,000 INR",
        "winner": "Skylightz Gaming",
        "runnerUp": "TSM India",
        "mvp": "Saif (Skylightz Gaming)",
        "teams": [
            {"name": "Skylightz Gaming", "players": ["Saif", "Gamlaboy", "Pukar", "Destro"]},
            {"name": "TSM India", "players": ["Jonathan", "Neyoo", "ZGOD", "AquaNox"]},
            {"name": "GodLike Esports", "players": ["ClutchGod", "Vexe", "Gill", "Shadow"]},
            {"name": "Team XO", "players": ["Sensei", "Snax", "Punkk", "Immortal"]},
            {"name": "Revenant Esports", "players": ["Apollo", "Fierce", "Sensei", "MJ"]},
            {"name": "Blind Esports", "players": ["Manya", "Nakul", "Joker", "Aadi"]}
        ],
        "matches": "Multiple online qualifiers and final rounds"
    }
}

@app.route('/api/events', methods=['GET'])
def get_events():
    """
    Returns a list of all available BGMI/PUBG events with basic details.
    """
    event_list = []
    for event_id, data in EVENTS_DATA.items():
        event_list.append({
            "id": data["id"],
            "name": data["name"],
            "year": data["year"],
            "month": data["month"]
        })
    return jsonify(event_list)

@app.route('/api/event/<string:event_id>', methods=['GET'])
def get_event_details(event_id):
    """
    Returns detailed information for a specific event based on its ID.
    """
    event = EVENTS_DATA.get(event_id)
    if event:
        return jsonify(event)
    else:
        return jsonify({"error": "Event not found"}), 404

if __name__ == '__main__':
    # To run this Flask app:
    # 1. Save it as a Python file (e.g., `backend.py`).
    # 2. Make sure you have Flask and Flask-CORS installed:
    #    pip install Flask Flask-CORS
    # 3. Run from your terminal:
    #    python backend.py
    # The server will run on http://127.0.0.1:5000/
    app.run(debug=True) # debug=True allows for automatic reloading on code changes
