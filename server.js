const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

const users = []


//   view engine
app.set('view-engine', 'ejs')
app.use(express.static("./public"));


app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: "lksjdflskjdflskjldfjslkdf",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/profile', checkAuthenticated, (req, res) => {
    res.render('profile.ejs', { name: req.user.name })
})

app.get('/electrician', checkAuthenticated, (req, res) => {
    res.render('electrician.ejs', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
})

//routes
app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/',
    failureFlash: true,
}))



app.get('/signup', checkNotAuthenticated, (req, res) => {
    res.render('signup.ejs')
})

app.post('/signup', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
        console.log(users);
    } catch {
        res.redirect('/signup')
    }
})

app.delete('/logout', (req, res) => {
    req.logOut(()=>{})
    res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/profile')
    }
    next()
}

app.listen(3000, console.log("Server is running at port ", 3000))