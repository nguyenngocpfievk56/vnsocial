export default function ({ store, redirect }) {
  if (store.$cookies.get('uid')) {
    return redirect('/')
  }
}