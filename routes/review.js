import express from "express";
const router = express.Router({ mergeParams: true });

import wrapAsync from "../utils/wrapAsync.js";
import { isLoggedIn, isReviewAuthor, validateReview } from "../middleware.js";

import Listing from "../models/listing.js";
import Review from "../models/review.js";
import reviewController from "../controllers/reviews.js";

// Create Review
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview)
);

// Delete Review
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview)
);

export default router;