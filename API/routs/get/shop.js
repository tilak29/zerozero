const con = require('../../conaction');



const shopGet = async (req, res) => {

    con.query(`select * from products`, (err, result) => {

        const data = {};

        data.slider = JSON.parse(result[0].media);

        data.sectionA = {
            heading: atob(result[1].heading),
            content: atob(result[1].content),
        }

        data.sectionB = {
            content: atob(result[2].content),
        }

        data.sectionC = {
            content: atob(result[3].content),
        }

        data.sectionD = JSON.parse(result[4].media);

        data.sectionE = {content :atob(result[4].content)}

        data.sectionF = {content :atob(result[0].content)}


     
        console.log(data);

        res.send(data);
    })

    // res.send('200');
};

module.exports = shopGet;