let express = require("express");
let app = express();
let cors = require("cors");
const SendMailRoute = require("./Routes/SendMailRoute");
app.use(cors());
app.use(express.json());

app.use("/send",SendMailRoute)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
