const AbstractManager = require("./AbstractManager");

class CharacterManager extends AbstractManager {
  constructor() {
    super({ table: "caracters" });
  }

  insert(character) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, age) values (?,?,?)`,
      [character.firstname, character.lastname, character.age]
    );
  }

  update(character) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, age= ? where id = ?`,
      [character.firstname, character.lastname, character.age, character.id]
    );
  }
}

module.exports = CharacterManager;
