const auth = ({ store, $storage, redirect, route }) => {
  if (route.name !== '/login') {
    !$storage.getCookie('accessToken') && redirect('/login')
  }
}
export default auth
