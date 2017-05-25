/**
 * Created by githop on 4/19/17.
 */

const admin = require("firebase-admin");
const serviceAccount = require("./githop-backend-firebase-adminsdk-9ldd1-780b52d0ff.json");
const DB = require('./seedData.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://githop-backend.firebaseio.com"
});

const db = admin.database();
const ref = db.ref();
const articlesRef = ref.child('articles');

function setArticles() {
  DB.articles.forEach(a => {
    const articleRef = articlesRef.push();
    articleRef.set(a.article);
  });
}

const resumeRef = ref.child('resume');
const cardsRef = resumeRef.child('contents');
const accompsRef = resumeRef.child('accomplishments');

// setResume();

function setResume() {
  DB.resume.contents.forEach(c => {
    const cardContentRef = cardsRef.push();
    let cardContent = {
      type: c.type,
      title: c.title  ,
      date: c.date,
      description: c.description,
      link: c.href ? c.href : '',
      position: c.position ? c.position : ''
    };
    if (c.accomplishments) {
      cardContent.accomplishmentKeys = [];
      c.accomplishments.forEach(a => {
        let accmpRef = accompsRef.push();
        cardContent.accomplishmentKeys.push(accmpRef.key);
        let accmp = Object.assign({}, a, {parentKey: cardContentRef.key});
        accmpRef.set(accmp);
      });
    }
    cardContentRef.set(cardContent);
  });
}
