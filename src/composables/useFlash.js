import swal from 'sweetalert'

export function useFlash() {
  function flash(message) {
    swal({
      title: 'Success!',
      text: message,
      icon: 'success',
      button: 'OK',
    })
  }

  return { flash }
}
