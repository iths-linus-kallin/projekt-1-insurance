function clickHandler(event){
    var target = event.currentTarget.getAttribute("href")
    anime({
        targets: event.currentTarget,
        scale: 1.5,
        rotate: '3turn',
        complete: function(anim){
            window.location = target
        }
    });
}

var menu = document.querySelectorAll(".menu")

for(let item of menu){ 
    item.addEventListener("click", clickHandler)
}

function button(){
var relativeEl = document.querySelector('.button');
relativeEl.style.transform = 'translateX(0px)';

anime({
    targets: '.button',
    translateX: {
        value: '*=2.5', // 100px * 2.5 = '250px'
        duration: 1000
    },
    width: {
        value: '-=20px', // 28 - 20 = '8px'
        duration: 1800,
        easing: 'easeInOutSine'
    },
    rotate: {
        value: '+=2turn', // 0 + 2 = '2turn'
        duration: 1800,
        easing: 'easeInOutSine'
    },
    direction: 'alternate'
});
}

button()

function slide(){
    anime({
        targets: '.css-selector-demo .righttop',
        translateX: 250
    });
}

slide()

// function gradient(){
//     var granimInstance = new Granim({
//         element: 'h1',
//         direction: 'left-right',
//         states : {
//             "default-state": {
//                 gradients: [
//                     ['#EB3349', '#F45C43'],
//                     ['#FF8008', '#FFC837'],
//                     ['#4CB8C4', '#3CD3AD'],
//                     ['#24C6DC', '#514A9D'],
//                     ['#FF512F', '#DD2476'],
//                     ['#DA22FF', '#9733EE']
//                 ],
//                 transitionSpeed: 2000
//             }
//         }
//     });
// }

// gradient()