

const express = require('express');
const cors = require('cors');
const app = express();
const upload = require('express-fileupload');
const path = require('path');

const con = require('./conaction');
const home = require('./routs/post/home');
const shop = require('./routs/post/shop');
const blog = require('./routs/post/blog');
const about = require('./routs/post/aboutUs');
const blogGet = require('./routs/get/blog');
const aboutGet = require('./routs/get/aboutUs');
const linkGet = require('./routs/get/link');
const adminUser = require('./routs/get/adminUser');
const createAdminUser = require('./routs/post/createAdminUser');
const changePassword = require('./routs/post/changePassword');
const userBlogPost = require('./routs/get/blog/user');
const homeGet = require('./routs/get/home');
const shopGet = require('./routs/get/shop');
const adminUsers = require('./routs/get/adminUsers');
const createUser = require('./routs/post/createUser');
const login = require('./routs/post/login');
const updateAdminUser = require('./routs/post/updateAdminUser');
const getUser = require('./routs/get/getUser');
const contactUs = require('./routs/post/contactUs');
const contactUsget= require('./routs/get/contactUs');
const linkE = require('./routs/post/link');
const sitecontactusget = require('./routs/get/sitecontactus');
const sitecontactuspost =require('./routs/post/sitecontactus')

const port = 8000;

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/media', express.static('./uploads'));
app.use(upload());

app.get('/', (req, res) => {
    res.send('Hello from server');
});

app.get('/blog/:type', (req, res) => {
    blogGet(req, res);
});

app.get('/test', (req, res) => {
    con.query('select * from pages', (err, result) => {
        if (err) res.send({ status: 500, error: 'database connection error' });
        res.send(result);
    })
});

app.get('/parse', (req, res) => {
    con.query('select media from pages where _id = 30', (err, result) => {
        const data = JSON.parse(result[0].media);
        console.log(data[1]);
        res.send(data);
    })
});

app.get('/blog-post/:postId', (req, res) => {
    const { postId } = req.params;

    con.query(`select * from blog where _id=${postId}`, (err, result) => {
        result = result[0];
        const data = {
            title: atob(result.title),
            description: atob(result.description),
            author: atob(result.author),
            feature_image: result.feature_image,
            status: result.status,
            permalink: atob(result.permalink),
            content: atob(result.content),
        }
        res.send({ status: 200, data });
    })
});

app.get('/about-us', (req, res) => {
    aboutGet(req, res);
});

app.get('/contactus', (req, res) => {
    contactUsget(req, res);
});

app.get('/sitecontactus', (req, res) => {
    sitecontactusget(req, res);
});

app.get('/admin-user/:username/:password', (req, res) => {
    adminUser(req, res);
});

app.get('/user-blog-post/:permalink', (req, res) => {
    userBlogPost(req, res);
});

app.get('/home', (req, res) => {
    homeGet(req, res);
});
app.get('/shop', (req, res) => {
    shopGet(req, res);
});


app.get('/admin-users', adminUsers);

app.get('/get-user/:id', getUser);

app.get('/links', (req, res) => {
    linkGet(req, res);
});

// app.get('/links', (req, res) => {
//     const sqlSelect = "SELECT * FROM socialmedia";
//     con.query(sqlSelect, (err, result) => {
//         console.log(err);
//         console.log(result);
//         res.send(result);
//     });
// });

app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname + '/404.html'));
});




// post --------------------------

app.post('/home/:page', (req, res) => {
    home(req, res);
});

app.post('/shop/:page', (req, res) => {
    shop(req, res);
});


app.post('/blog/:page', (req, res) => {
    blog(req, res);
});

app.post('/blog/:page/:postId', (req, res) => {
    blog(req, res);
});

app.post('/about-us', (req, res) => {
    about(req, res);
});

app.post('/contactus', (req, res) => {
    contactUs(req, res);
});

app.post('/sitecontactus', (req, res) => {
    sitecontactuspost(req, res);
});

// app.post('/links', (req, res) => {
//     linkE(req, res);
// });

app.post('/create-user', (req, res) => {
    createAdminUser(req, res);
});

app.post('/change-password', (req, res) => {
    changePassword(req, res);
});

app.post('/create_user', createUser);

app.post('/login', login);

app.post('/update-admin-user', updateAdminUser);



//create
app.post('/links', (req,res) => {
    // const name = req.body.name;
    // const link = req.body.link; 

    // const sqlInsert = "INSERT INTO socialmedia (heading, content) VALUES(?,?)"
    // con.query(sqlInsert, [name, link], (err,result) => {
    //     console.log(err);
    //     // console.log(result);
    // })
    linkE(req, res);
}
);



//delete
app.delete('/links/del/:id', (req, res) => {
    const id = req.params.id;

    const sqlDelete = "DELETE FROM socialmedia WHERE _id = ?"
    con.query(sqlDelete, id, (err,result) => {
        console.error(err);
    })
})

app.put('/links/update', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const link = req.body.link;

    const sqlUpdate = "UPDATE socialmedia SET content = ?, heading = ? WHERE _id = ?"
    con.query(sqlUpdate, [link,name,id], (err,result) => {
        console.error(err);
    })
})

app.listen(port);
