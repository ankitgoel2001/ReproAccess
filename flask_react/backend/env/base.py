from flask import Flask, redirect

app = Flask(__name__)

@app.route('/')
def myProfile():
    responseBody = {
        "name": "Nagato",
        "about": "Hello! I'm a full stack developer"
    }

    return responseBody

if __name__=='__main__':
    app.run(debug = True)
