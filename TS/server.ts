import express from "express";
import { expr } from "jquery";
import path from "path";
import homeRoutes from "./routes/homeRoutes";
import errorRoutes from "./routes/errorRoutes";

const app = express();
const PORT = 4000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../TS/views"));
app.use(express.static(path.join(__dirname, "../TS/public")));

app.use("/", homeRoutes);

app.use(errorRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})
