<div align = "center">

<img height=200px src="./src/assets/dsc_logo.png">

# DEVELOPER STUDENT CLUBS TIET

<a href="https://medium.com/developer-student-clubs-tiet"><img src="https://github.com/aritraroy/social-icons/blob/master/medium-icon.png?raw=true" width="60"></a>
<a href="https://twitter.com/dsctiet"><img src="https://github.com/aritraroy/social-icons/blob/master/twitter-icon.png?raw=true" width="60"></a>
<a href="https://www.linkedin.com/company/developer-student-club-thapar"><img src="https://github.com/aritraroy/social-icons/blob/master/linkedin-icon.png?raw=true" width="60"></a>
<a href="https://facebook.com/dscthapar"><img src="https://github.com/aritraroy/social-icons/blob/master/facebook-icon.png?raw=true" width="60"></a>
<a href="https://instagram.com/dsc.tiet"><img src="https://github.com/aritraroy/social-icons/blob/master/instagram-icon.png?raw=true" width="60"></a>

# [officialWebsite](https://dsctiet.tech)

[![Build Status](https://travis-ci.org/developer-student-club-thapar/officialWebsite.svg?branch=master)](https://travis-ci.com/github/developer-student-club-thapar/officialWebsite) [![Discord](https://img.shields.io/discord/743751114851090475.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/3C4TESX) [![](https://img.shields.io/badge/python-3.8-blue.svg)](https://www.python.org/download/releases/3.8.0/) [![GitHub issues](https://img.shields.io/github/issues/developer-student-club-thapar/officialWebsite?logo=github)](https://github.com/developer-student-club-thapar/officialWebsite/issues)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
![Size](https://github-size-badge.herokuapp.com/developer-student-club-thapar/officialWebsite.svg)
![Website](https://img.shields.io/website?down_color=red&down_message=Error%21&up_message=It%27s%20up%21&url=https%3A%2F%2Fdsctiet.tech%2F)
<a> <img src="https://badgen.net/dependabot/developer-student-club-thapar/officialWebsite?icon=dependabot" alt="Dependabot Badge"></a>

[![Pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/developer-student-club-thapar/officialWebsite/blob/master/.pre-commit-config.yaml)
[![License](https://img.shields.io/github/license/developer-student-club-thapar/officialWebsite)](https://github.com/developer-student-club-thapar/officialWebsite/blob/master/LICENSE)
![GitHub pull requests by-label](https://img.shields.io/github/issues-pr/developer-student-club-thapar/officialWebsite/dependencies?label=Dependencies%20Status)
</div>
This is the repo for the official Website of DSC Thapar Institute of Engineering and Technology, Patiala , Punjab.
Kindly go through the entire README.md for getting familiar with contribution steps

# Installation and Setup

------------

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

- After the above setup, run

```bash
 - python manage.py makemigrations
 - python manage.py migrate
```

- Start the backend server
  `python manage.py runserver`
  
**This runs the backend server at default port `8000`.
  Open [http://localhost:8000](http://localhost:8000) to view it in the browser.**<br />

## Setup and running of project (Frontend)

- At your root directory run `yarn install` to install all the dependencies
- To start react dev server `yarn start`

This runs the app in the development mode.<br />
**Open [http://localhost:3000](http://localhost:3000) to view it in the browser.**

The page will reload if you make edits.<br />

## Contribution to the project

------------

<div align="center">

[![GitHub issues](https://img.shields.io/github/issues/developer-student-club-thapar/officialWebsite?logo=github)](https://github.com/developer-student-club-thapar/officialWebsite/issues) ![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/developer-student-club-thapar/officialWebsite?logo=git&logoColor=white) ![GitHub contributors](https://img.shields.io/github/contributors/developer-student-club-thapar/officialWebsite?logo=github)

</div>
We follow a systematic Git Workflow -

- Create a fork of this repo.
- Clone your fork of your repo on your pc.
- [Add Upstream to your clone](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- **Every change** that you do, it has to be on a branch. Commits on master would directly be closed.
- Make sure that before you create a new branch for new changes,[syncing with upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) is neccesary.

## Commits

- Write clear meaningful git commit messages (Do read [this](http://chris.beams.io/posts/git-commit/)).
- Make sure your PR's description contains GitHub's special keyword references that automatically close the related issue when the PR is merged. (Check [this](https://github.com/blog/1506-closing-issues-via-pull-requests) for more info)
- When you make very very minor changes to a PR of yours (like for example fixing a failing Travis build or some small style corrections or minor changes requested by reviewers) make sure you squash your commits afterward so that you don't have an absurd number of commits for a very small fix. (Learn how to squash at [here](https://davidwalsh.name/squash-commits-git))
- When you're submitting a PR for a UI-related issue, it would be really awesome if you add a screenshot of your change or a link to a deployment where it can be tested out along with your PR. It makes it very easy for the reviewers and you'll also get reviews quicker.

### Note

- As the project now uses pipenv to manage dependencies, you need to run `pipenv install <package_name>` to install the new package.
- Use only `yarn add package_name` to add new packages to the frontend part.

## Contributors ✨

Thanks goes to these wonderful people for helping us set up this project. Cheers!
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/aniket-biswas-59394b191/"><img src="https://avatars2.githubusercontent.com/u/51146347?v=4" width="100px;" alt=""/><br /><sub><b>Aniket Biswas</b></sub></a><br /><a href="https://github.com/developer-student-club-thapar/officialWebsite/commits?author=aniketbiswas21" title="Code">💻</a> <a href="#design-aniketbiswas21" title="Design">🎨</a></td>
    <td align="center"><a href="https://linkedin.com/in/jsparmani"><img src="https://avatars3.githubusercontent.com/u/41769747?v=4" width="100px;" alt=""/><br /><sub><b>Jay Parmani</b></sub></a><br /><a href="https://github.com/developer-student-club-thapar/officialWebsite/commits?author=jsparmani" title="Code">💻</a> <a href="#design-jsparmani" title="Design">🎨</a> <a href="#maintenance-jsparmani" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://sourcerer.io/animesh-007"><img src="https://avatars0.githubusercontent.com/u/53366877?v=4" width="100px;" alt=""/><br /><sub><b>Animesh Gupta</b></sub></a><br /><a href="https://github.com/developer-student-club-thapar/officialWebsite/commits?author=animesh-007" title="Documentation">📖</a> <a href="https://github.com/developer-student-club-thapar/officialWebsite/commits?author=animesh-007" title="Code">💻</a></td>
    <td align="center"><a href="http://kush-blog.netlify.com"><img src="https://avatars2.githubusercontent.com/u/40840079?v=4" width="100px;" alt=""/><br /><sub><b>Kush Daga</b></sub></a><br /><a href="https://github.com/developer-student-club-thapar/officialWebsite/commits?author=kush-daga" title="Code">💻</a> <a href="#design-kush-daga" title="Design">🎨</a></td>
    <td align="center"><a href="http://shubhank-saxena.github.io"><img src="https://avatars3.githubusercontent.com/u/29003047?v=4" width="100px;" alt=""/><br /><sub><b>Shubhank Saxena</b></sub></a><br /><a href="https://github.com/developer-student-club-thapar/officialWebsite/commits?author=shubhank-saxena" title="Code">💻</a> <a href="#design-shubhank-saxena" title="Design">🎨</a> <a href="#maintenance-shubhank-saxena" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)specification. Contributions of any kind welcome!

## Community

- [![GitHub forks](https://img.shields.io/github/forks/developer-student-club-thapar/officialWebsite?logo=github)](https://github.com/developer-student-club-thapar/officialWebsite/network) [![GitHub stars](https://img.shields.io/github/stars/developer-student-club-thapar/officialWebsite?logo=github)](https://github.com/developer-student-club-thapar/officialWebsite/stargazers)

All feedback and suggestions are welcome!

- 💬 Join the community on [Discord](https://discord.gg/3C4TESX)
