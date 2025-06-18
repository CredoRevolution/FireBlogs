import Vue from 'vue'
import Vuex from 'vuex'
import {collection, addDoc, getDoc,getDocs, doc, updateDoc, query, orderBy,deleteDoc, where} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import db from "../firebase/firebaseInit.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogPosts: [],
    postLoaded: false,
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
  getters: {
    blogPostFeed: (state) => state.blogPosts.slice(0, 2),
    blogPostCards: (state) => state.blogPosts.slice(2,6),
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
    },
    setBlogState(state, payload) {
      state.blogTitle = payload.blogTitle
      state.blogHTML = payload.blogHTML
      state.blogPhotoName = payload.blogCoverPhotoName
      state.blogPhotoFileURL = payload.blogCoverPhoto
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
    },
    async getPosts({state}) {

      const dataBase = collection(db, "blogPosts")
      const q = query(dataBase, orderBy("date", "desc"))
      const dbResponse = await getDocs(q)
      state.blogPosts = []
      dbResponse.forEach((doc) => {
          if(!state.blogPosts.some(post => post.blogId === doc.data().blogId)) {
              const data = {
                blogId: doc.data().blogId,
                blogCoverPhoto: doc.data().blogCoverPhoto,
                blogTitle: doc.data().blogTitle,
                blogDate: doc.data().date,
                blogHTML: doc.data().blogHTML,
                blogCoverPhotoName: doc.data().blogCoverPhotoName
              }
              state.blogPosts.push(data)
          }
      })
      state.postLoaded = true
    },
    async deletePost({state,commit}, payload) {
      try {
        const postsRef = collection(db, "blogPosts");
        const q = query(postsRef, where("blogId", "==", payload));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // Get the first document that matches the blogId
          const docToDelete = querySnapshot.docs[0];
          await deleteDoc(doc(db, "blogPosts", docToDelete.id));

          // Remove the post from the state
          const index = state.blogPosts.findIndex(post => post.blogId === payload);
          if (index !== -1) {
            state.blogPosts.splice(index, 1);
          }
        } else {
          console.error("No post found with blogId:", payload);
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    },

  },
  modules: {
  }
})
