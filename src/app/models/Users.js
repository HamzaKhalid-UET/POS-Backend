export default function getUsersModel({ Schema, model, models }) {
  const userSchema = new Schema({
    email: {
      type: String,
    },
    fullName: {
      type: String,
    },
    password: {
      type: String,
    },
  });

  const Users = models.users || model('users', userSchema);

  return Users;
}
