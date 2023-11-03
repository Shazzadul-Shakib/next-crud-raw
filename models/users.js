import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

const users = mongoose.models.users || mongoose.model('users', userSchema);
export default users;