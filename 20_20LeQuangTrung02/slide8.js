// Get a user
var url = "https://650426adc8869921ae2497f7.mockapi.io/api/tuan02/user";
var xhr = new XMLHttpRequest()
xhr.open('GET', url + '/1', true)
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);