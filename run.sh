python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic
gunicorn  --worker-class gevent --certfile=cert.pem --keyfile=privkey.pem --bind 0.0.0.0:8000 officialWebsite.config.wsgi:application
