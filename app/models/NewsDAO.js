function NewsDAO(connection){
    this._conn = connection;
}

NewsDAO.prototype.getNews = function (callback) {
    this._conn.query('select * from news', callback);
}

NewsDAO.prototype.getNew = function (callback) {
    this._conn.query("select * from news where id=2", callback);
}

NewsDAO.prototype.saveNews = function (newsInfo, callback){
    this._conn.query('insert into news set ?', newsInfo, callback);
}

module.exports = () => {
    return NewsDAO;
}