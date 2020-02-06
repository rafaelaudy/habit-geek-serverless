const jwt = require("jsonwebtoken");
const APP_SECRET = "GraphQL-is-aw3some";

function getUserId({ headers }) {
  const Authorization = headers.Authorization;
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId;
  }

  throw new Error("Not authenticated");
}

module.exports = {
  APP_SECRET,
  getUserId
};
