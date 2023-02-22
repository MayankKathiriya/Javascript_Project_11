let user = JSON.parse(localStorage.getItem("WatchMan"));

if(!user){
    window.location.href="./pages/samples/login.html"
}