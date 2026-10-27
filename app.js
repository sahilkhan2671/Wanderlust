
import "dotenv/config";

import express from "express";
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

// Create Express app
const app = express();

// __dirname setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MongoDB Atlas URL
const dbUrl = process.env.ATLASDB_URL;

// EJS configuration
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Basic middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// MongoDB session store
const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

// Session store error handler
store.on("error", (err) => {
    console.error("ERROR in MONGO SESSION STORE:", err);
});

// Session configuration
const sessionOption = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
    },
};

// Session middleware
app.use(session(sessionOption));

// Flash middleware
app.use(flash());

// Passport initialization
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

// Homepage route
app.get("/", (req, res) => {
    res.redirect("/listings");
});

// Review routes
app.use("/listings/:id/reviews", reviewRouter);

// User routes
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

    if (res.headersSent) {
        return next(err);
    }

    res.status(statusCode).render("error.ejs", {
        message,
    });
});

// Start server only once, after routes and middleware
async function startServer() {
    if (!dbUrl) {
        console.error("ATLASDB_URL is missing");
        process.exit(1);
    }

    if (!process.env.SECRET) {
        console.error("SECRET is missing");
        process.exit(1);
    }

    try {
        await mongoose.connect(dbUrl);
        console.log("Connected to MongoDB Atlas");

        const PORT = process.env.PORT || 8080;

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
}

startServer();
