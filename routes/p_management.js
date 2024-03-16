import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config({path:"./.env"});
import express from "express";
import multer from "multer"; // use to upload image
import path from "path";//for image
import swal from 'sweetalert';

// use to connect to the database
//using env
const db = mysql.createConnection(
    {host: process.env.DATABASE_HOST,
     user:process.env.DATABASE_USER,
     password: process.env.DATABASE_PASSWORD,
     database:process.env.DATABASE,
     port:process.env.DATABASE_PORT}); 


//for image
const storage = multer.diskStorage
    ({
        destination: (req,file,cb) => { cb(null, "./public/images")},
        filename: (req,file,cb) => { cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))}
    });

const upload = multer({storage:storage});

const route = express.Router();
///////////////////////////////////////////////////////////////////////////////////////////////////
route.get("/", (req,res) =>
    {
       res.render("index"); 
    });

/////////////////////////////////////////////////////////////////////////////////////////////////// login
route.post("/p_management_login",(req,res) =>
{
    const {email,password} = req.body;
  
    if(email !== "mia@gmail.com" ) 
    {
        
        res.render("index", {message: "Email is incorrect"});
    }

    else if(password !== "mia")
    {
        res.render("index", {message: "Password is incorrect"});
    }

    else 
    {
        res.redirect("/p_management_main")
    }
      
        
});

route.get("/p_management",(req,res) =>
{
    res.redirect("/p_management_main");
});

/////////////////////////////////////////////////////////////////////////////////////////////////// display
route.get("/p_management_main",(req,res) =>
{
    db.query("SELECT a.product_id, a.name, b.category, a.description, a.price,a.image FROM products as a INNER JOIN  product_category as b ON a.product_category_id = b.product_category_id", 
    (err, result) => 
        {
            if(err)
            {
                console.log(err);
            }

            else
            {
                console.log(`this is ${result}`);
            }
            ///res.render("p_apparel_basket", {productList: result});
            res.render("p_management_main",{productList: result});
        });
});

/////////////////////////////////////////////////////////////////////////////////////////////////// add
route.get("/p_management_add_form",(req,res) =>
{
    res.render("p_management_add_form");
});

route.get("/p_management_add_form_cancel",(req,res) =>
{
    res.redirect("/p_management_main");
});


route.post("/p_management_add",upload.single("image"), (req,res) =>
{
    const {pName,category,description,price,image} = req.body;

    if(!req.file)
        {
            console.log("No file upload")
        }
 
    else
    {
        console.log(req.file.filename)
        const imgsrc = req.file.filename;

        db.query("INSERT INTO products SET ?", {name: pName, product_category_id: category, description:description, price:price,image:imgsrc },
        (err,result) =>
        {
            if(err)
            {
                console.log(err);
                res.render("p_management_add_form",{message: "Product has not been added", message2: "Please provide all the needed information"})
            }

            else
            {
                console.log (result);
                // res.render{message: "New product has been added"}
                res.render("p_management_add_form",{message: "New product has been added"});
            }
        })
    }
    
});

/////////////////////////////////////////////////////////////////////////////////////////////////// update

route.get("/p_management_edit_form/:productId",(req,res) =>
{
    const productId = req.params.productId;

    db.query("SELECT a.product_id, a.name, b.category, a.description, a.price,a.image FROM products as a INNER JOIN  product_category as b ON a.product_category_id = b.product_category_id WHERE product_id = ?",
    productId,
    (err,results) =>
        {
            if(err)
            {
                console.log(err)
            }

            else{
                res.render("p_management_edit_form", {product: results[0]});
            }
        })
})


