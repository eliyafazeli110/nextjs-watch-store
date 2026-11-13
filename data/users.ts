import { hashSync } from "bcryptjs"

export const userData = {
  users: [
    {
      name: "Admin",
      email: "admin@exaple.com",
      password: hashSync("11111", 10),
      role: "admin",
    },
    {
      name: "John",
      email: "user@exaple.com",
      password: hashSync("22222", 10),
      role: "user",
    },
  ],
}
