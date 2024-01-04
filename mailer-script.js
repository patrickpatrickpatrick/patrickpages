const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
let firebaseConfig;

if (process.env.GOOGLE_CREDS) {
  firebaseConfig = JSON.parse(process.env.GOOGLE_CREDS);

  console.log('auth works')
} else {
  console.log('auth fails')
}
// } else {
//   firebaseConfig = applicationDefault();
// }

// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);

// export const getData = async (ref, query) => {

//   const snapshot = await ref.where(...query).get()

//   if (snapshot.empty) {
//     console.log('No matching documents.');
//     return {
//       results: []
//     };
//   }

//   let results = [];

//   snapshot.forEach(doc => {
//     results = [ ...results, doc.data() ]
//   });

//   return {
//     results
//   }
// }
