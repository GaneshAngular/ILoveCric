import { model, Schema } from 'mongoose'

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profile: { type: String, default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
    Address: { type: { city: { type: String }, country: { type: String } } },
    dob: { type: Date },
    mobile: { type: String, },
    password: { type: String },
    gender: { type: String },
    specialization: { type: String },
    active: { type: Boolean, default: true }
})
userSchema.index(
    { mobile: 1 },
    {
      unique: true,
      partialFilterExpression: { mobile: { $type: "string" } }
    }
  );

const userModel = new model('User', userSchema)
export default userModel;