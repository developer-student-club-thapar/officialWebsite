# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.8-slim-buster

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

# Install pip requirements
COPY requirements.txt .
RUN pip install gunicorn[gevent]
RUN python -m pip install -r requirements.txt

WORKDIR /app
COPY . /app
RUN mkdir officialWebsite/database
RUN mkdir officialWebsite/media

# remove client folder from image
RUN rm -rf officialWebsite/client

# remove automatesSetup folder from the image
RUN rm -rf officialWebsite/automatedSetup

# Remove playbooks
RUN rm -rf officialWebsite/playbooks

# remove the dockerfile and compose file
RUN rm -f Dockerfile
RUN rm -f .dockerignore
RUN rm -f docker-compose.yml 

# Creates a non-root user with an explicit UID and adds permission to access the /app folder
# For more info, please refer to https://aka.ms/vscode-docker-python-configure-containers
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER root


# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
CMD ["sh", "run.sh"]