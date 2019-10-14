let userJutsu = [];

let id = 1;
function createJutsu(req, res) {
    const {sealOne, sealTwo, sealThree, sealFour, sealFive, sealSix, jutsuName} = req.body;
    userJutsu.push({
        sealOne,
        sealTwo,
        sealThree,
        sealFour,
        sealFive,
        sealSix,
        jutsuName
    })
    id++;
    res.status(200).json(userJutsu);
}

function getJutsu(req, res) {
    res.status(200).json(userJutsu);
}

function removeJutsu(req, res) {
    const {id} = req.params;
    console.log(id);
    const index = userJutsu.findIndex(val => {
        if(val.id == true) {
            return true;
        }
    });
    userJutsu.splice(index, 1);
    res.status(200).json(userJutsu);
}

module.exports = {
    createJutsu,
    getJutsu,
    removeJutsu
}