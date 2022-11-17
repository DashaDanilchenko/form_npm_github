import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


const singupForm = document.querySelector('form')
async function handelSubmit(event) {
    event.preventDefault()
    const email = singupForm.email.value
    const password = singupForm.password.value
 const res = await fetch(' http://localhost:3000/users', {
        method: 'POST',
        headers: {
         Accept: "application/json",
         'Content-Type':"application/json"
        },
        body: JSON.stringify({email, password})
    })
    const data = await res.json()

    const defaultOptions = {
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
    }

    const okStyle = {
      text: "ok!",
      style: {
        background: "gren",
      }
    }

    const noStyle = {
      text: "no!",
      style: {
        background: "red",
      }
    }
    if(res.ok) {
      Toastify({
        ...defaultOptions,
       ...okStyle,
      }).showToast()
    } else {
      Toastify({
        ...defaultOptions,
       ...noStyle, 
      }).showToast();
    }
}
singupForm.addEventListener('submit', handelSubmit)