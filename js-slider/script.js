var models = [{
        name: 'Bmw',
        image: 'img/bmw.jpg',
        link: 'http://www.parxlab.co'
    },
    {
        name: 'Mazda Cx-3',
        image: 'img/mazda.jpg',
        link: 'http://www.parxlab.co'
    }, {
        name: 'Volvo',
        image: 'img/volvo.jpg',
        link: 'http://www.parxlab.co'
    },

    {
        name: 'Skoda',
        image: 'img/skoda.jpg',
        link: 'http://www.parxlab.co'
    },
    {
        name: 'Honda',
        image: 'img/honda.jpg',
        link: 'http://www.parxlab.co'
    },
]

var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
    duration: '2000',
    random: false,
}

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval)
    })
});

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings);
    })
})

function init(settings) {
    var prev;
    interval = setInterval(function () {
        if (settings.random) {
            //random index
            do {
                index = Math.floor(Math.random() * slaytCount)
            } while (index == prev)
            prev = index;

        } else {
            //artan index
            if (slaytCount == index + 1) {
                index = -1
            }
        }
        showSlide(index);
        console.log('index; :>> ', index);
        index++;

    }, settings.duration);
    showSlide(index);


}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {

    index--;
    showSlide(index)
    console.log('index :>> ', index);

})

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {


    index++;
    showSlide(index)
    console.log('index :>> ', index);

})

function showSlide(i) {
    index = i
    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }
    document.querySelector('.card-title').textContent = models[index].name
    document.querySelector('.card-img-top').setAttribute('src', models[index].image)
    document.querySelector('.card-link').setAttribute('href', models[index].link)
}