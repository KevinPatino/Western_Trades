"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const homeRoutes_1 = __importDefault(require("./routes/homeRoutes"));
const errorRoutes_1 = __importDefault(require("./routes/errorRoutes"));
const app = (0, express_1.default)();
const PORT = 4000;
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../TS/views"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../TS/public")));
app.use("/", homeRoutes_1.default);
app.use(errorRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
