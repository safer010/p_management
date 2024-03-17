import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config({path:"./.env"});
import { fileURLToPath } from "url";
import path from "path";
import p_management from "./routes/p_management.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const db = mysql.createConnection(
    {host: process.env.DATABASE_HOST,
     user:process.env.DATABASE_USER,
     password: process.env.DATABASE_PASSWORD,
     database:process.env.DATABASE,
     port:process.env.DATABASE_PORT}); 

const app = express();
const portApp = 20000;

app.listen(portApp, () => 
{
    console.log("Server is Running")
});

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

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","hbs");
app.set("views",[path.join(__dirname,"views"), path.join(__dirname,"views/hamrie"), path.join(__dirname,"views/hamrie/media")])
app.use("/", p_management);