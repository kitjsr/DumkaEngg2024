// import { Types } from "mongoose";
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
        
        email:String,
        name:String,
        mobile:String,
        
        gender: String,
        state:String,
        aadhar:String,
        status: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Customer= mongoose.model("customer", schema);
  return Customer;
};
