const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "article" });
  }

  insert(article) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [article.name]
    );
  }

  update(article) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [article.name, article.id]
    );
  }
}

module.exports = ArticleManager;
