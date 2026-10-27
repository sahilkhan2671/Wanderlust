
import User from "../models/user.js";

const renderSignupForm = (req, res) => {
    res.render("users/signUp.ejs");
};

const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        const newUser = new User({
            username,
            email,
        });

        const registerUser = await User.register(newUser, password);

        req.login(registerUser, (err) => {
            if (err) {
                return next(err);
            }

            req.flash("success", "Welcome to Wanderlust");
            res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

const renderLoginFrom = (req, res) => {
    res.render("users/login.ejs");
};

const login = (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");

    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

const logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }

        req.flash("success", "You are logged out successfully!");

        req.session.save((err) => {
            if (err) {
                return next(err);
            }

            res.redirect("/listings");
        });
    });
};

export default {
    renderSignupForm,
    signup,
    renderLoginFrom,
    login,
    logout,
};
