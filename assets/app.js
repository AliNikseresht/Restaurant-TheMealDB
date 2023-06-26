axios({
        method: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast',
        timeout: 5000
    })
    .then(res => {
        console.log(res.data.meals);
        class Sh {
            constructor(strMealThumb, strMeal) {
                this.strMealThumb = strMealThumb
                this.strMeal = strMeal
            }
            article() {
                let _sec = document.createElement('section')
                _sec.classList.add('col-12', 'col-md-4', 'pb-5')
                _sec.appendChild(this.figure())
                _sec.appendChild(this.figcaption())
                return _sec
            }
            figure() {
                let _fig = document.createElement('figure')
                _fig.classList.add('col-12', 'p-2')
                _fig.innerHTML = `
                <img class='col-12' src=${this.strMealThumb} >
                `
                return _fig
            }
            figcaption() {
                let _figcaption = document.createElement('figcaption')
                _figcaption.classList.add('col-12', 'p-2', 'text-center', 'view')
                _figcaption.innerHTML = `
                <figcaption class='col-12'>${this.strMeal}</figcaption>
            `
                return _figcaption
            }
        }
        res.data.meals.map((val) => {
            let para = new Sh(val.strMealThumb, val.strMeal)
            document.getElementById('list').appendChild(para.article())
        })

    });
// start-view-2-slider----------------------------------------------------------
axios({
        method: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/search.php?f=a',
        timeout: 5000
    })
    .then(res => {
        console.log(res.data.meals);
        class DB {
            constructor(strMealThumb, strMeal) {
                this.strMealThumb = strMealThumb
                this.strMeal = strMeal
            }
            article() {
                let _sec = document.createElement('section')
                _sec.classList.add('col-12', 'col-md-3', 'pb-5')
                _sec.appendChild(this.figure())
                _sec.appendChild(this.figcaption())
                return _sec
            }
            figure() {
                let _fig = document.createElement('figure')
                _fig.classList.add('col-12', 'p-2')
                _fig.innerHTML = `
            <img class='col-12' src=${this.strMealThumb} >
            `
                return _fig
            }
            figcaption() {
                let _figcaption = document.createElement('figcaption')
                _figcaption.classList.add('col-12', 'p-2', 'text-center', 'view')
                _figcaption.innerHTML = `
            <figcaption class='col-12'>${this.strMeal}</figcaption>
        `
                return _figcaption
            }
        }
        res.data.meals.map((val) => {
            let para = new DB(val.strMealThumb, val.strMeal)
            document.getElementById('list2').appendChild(para.article())
        })

    });



// start-----slider 3///////////////
axios({
        method: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
        timeout: 5000
    })
    .then(res => {
        // console.log(res.data.meals);
        class Al {
            constructor(strCategoryThumb, strCategory) {
                this.strCategoryThumb = strCategoryThumb
                this.strCategory = strCategory
            }
            article() {
                let _sec = document.createElement('section')
                _sec.classList.add('col-12', 'col-md-2')
                _sec.appendChild(this.figure())
                _sec.appendChild(this.figcaption())
                return _sec
            }
            figure() {
                let _fig = document.createElement('figure')
                _fig.classList.add('col-12', 'p-2')
                _fig.innerHTML = `
        <img class='col-12' src=${this.strCategoryThumb} >
        `
                return _fig
            }
            figcaption() {
                let _figcaption = document.createElement('figcaption')
                _figcaption.classList.add('col-12', 'p-2', 'text-center', 'view')
                _figcaption.innerHTML = `
        <figcaption class='col-12'>${this.strCategory}</figcaption>
    `
                return _figcaption
            }
        }
        res.data.categories.map((val) => {
            let para = new Al(val.strCategoryThumb, val.strCategory)
            document.getElementById('list3').appendChild(para.article())
        })

    });


let flag = 1,
    m = document.getElementById("mobile"),
    _h = document.getElementById("mobile").clientHeight;

function _dropmenu(e) {
    _span = e.children, flag % 2 ? (_span[0].style.transform = "rotate(41deg)",
        _span[1].style.opacity = "0", _span[2].style.transform = "rotate(-41deg)",
        document.getElementById("mobile").style.height = _h + "px") : (_span[0].style.transform = "rotate(0deg)",
        _span[1].style.opacity = "1", _span[2].style.transform = "rotate(0deg)",
        document.getElementById("mobile").style.height = "0px"), flag++
}
document.getElementById("mobile").style.height = "0px";