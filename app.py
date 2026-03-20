from flask import Flask, render_template, jsonify
import requests

import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

SLACK_TOKEN = "SLACK_TOKEN"
CHANNEL = "general"


@app.route("/")
@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


@app.route("/product")
def product():
    return render_template("product.html")


@app.route("/store")
def store():
    return render_template("store.html")


@app.route("/visitors")
def visitors():
    return render_template("visitors.html")


@app.route("/calendar")
def calendar():
    return render_template("calendar.html")


@app.route("/messages")
def messages():
    return render_template("messages.html")


@app.route("/settings")
def settings():
    return render_template("settings.html")


@app.route("/api/slack/messages")
def slack_messages():

    url = "https://slack.com/api/conversations.history"

    headers = {
        "Authorization": f"Bearer {SLACK_TOKEN}"
    }

    params = {
        "channel": CHANNEL,
        "limit": 20
    }

    r = requests.get(url, headers=headers, params=params)
    data = r.json()

    return jsonify(data["messages"])


if __name__ == "__main__":
    app.run(debug=True)

import os
import requests
from flask import jsonify

import os

SLACK_TOKEN = os.environ.get("SLACK_TOKEN")
CHANNEL_ID = "C0AL5QNGA0K"


@app.route("/api/slack/messages")
def get_slack_messages():

    url = "https://slack.com/api/conversations.history"

    headers = {
        "Authorization": f"Bearer {SLACK_TOKEN}"
    }

    params = {
        "channel": CHANNEL_ID,
        "limit": 30
    }

    response = requests.get(url, headers=headers, params=params)
    data = response.json()

    return jsonify(data["messages"])
