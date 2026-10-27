import "dotenv/config";


import express from "express";
const app = express();

import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import ejsMate from "ejs-mate";
import ExpressError from "./utils/ExpressError.js";

import listingRouter from "./routes/listing.js";
import reviewRouter from "./routes/review.js";
import userRouter from "./routes/user.js";

import session from "express-session";
import MongoStore from "connect-mongo";
import flash from "connect-flash";

import passport from "passport";
import LocalStrategy from "passport-local";
import User from "./models/user.js";



// __dirname setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Mongo Atlas
const dbUrl = process.env.ATLASDB_URL;



async function startServer() {
    if (!dbUrl) {
        console.error("ATLASDB_URL missing in .env file");
        process.exit(1);
    }

    try {
        await mongoose.connect(dbUrl);

        console.log("Connected to MongoDB Atlas");

        app.listen(8080, () => {
            console.log("Server is listening on port 8080");
        });
    } catch (err) {
        console.error("Database connection error:", err.message);
        process.exit(1);
    }
}

startServer();




// EJS configuration
app.engine("ejs", ejsMate);

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));



// Basic middleware
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));




// Store sessions in MongoDB

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});


store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE", err);
});


// Session configuration

const sessionOption = {
    store,
    secret: process.env.SECRET,

    resave: false,

    saveUninitialized: false,

    cookie: {
        expires: new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
        ),

        maxAge: 7 * 24 * 60 * 60 * 1000,

        httpOnly: true,
    },
};


// Session middleware
app.use(session(sessionOption));


// Flash middleware
app.use(flash());


// Password Initialization for user
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// Flash variables available in all EJS files
app.use((req, res, next) => {
    res.locals.success = req.flash("success");

    res.locals.error = req.flash("error");

    res.locals.currUser = req.user;

    next();
});



// Listing routes
app.use("/listings", listingRouter);


// Review routes
app.use("/listings/:id/reviews", reviewRouter);


// user routes
app.use("/", userRouter);


// 404 - Page Not Found
app.all("/*splat", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});



// Error handling middleware
app.use((err, req, res, next) => {

    const {
        statusCode = 500,
        message = "Something went wrong!",
    } = err;

    // Prevent ERR_HTTP_HEADERS_SENT
    if (res.headersSent) {
        return next(err);
    }

    res.status(statusCode).render("error.ejs", {
        message,
    });
});



// Server
app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});