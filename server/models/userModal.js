const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("Todos os campos devem ser preenchidos");
  }

  if (!validator.isEmail(email)) {
    throw Error("E-mail inválido");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(
      " Parece que sua senha precisa de uma ativação. Adicione letras maiúsculas, minúsculas, números e símbolos e no mínimo 8 caracteres para torná-lo super forte!"
    );
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("E-mail ja esta em uso");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Todos os campos devem ser preenchidos");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("E-mail não encontrado");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Senha inválida");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
