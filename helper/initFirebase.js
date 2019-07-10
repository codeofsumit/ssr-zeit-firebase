import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    projectId: ''
  })
}

export const fb = firebase
export const db = firebase.firestore()
