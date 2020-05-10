<div align = "center">

<img height=200px src="./Frontend/src/assets/dsc_logo.png">

<h1>DEVELOPER STUDENT CLUBS</h1>

# officialWebsite  [![Build Status](https://travis-ci.com/developer-student-club-thapar/officialWebsite.svg?branch=master)](https://travis-ci.com/github/developer-student-club-thapar/officialWebsite)  [![Slack Status](https://img.shields.io/badge/slack-chat-purple.svg?logo=slack)](https://dscthapar-gspatiala.slack.com/join/shared_invite/enQtNzU2MzA2MjcxNzkyLTkwNDRiNWMzYjUzYjNjYjM0M2JhMDgwOTI3MGQwYWU1NzNlNGMxZGVhNzk0MGZiYTI5YzgwZDhiMTk1MjE4M2M) [![GitHub issues](https://img.shields.io/github/issues/developer-student-club-thapar/officialWebsite?logo=github)](https://github.com/developer-student-club-thapar/officialWebsite/issues)
</div>

This is the repo for the official Website of DSC Thapar Institute of Engineering and Technology, Patiala , Punjab
Head over to CONTRIBUTIONS.md for how to start contributing!

Installation
------------
## Setup and running of project (Backend)

- Fork the repo and clone it.
- Go in the repo and setup virtualenvironment using <br>
  `python -m virtualenv env`
- Then activate the environment using <br>
  `source env/Scripts/activate` (Use only `env/Scripts/activate` if on cmd or powershell)
- At the root of your project directory <br>

```bash
pip install -r requirements.txt
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
You will also see any lint errors in the console.

## Contributions Best Practices

[![GitHub issues](https://img.shields.io/github/issues/developer-student-club-thapar/officialWebsite?logo=github)](https://github.com/developer-student-club-thapar/officialWebsite/issues) ![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/developer-student-club-thapar/officialWebsite?logo=git&logoColor=white) ![GitHub contributors](https://img.shields.io/github/contributors/developer-student-club-thapar/officialWebsite?logo=github)

We follow a systematic Git Workflow -

- Create a fork of this repo.
- Clone your fork of your repo on your pc.
- [Add Upstream to your clone](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- **Every change** that you do, it has to be on a branch. Commits on master would directly be closed.
- Make sure that before you create a new branch for new changes,[syncing with upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) is neccesary.

**Commits**
* Write clear meaningful git commit messages (Do read [this](http://chris.beams.io/posts/git-commit/)).
* Make sure your PR's description contains GitHub's special keyword references that automatically close the related issue when the PR is merged. (Check [this](https://github.com/blog/1506-closing-issues-via-pull-requests) for more info)
* When you make very very minor changes to a PR of yours (like for example fixing a failing Travis build or some small style corrections or minor changes requested by reviewers) make sure you squash your commits afterward so that you don't have an absurd number of commits for a very small fix. (Learn how to squash at [here](https://davidwalsh.name/squash-commits-git))
* When you're submitting a PR for a UI-related issue, it would be really awesome if you add a screenshot of your change or a link to a deployment where it can be tested out along with your PR. It makes it very easy for the reviewers and you'll also get reviews quicker.


## Contributors ✨

Thanks goes to these wonderful people for helping us set up this project. Cheers!
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://sourcerer.io/animesh-007"><img src="https://avatars0.githubusercontent.com/u/53366877?v=4" width="100px;" alt=""/><br /><sub><b>Animesh Gupta</b></sub></a><br /><a href="https://github.com/developer-student-club-thapar/officialWebsite/commits?author=animesh-007" title="Documentation">📖</a></td>
    <td align="center"><a href="http://shubhank-saxena.github.io"><img src="https://avatars3.githubusercontent.com/u/29003047?v=4" width="100px;" alt=""/><br /><sub><b>Shubhank Saxena</b></sub></a><br /><a href="#design-shubhank-saxena" title="Design">🎨</a> <a href="#maintenance-shubhank-saxena" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/aniket-biswas-59394b191/"><img src="https://avatars2.githubusercontent.com/u/51146347?v=4" width="100px;" alt=""/><br /><sub><b>Aniket Biswas</b></sub></a><br /><a href="https://github.com/developer-student-club-thapar/officialWebsite/commits?author=aniketbiswas21" title="Code">💻</a> <a href="#design-aniketbiswas21" title="Design">🎨</a> <a href="#maintenance-aniketbiswas21" title="Maintenance">🚧</a></td>   
    <td align="center"><a href="https://linkedin.com/in/jsparmani"><img src="https://avatars3.githubusercontent.com/u/41769747?v=4" width="100px;" alt=""/><br /><sub><b>Jay Parmani</b></sub></a><br /><a href="https://github.com/developer-student-club-thapar/officialWebsite/commits?author=jsparmani" title="Code">💻</a> <a href="#design-jsparmani" title="Design">🎨</a> <a href="#maintenance-jsparmani" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Community

[![GitHub forks](https://img.shields.io/github/forks/developer-student-club-thapar/officialWebsite?logo=github)](https://github.com/developer-student-club-thapar/officialWebsite/network) [![GitHub stars](https://img.shields.io/github/stars/developer-student-club-thapar/officialWebsite?logo=github)](https://github.com/developer-student-club-thapar/officialWebsite/stargazers)

All feedback and suggestions are welcome!

* 💬 Join the community on [Slack](https://dscthapar-gspatiala.slack.com/join/shared_invite/enQtNzU2MzA2MjcxNzkyLTkwNDRiNWMzYjUzYjNjYjM0M2JhMDgwOTI3MGQwYWU1NzNlNGMxZGVhNzk0MGZiYTI5YzgwZDhiMTk1MjE4M2M)