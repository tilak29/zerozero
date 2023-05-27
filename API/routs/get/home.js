const con = require('../../conaction');

const homeGet = async (req, res) => {

    con.query(`select * from pages where page='home' && website='keshroot'`, (err, result) => {
      
        const data = {};
        console.log(result[0].media)
        // data.slider = JSON.parse(result[0].media);

        data.sectionA = {
            media: result[1].media,
        };

        data.sectionB = {
            heading: atob(result[2].heading),
            content: JSON.parse(atob(result[2].content)),
            media: (result[2].media),
        };

        data.sectionC = {
             heading: atob(result[3].heading),
            content: JSON.parse(atob(result[3].content)),
            media: JSON.parse(result[3].media),
        };

        data.sectionD = {
            heading: atob(result[4].heading),
            content: JSON.parse(atob(result[4].content)),
        
        }

        data.sectionE = {
            heading: atob(result[5].heading),
            content: JSON.parse(atob(result[5].content)),
            // content: JSON.parse(result[5].content),
            // media: JSON.parse(atob(result[5].media)),
        }

        data.sectionF = {
            heading: atob(result[6].heading),
            content: JSON.parse(atob(result[6].content)),
            media: JSON.parse(result[6].media),
        }

        // data.sectionG = {
        //     heading: atob(result[7].heading),
        //     // content: JSON.parse(result[5].content),
        //     media: JSON.parse(atob(result[7].media)),
        // };

        // data.sectionH = {
        //     heading: atob(result[8].heading),
        //     content: JSON.parse(atob(result[8].content)),
        //     // media: JSON.parse(atob(result[7].media)),
        // };

        console.log(data);

        res.send(data);
    })

    // res.send('200');
};

module.exports = homeGet;