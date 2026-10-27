import express from "express";
const router = express.Router();

import wrapAsync from "../utils/wrapAsync.js";


import { isLoggedIn, isOwner, validateListing } from "../middleware.js";
import listingController from "../controllers/listing.js";
import multer from "multer";
import cloudConfig from "../cloudConfig.js";

const { storage } = cloudConfig;

const upload = multer({ storage });



router.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn,

    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
);


// NEW
router.get("/new", isLoggedIn, listingController.renderNewForm);



router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner, upload.single("listing[image]"),validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));




// EDIT
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm)
);



export default router;