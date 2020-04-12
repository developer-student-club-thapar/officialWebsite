## Welcome to Contribute on the Backend code of DSC TIET Website

1. Create a virtualenv on your system using the following command
``` virtualenv -p python3.7 dsctiet_backend ```
This will create a virtualenv for you to install and manage the entire project

2. Git clone this repository

3. Then, activate the virtualenv by the following command
``` source dsctiet_backend/bin/activate ```

4. Change the working directory to the cloned repository and install all the requirements
``` pip install -r requirements.txt ```

5. Run the following commands to run the backend server <br />
``` python manage.py makemigrations ``` <br />
``` python manage.py migrate ``` <br />
``` python manage.py runserver ```
