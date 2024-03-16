import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config({path:"./.env"});
import { fileURLToPath } from "url";
import path from "path";

import p_management from "./routes/p_management.js"
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//📌use para gumawa ng port
const db = mysql.createConnection(
    {host: process.env.DATABASE_HOST,
     user:process.env.DATABASE_USER,
     password: process.env.DATABASE_PASSWORD,
     database:process.env.DATABASE,
     port:process.env.DATABASE_PORT}); 

const app = express();
const portApp = 20000;

//📌 use para malaman kung connected na sa server
app.listen(portApp, () => 
{
    console.log("Server is Running")
});

//📌use para malam kung connected na sa database
db.connect((error) => 
{
    if(error)
    {
        console.log("Database not connected", error);
    }

    else
    {
        console.log("Database Connected");
    }
});

// //body-parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));//static files
app.set("view engine","hbs");//view engine
app.set("views",[path.join(__dirname,"views"), path.join(__dirname,"views/hamrie"), path.join(__dirname,"views/hamrie/media")])

app.use("/", p_management);//routes