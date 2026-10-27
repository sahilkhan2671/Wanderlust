import mongoose from "mongoose";
import sampleListings from "./data.js";
import Listing from "../models/listing.js";

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const initDb = async () => {
    await mongoose.connect(MONGO_URL);

    console.log("Connected to DB");

    await Listing.deleteMany({});

    const listingsWithOwner = sampleListings.map((obj) => ({
        ...obj,
        owner: "6aba4a39525e5f629c52fd0e"
    }));

    await Listing.insertMany(listingsWithOwner);

    console.log("Data was initialized");

    await mongoose.connection.close();
};

initDb();