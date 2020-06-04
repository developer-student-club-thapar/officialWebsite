module.exports = {
  apps: [
    {
      name: "officialWebsite",
      cmd: "manage.py runserver",
      interpreter: "python3",
      args: "",
      autorestart: true,
      watch: true,
      pid: "/path/to/pid/file.pid",
      instances: 1,
      sudo: true
    }
  ]
};
