export default defineNuxtRouteMiddleware((to, from) => {
  // console.log(to.meta.auth);
  if (to.meta.auth) {
    return navigateTo("/login");
  }
});
