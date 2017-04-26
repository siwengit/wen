var  express=require("express");
var app=express();

// express构建结束


//1. 建立静态资源站(img,css,js,等资源位置)

// test  
// C:\Users\Mhy\Desktop\05_node.\views
// console.log(__dirname);
app.use(express.static("./public"));

// 2.建立ejs模板库
app.set("views",__dirname+"/views");

//3.设置ejs引擎
app.set("view engine","ejs");


app.get("/",function(req,res){
	res.render("index",{name:"Msea"});
})


app.get("/list",function(req,res){
	res.render("list");
})

app.use(function(req,res){
	res.status(404);
	res.render("404");
})


app.listen(8090);


