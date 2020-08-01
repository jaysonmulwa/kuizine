const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

//Routes
const items = require("./routes/api/items");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");

const recipe = require("./routes/api/recipe");
const post = require("./routes/api/post");

const app = express();

//Bdy parser mdlware

app.use(bodyParser.json());

app.use(fileUpload());

//DB Config
//const db = require('./config/keys').mongoURI;
const db =
	"mongodb+srv://jay:jayjay123@cluster0-s1lrf.mongodb.net/test?retryWrites=true&w=majority";

mongoose
	.connect(db)
	.then(() => console.log("Mongo Connected..."))
	.catch((err) => console.log(err));

//Use Routes
app.use("/api/items", items);
app.use("/api/users", users);
app.use("/api/auth", auth);

app.use("/api/recipe", recipe);
app.use("/api/post", post);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	//static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
	});
}

const port = process.env.PORT || 5000; //5000 for heroku

app.listen(port, () => console.log(`Server started on port ${port}`));
