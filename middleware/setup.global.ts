export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser()
  
  if (!user.value) {
    // Set default app layout for unauthenticated users
    setPageLayout('default')
  } else {
    // Set authenticated app layout for authenticated users
    setPageLayout('authenticated')
  }
})
