const test = document.querySelector('.test');

fetch('https://janghwanpark.github.io/ajax-data-storage/json-data/product-data/movie-data.json')
  .then(res => res.json())
  .then(data => data.movies.forEach((movie) => {
    const { id, title, director, year, rating, product } = movie;
    let test2 = `
<div class="products-wrapper" data-id="${id}">
    <div class="products-data-information flex-box">
      <h2>영화명 : <span>${title}</span></h6>
      <p>
      년도 : <span>${year}</span> <br>
      감독 : <span>${director}</span> <br>
      평점 : <span>${rating}</span> <br>
      </p>
      <button>냠냠</button>
    </div>
  </div>`
    test.insertAdjacentHTML("beforeend",test2);
    })
  )


  .catch(error => console.log(error))

