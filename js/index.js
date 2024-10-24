document.getElementById('openLogin').addEventListener("click", function () {
   document.getElementById('modal').classList.add('open') 
})

document.getElementById('close-modal').addEventListener("click", function () {
    document.getElementById('modal').classList.remove('open') 
 })


 window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('modal').classList.remove('open')
    }
 })

 document.querySelector("#modal", '.modal-box').addEventListener("click", event => {
    event._isClickWidthInModal = true;
 });


 document.getElementById('modal').addEventListener("click", event => {
    if(event._isClickWidthInModal) return;
        event.currentTarget.classList.remove('open')
    });