module.exports = {
  deploy: {
    production: {
      key: "./ubuntu",
      user: "ubuntu",
      host: ["api.dsctiet.tech"],
      ref: "origin/master",
      ssh_options: "StrictHostKeyChecking=no",
      repo:
        "https://github.com/developer-student-club-thapar/officialWebsite.git",
      path: "/home/ubuntu/officialWebsite-production",
      "post-setup": "sudo pip3.7 install poetry && poetry install",
      "post-deploy":
        "source env/bin/activate && python3.7 manage.py migrate && gunicorn officialWebsite.config.wsgi --bind 0.0.0.0:8000 -D"
    }
  }
};
