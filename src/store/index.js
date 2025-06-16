import Vue from 'vue'
import Vuex from 'vuex'
import {collection, addDoc, getDoc, doc, updateDoc} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import db from "../firebase/firebaseInit.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Blog Card #1",
        blogCoverPhoto: "stock-1",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "Blog Card #2",
        blogCoverPhoto: "stock-2",
        blogDate: "May 2, 2021",
      },
      {
        blogTitle: "Blog Card #3",
        blogCoverPhoto: "stock-3",
        blogDate: "May 3, 2021",
      },
      {
        blogTitle: "Blog Card #4",
        blogCoverPhoto: "stock-4",
        blogDate: "May 4, 2021",
      },
    ],
    editPost: null,
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
    blogTitle: "",
    blogHTML: "",
    blogPhotoName: "",
    blogPhotoFileURL: "",
    blogPhotoPreview: false
  },
  mutations: {
    newBlogPost(state, payload) {
      state.blogHTML = payload
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview
    },
    updateUser(state, payload) {
      state.user = payload || null
      if (!payload) {
        // Clear profile data when user signs out
        this.commit('clearProfileData')
      }
    },
    toggleEditPost(state,payload) {
      state.editPost = payload
    },
    clearProfileData(state) {
      state.profileEmail = null
      state.profileFirstName = null
      state.profileLastName = null
      state.profileUsername = null
      state.profileId = null
      state.profileInitials = null
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload
      state.profileInitials = payload.charAt(0) + state.profileLastName.charAt(0)
    },
    changeLastName(state, payload) {
      state.profileLastName = payload
      state.profileInitials = state.profileFirstName.charAt(0) + payload.charAt(0)
    },
    changeUsername(state, payload) {
      state.profileUsername = payload
    },
    setProfileAdmin(state, payload) {
      state.profileAdmin = payload
    }
  },
  actions: {
    async getCurrentUser({commit, state}, user) {
      const firebaseAuth = getAuth()
      if (firebaseAuth.currentUser) {
        const collectionRef = collection(db, "users")
        const docRef = doc(collectionRef, firebaseAuth.currentUser.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          const userData = docSnap.data()
          state.profileId = firebaseAuth.currentUser.uid
          state.profileEmail = userData.email
          state.profileFirstName = userData.firstName
          state.profileLastName = userData.lastName
          state.profileUsername = userData.username
          state.profileInitials = userData.firstName.charAt(0) + userData.lastName.charAt(0)
          let isAdmin = false
          if(user){
            const token = await user.getIdTokenResult()
            if(token.claims.admin){
              isAdmin = true
            }
          }
          commit('setProfileAdmin', isAdmin)
        } else {
          console.log("No such document!")
        }
      } else {
        console.log("User not authenticated")
      }
    },
    async updateUserSettings({state,dispatch, commit}, payload) {
      const firebaseAuth = getAuth()
      const collectionRef = collection(db, "users")
      const docRef = doc(collectionRef, firebaseAuth.currentUser.uid)
      await updateDoc(docRef, {
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername
      })
    }
  },
  modules: {
  }
})
