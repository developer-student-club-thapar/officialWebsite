module.exports = {
  apps: [
    {
      name: "officialWebsite",
      cmd: "manage.py runserver 0.0.0.0:8000",
      interpreter: "python3.7",
      args: "",
      autorestart: true,
      watch: true,
      pid: "/path/to/pid/file.pid",
      instances: 1,
      sudo: true
    }
  ]
};
