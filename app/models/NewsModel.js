module.exports = () => {
    this.getNews = (conn, callback) => {
        conn.query('select * from news', callback);
    }

    this.getNew = (conn, callback) => {
        conn.query("select * from news where id=2", callback);
        console.log(callback)
    }
    
    return this;
}