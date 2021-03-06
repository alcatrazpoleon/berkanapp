const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require("./util/fbAuth");

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login, uploadImage, addUserDetails } = require("./handlers/users");

//Screams routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);
app.post("/user/image", FBAuth, uploadImage)
app.post("/user", FBAuth, addUserDetails);

//users routes
app.post("/signup", signup);
app.post("/login", login);


exports.api = functions.region("us-central1").https.onRequest(app);
