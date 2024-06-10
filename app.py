from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/game')
def game():
    return render_template('game.html')

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')