route.post("/p_management_edit",upload.single("image"), (req,res) =>
{
    const {pName,category,description,price,image,product_id} = req.body;

    if(!req.file)
        {
            console.log("No file upload")
        }
 
    else
    {
        console.log(req.file.filename)
        const imgsrc = req.file.filename;

        db.query("UPDATE products SET name=?, product_category_id=?, description=?, price=?, image=? WHERE product_id = ? ", 
        [pName,category,description,price,imgsrc,product_id],
        (err,result) =>
        {
            if(err)
            {
                console.log(err);
                res.render("p_management_edit_form",{message: "Product has not been updated", message2: "Please choose again the product you want to edit"})
            }

            else
            {
                console.log (result);
                res.render("p_management_edit_form",{message: "Product has been updated", message2: ""})
            }
        })
    }
    
});


/////////////////////////////////////////////////////////////////////////////////////////////////// delete
route.get("/p_management_delete_form/:productId",(req,res) =>
{
    const productId = req.params.productId;

    db.query("SELECT a.product_id, a.name, b.category, a.description, a.price,a.image FROM products as a INNER JOIN  product_category as b ON a.product_category_id = b.product_category_id WHERE product_id = ?",
    productId,
    (err,results) =>
        {
            if(err)
            {
                console.log(err)
            }

            else{
                res.render("p_management_delete_form", {product: results[0]});
            }
        })
})

route.get("/p_management_delete/:productId",(req,res) =>
{
    const productId = req.params.productId;

    db.query("DELETE FROM products WHERE product_id = ?",
    productId,
    (err,results) =>
        {
            if(err)
            {
                console.log(err)
            }

            else
            {
                res.redirect("/p_management_main");
            }
        })
})
///////////////////////////////////////////////////////////////////////////////////////////////////// hamrie
route.get("/hamrie/hamrieshop",(req,res) =>
{
    db.query("SELECT a.product_id, a.name, b.category, a.description, a.price,a.image FROM products as a INNER JOIN  product_category as b ON a.product_category_id = b.product_category_id ORDER BY category  limit 9", 
    (err, result) => 
        {
            if(err)
            {
                console.log(err);
            }

            else
            {
                console.log(`this is ${result}`);
            }
            ///res.render("p_apparel_basket", {productList: result});
            res.render("../hamrie/hamrieshop", {productList: result, title: "Hamrie Shop"});
        });

});

route.get("/hamrieshop/hamsterfood",(req,res) =>
{
    db.query("SELECT a.product_id, a.name, b.category, a.description, a.price,a.image FROM products as a INNER JOIN  product_category as b ON a.product_category_id = b.product_category_id WHERE category = 'Hamster food'", 
    (err, result) => 
        {
            if(err)
            {
                console.log(err);
            }

            else
            {
                console.log(`this is ${result}`);
            }
            ///res.render("p_apparel_basket", {productList: result});
            res.render("../hamrie/hamrieshop", {productList: result, title: "Hamster Food "});
        });

});

route.get("/hamrieshop/cageessentials",(req,res) =>
{
    db.query("SELECT a.product_id, a.name, b.category, a.description, a.price,a.image FROM products as a INNER JOIN  product_category as b ON a.product_category_id = b.product_category_id WHERE category = 'Hamster Cage Essentials'", 
    (err, result) => 
        {
            if(err)
            {
                console.log(err);
            }

            else
            {
                console.log(`this is ${result}`);
            }
            ///res.render("p_apparel_basket", {productList: result});
            res.render("../hamrie/hamrieshop", {productList: result, title: "Hamster Cage Essentials "});
        });

});

route.get("/hamrieshop/hamstertoy",(req,res) =>
{
    db.query("SELECT a.product_id, a.name, b.category, a.description, a.price,a.image FROM products as a INNER JOIN  product_category as b ON a.product_category_id = b.product_category_id WHERE category = 'Hamster Toys'", 
    (err, result) => 
        {
            if(err)
            {
                console.log(err);
            }

            else
            {
                console.log(`this is ${result}`);
            }
            ///res.render("p_apparel_basket", {productList: result});
            res.render("../hamrie/hamrieshop", {productList: result, title: "Hamster Toys "});
        });

});


export default route;