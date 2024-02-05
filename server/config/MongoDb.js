import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // mongodb+srv://lindabouchibane:Psa268JPZMD6PCQn@cluster0.r7zexxv.mongodb.net/
    });
   

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
