# Welcome to the contributions of DSC-TIET Official Website

We follow a systematic Git Workflow -

- Create a fork of this repo.
- Clone your fork of your repo on your pc.
- [Add Upstream to your clone](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- **Every change** that you do, it has to be on a branch. Commits on master would directly be closed.
- Make sure that before you create a new branch for new changes,[syncing with upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) is neccesary.

## Setup and running of project (Backend)

- Fork the repo and clone it.
- The project now uses `pipenv` to manage dependencies.
- Install [Pipenv](https://pypi.org/project/pipenv/) using the following command:
```bash
pip install pipenv
```
- Navigate to the project directory and initialize the environment using the following command -
```bash
pipenv shell --python 3.8
```
- The above step also activates the environment, for activating the environment in subsequent sessions type the following command:
```bash
pipenv shell
```
- At the root of your project directory <br>

```bash
pipenv install
pre-commit install
```

- This will setup the project requirements and pre-commit test hooks!

- After the above setup, run <br>
  `python manage.py makemigrations`
  `python manage.py migrate`

- Start the backend server
  `python manage.py runserver`
  Runs the backend server at default port `8000`.<br />
  Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

## Setup and running of project (Frontend)

- At your root directory run `yarn install` to install all the dependencies
- To start react dev server `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### Note

As the project now uses pipenv to manage dependencies, you need to run `pipenv install <package_name>` to install the new package.

- Use only `yarn add package_name` to add new packages to the frontend part.
