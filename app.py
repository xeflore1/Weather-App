from flask import Flask, jsonify
import requests
import os

app = Flask(__name__)

API_KEY = os.environ.get("OPENWEATHER_API_KEY")

@app.route("/weather/<city>")
def get_weather(city):
    if not API_KEY:
        return jsonify({"error": "API key not set"}), 500

    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(url)

    if response.status_code != 200:
        return jsonify({"error": "City not found"}), 404

    return jsonify(response.json())

if __name__ == "__main__":
    app.run(debug=True)