import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyARkVHeCs5NzQ3ReQrqlmrqKWTUdQfIykw',
    projectId: 'efuture-f946d'
  })
}

export const fb = firebase
export const db = firebase.firestore()
