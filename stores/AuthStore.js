import { defineStore } from 'pinia'
import { useAppStore } from './AppStore'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    appStore: useAppStore(),
    supabaseClient: useSupabaseClient(),
    user: useSupabaseUser(),
    userProfile: {}
  }),
  getters: {
  },
  actions: {
    async init() {
      this.getProfile()
    },
    async getProfile() {
      try {
        this.appStore.setLoader(true)
        const { data, error } = await this.supabaseClient
          .from('profiles')
          .select(`
            firstname,
            lastname,
            username,
            street,
            postcode,
            city,
            country,
            photo
          `)
          .single()
        if (error) throw error
        this.userProfile = data
      } catch (error) {
        this.appStore.setError(error)
      }
    },
    async signUp(email, password) {
      try {
        this.appStore.setLoader(true)
        const { data, error } = await this.supabaseClient.auth.
          signUp({
            email: email,
            password: password
          })
        if (error) throw error
      } catch (error) {
        this.appStore.setError(error)
      } finally {
        this.appStore.setSuccess('Registration was successful. Please check your email to confirm your account.')
        this.appStore.setLoader(false)
      }
    },
    async signInWithPassword(email, password) {
      try {
        this.appStore.setLoader(true)
        const { error } = await this.supabaseClient.auth
          .signInWithPassword({
            email: email,
            password: password,
            options: {
              redirectTo: 'http://localhost:3000/home'
            }
          })
        if (error) throw error
      } catch (error) {
        this.appStore.setError(error)
      } finally {
        this.appStore.setLoader(false)
        this.appStore.setSuccess('You were successfully logged in.')
      }
    },
    async signInWithOAuth(provider) {
      try {
        this.appStore.setLoader(true)
        const { error } = await this.supabaseClient.auth
          .signInWithOAuth({
            provider: provider,
            options: {
              redirectTo: 'http://localhost:3000/home'
            }
          })
        if (error) throw error
      } catch (error) {
        this.appStore.setError(error)
      } finally {
        this.appStore.setLoader(false)
        this.appStore.setSuccess('You were successfully logged in.')
      }
    },
    async updateProfile() {
      try {
        this.appStore.setLoader(true)
        const { error } = await this.supabaseClient
          .from('profiles')
          .upsert({
            firstname: this.userProfile.firstname,
            lastname: this.userProfile.lastname,
            username: this.userProfile.username,
            street: this.userProfile.street,
            postcode: this.userProfile.postcode,
            city: this.userProfile.city,
            country: this.userProfile.country,
          })
          .select()
        if (error) throw error
      } catch (error) {
        this.appStore.setError(error)
      } finally {
        this.appStore.setLoader(false)
        this.appStore.setSuccess('Your account data has been updated successfully.')
      }
    },
    async updatePhoto(images) {
      try {
        this.appStore.setLoader(true)

        await this.supabaseClient
          .storage
          .from('avatars')
          .remove([`public/${this.userProfile.photo.split('/').pop()}`])

        const { data: file, error } = await this.supabaseClient
          .storage
          .from('avatars')
          .upload(`public/${this.user.id}-${Date.now()}.png`, images[0], {
            upsert: true
          })

        const { data: photo } = await this.supabaseClient
          .storage
          .from('avatars')
          .getPublicUrl(file.path)

        this.userProfile.photo = photo.publicUrl

        await this.supabaseClient
          .from('profiles')
          .upsert({
            photo: photo.publicUrl
          })

        if (error) throw error
      } catch (error) {
        this.appStore.setError(error)
      } finally {
        this.appStore.setLoader(false)
        this.appStore.setSuccess('Your profile picture has been updated successfully.')
      }
    },
    async updateEmail(email) {
      try {
        this.appStore.setLoader(true)
        const { error } = await this.supabaseClient.auth
          .updateUser({
            email: email
          })
        if (error) throw error
      } catch (error) {
        this.appStore.setError(error)
      } finally {
        this.handleSignOut()
      }
    },
    async updatePassword(password) {
      try {
        this.appStore.setLoader(true)
        const { error } = await this.supabaseClient.auth
          .updateUser({
            password: password
          })
        if (error) throw error
      } catch (error) {
        this.appStore.setError(error)
      } finally {
        this.handleSignOut()
      }
    },
    async handleSignOut() {
      try {
        this.appStore.setLoader(true)
        const { error } = await this.supabaseClient.auth
          .signOut()
        if (error) throw error
      } catch (error) {
        this.appStore.setLoader(false)
        this.appStore.setError(error)
      } finally {
        setTimeout(navigateTo("/login"), 500)
        this.appStore.setLoader(false)
        this.appStore.setSuccess('You were successfully logged out.')
      }
    }
  }
})