// app.get('/home', async (req, res) => {
//     const data = {
//         status: 200,
//         slider: {
//             media: [],
//         },
//         sectionA: {
//             heading: null,
//             content: null,
//             image: null,
//         },
//         sectionB: {
//             heading: null,
//             cards: [],
//         },
//         sectionC: {
//             heading: null,
//             content: null,
//             image: null,
//         },
//         sectionD: {
//             heading: null,
//             content: null,
//             cards: [],
//         },
//         sectionE: {
//             heading: null,
//             content: null,
//             reviews: [],
//         }
//     };

//     con.query('select * from pages', async (err, result) => {
//         if (err) {
//             res.type('application/json');
//             res.send(JSON.stringify({
//                 status: 500,
//                 error: 'Database connection error',
//             }));
//         };
//         // slider
//         result.forEach(item => {
//             if (item.sectionId === 1) {
//                 data.slider.media.push(item.media);
//             }
//         });

//         // sectin - a
//         result.forEach(item => {
//             if (item.sectionId === 2) {
//                 data.sectionA.heading = item.header;
//                 data.sectionA.content = item.content;
//                 data.sectionA.image = item.media;
//             };
//         });

//         // section - b
//         result.forEach(item => {
//             if (item.sectionId === 3) {
//                 data.sectionB.heading === null ? data.sectionB.heading = item.header : null;
//                 item.header !== data.sectionB.heading ? data.sectionB.cards.push({ title: item.header, content: item.content, image: item.media }) : null;
//             }
//         })

//         // section - c
//         result.forEach(item => {
//             if (item.sectionId === 4) {
//                 data.sectionC.heading = item.header;
//                 data.sectionC.content = item.content;
//                 data.sectionC.image = item.media;
//             }
//         })

//         // section - d
//         result.forEach(item => {
//             if (item.sectionId === 5) {
//                 data.sectionD.heading !== null ? data.sectionD.cards.push({ title: item.header, content: item.content, image: item.media }) : null;
//                 data.sectionD.heading === null ? data.sectionD.heading = item.header : null;
//                 data.sectionD.content === null ? data.sectionD.content = item.content : null;
//             }
//         });

//         // section - e
//         result.forEach(item => {
//             if (item.sectionId === 6) {
//                 data.sectionE.heading !== null ? data.sectionE.reviews.push({ personName: item.header, review: item.content }) : null;
//                 data.sectionE.heading === null ? data.sectionE.heading = item.header : null;
//                 data.sectionE.content === null ? data.sectionE.content = item.content : null;
//             }
//         })

//         res.type('application/json');
//         res.send(JSON.stringify(data));
//     });
// });

// app.get('/demo', (req, res) => {
//     con.query('select * from home', async (err, result) => {
//         if (err) throw err;
//         res.type('application/json');
//         res.send(JSON.stringify(result));
//     });

//     // con.query('update home set media = "https://i.ibb.co/Rvby9ss/slider2.jpg" where _id = 4', (err, result) => {
//     //     if (err) console.log(err);
//     //     console.log(result);
//     // });
// })