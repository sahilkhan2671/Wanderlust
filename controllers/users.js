import User from "../models/user.js";


const renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};


const signup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;

        const newUser = new User({
            email,
            username,
        });

        const registerUser = await User.register(newUser, password);

        console.log(registerUser);

        req.login(registerUser, (err) => {
            if (err) {
                return next(err);
            }

            req.flash("success", "Welcome to Wanderlust");

            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};



const renderLoginFrom =  (req, res) => {
    res.render("users/login.ejs");
};


const login = async (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);

    req.flash("success", "You are logged out successfully!");

    req.session.save((err) => {
      if (err) return next(err);
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


