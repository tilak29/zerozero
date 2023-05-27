const { uid } = require('uid');

const upload = (files) => {
    return new Promise(resolve => {
        files = files.media;
        let status = null;
        let data = [];
        const mediaName = [];

        if (!files.length) {
            data.push(files);
        } else {
            data = files;
        };

        data.forEach(item => {
            const cut = item.name.split('.');
            const fileName = cut[0] + '.' + uid(10) + '.' + cut[cut.length - 1];
            item.mv('./uploads/' + fileName, (err) => {
                if (err) {
                    console.log(err);
                    status = 500;
                } else {
                    status = 200;
                   mediaName.push(fileName); 
                    update();
                }
            })
        });

        const update = () => {
            if (data.length === mediaName.length) {
                resolve({
                    status,
                    mediaName,
                });
            };
        }
    })
};

module.exports = upload;