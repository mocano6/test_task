$(".plus-minus").click(function(){
    let object1 = this.parentNode.parentNode;
    object1 = object1.children[1].children[1];
    $(object1).toggle();
    if (object1.style.display == 'none') {
        this.innerHTML = '+';
    }else{
        this.innerHTML = '&#x2212;';
    }
});
$(".cap-value .title").click(function(){
    object1 = this.parentNode.children[1];
    $(object1).toggle();
    let object2 = this.parentNode.parentNode.children[0].children[0];

    if (object1.style.display == 'none') {
        object2.innerHTML = '+';
    }else{
        object2.innerHTML = '&#x2212;';
    }
});

var progressBar = document.querySelectorAll('.progress-bar');
for (let i = 0; i < progressBar.length; i++) {
    let x = $(progressBar[i]).attr("aria-valuenow");
    let lvlSpace = progressBar[i].parentNode.parentNode.children[0].children[1];
    if (x>=81 && x<=100) {
        var responseTxt = 'Pro';
    }else if (x>=61 && x<=80) {
        var responseTxt = 'Very good';
    }else if (x>=41 && x<=60) {
        var responseTxt = 'Good';
    }else if (x>=1 && x<=40) {
        var responseTxt = 'Average';
    }else{
        var responseTxt = 'error';
    }
    lvlSpace.innerHTML = responseTxt;
}