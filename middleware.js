import Listing from "./models/listing.js";
import Review from "./models/review.js";
import ExpressError from "./utils/ExpressError.js";
import { reviewSchema } from "./schema.js";
import listingSchema from "./schema.js";

export const isLoggedIn = (req, res, next) => {
    // Save the URL the user was trying to access
    req.session.redirectUrl = req.originalUrl;

    if (!req.isAuthenticated()) {
        req.flash("error", "You must be logged in to create listing!");
        return res.redirect("/login");
    }

    next();
};

export const saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }

    next();
};


export const isOwner = async (req, res, next) => {
     const { id } = req.params;
    
            let listing = await Listing.findById(id);
    
            if (!listing.owner.equals(res.locals.currUser._id)) {
                req.flash("error", "You are not the owner of this listing");
                return res.redirect(`/listings/${id}`);
            }
            next();
};


export const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);

    if (error) {
        const errMsg = error.details
            .map((el) => el.message)
            .join(", ");

        throw new ExpressError(400, errMsg);
    }

    next();
};


export const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);

    if (error) {
        const errMsg = error.details
            .map((el) => el.message)
            .join(", ");

        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};



export const isReviewAuthor = async (req, res, next) => {
     const { id, reviewId } = req.params;
    
            let review = await Review.findById(reviewId);
    
            if (!review.author.equals(res.locals.currUser._id)) {
                req.flash("error", "You are not the author of this review");
                return res.redirect(`/listings/${id}`);
            }
            next();
};