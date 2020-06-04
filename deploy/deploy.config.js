module.exports = {
  deploy: {
    production: {
      key: "./deploy/ubuntu",
      user: "ubuntu",
      host: ["35.213.132.113"],
      ref: "origin/master",
      repo:
        "https://github.com/developer-student-club-thapar/officialWebsite.git",
      path: "/home/ubuntu/officialWebsite-production",
      "post-setup":
        "pip3 install poetry && poetry install && python manage.py migrate",
      "post-deploy":
        "authbind --deep pm2 startOrRestart ./deploy/production.config.js"
    }
  }
};
