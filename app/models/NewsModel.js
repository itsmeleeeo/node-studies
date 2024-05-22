module.exports = () => {
    this.getNews = (conn, callback) => {
        conn.query('select * from news', callback);
    }

    this.getNew = (conn, callback) => {
        conn.query("select * from news where id=2", callback);
    }

    this.saveNews = (newsInfo, conn, callback) => {
        conn.query('insert into news set ?', newsInfo, callback);
    }
    
    return this;
}