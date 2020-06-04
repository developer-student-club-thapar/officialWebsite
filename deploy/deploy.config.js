module.exports = {
  deploy: {
    production: {
      key: "./deploy/dsc-deploy",
      user: "dsc-deploy",
      host: ["35.213.186.79"],
      ref: "origin/master",
      repo:
        "https://github.com/developer-student-club-thapar/officialWebsite.git",
      path: "/home/dsc-deploy/officialWebsite-production",
      "post-setup":
        "pip3 install poetry && poetry install && python manage.py migrate",
      "post-deploy":
        "authbind --deep pm2 startOrRestart ./deploy/production.config.js"
    }
  }
};
