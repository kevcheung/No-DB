let savedList = [];

module.exports = {
    getChamp(req, res){
        res.status(200).json(savedList)
    },

    postChamp(req, res){
        savedList.push(req.body)
        res.status(200).json(savedList);
        }
}