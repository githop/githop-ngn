/**
 * Created by githop on 4/19/17.
 */

const admin = require("firebase-admin");
const serviceAccount = require("./githop-backend-firebase-adminsdk-9ldd1-92341a324f.json");
const DB = require('./seedData.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://githop-backend.firebaseio.com"
});

const db = admin.database();
const ref = db.ref();
const articlesRef = ref.child('articles');

DB.articles.forEach(a => {
  const articleRef = articlesRef.push();
  articleRef.set(a.article);
});
