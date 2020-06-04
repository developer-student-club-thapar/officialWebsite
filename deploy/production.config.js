module.exports = {
  apps: [
    {
      name: "officialWebsite",
      script: "manage.py",
      interpreter: "python3.7",
      args: ["runserver","0.0.0.0:8000"],
      wait_ready:true,
      autorestart: true,
      pid: "/path/to/pid/file.pid",
      instances: 1,
      sudo: true
    }
  ]
};
