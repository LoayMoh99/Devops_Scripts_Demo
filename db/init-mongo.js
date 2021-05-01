db.createUser(
  {
    user: "loay",
    pwd: "password",
    roles: [
      {
        role: "readWrite",
        db: "loay_demo_db"
      }
    ]
  }
)