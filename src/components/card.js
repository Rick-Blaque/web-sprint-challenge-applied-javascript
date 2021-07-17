import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  let card = document.createElement('div')
  let headline = document.createElement('div')
  let author = document.createElement('div')
  let imgCont = document.createElement('div')
  let img = document.createElement('img')
  let span = document.createElement('span')

  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgCont.classList.add('img-container')

  headline.textContent = article.headline;
  span.textContent = `By ${article.authorName}`
  img.src =  article.authorPhoto

  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgCont)
  author.appendChild(span)
  imgCont.appendChild(img)


return card

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  let info = axios.get('https://lambda-times-api.herokuapp.com/articles')
  info.then((data) => {
    console.log(data.data.articles)
      let bootstrap = data.data.articles.bootstrap
      let javascript = data.data.articles.javascript
      let jquery = data.data.articles.jquery
      let node1 = data.data.articles.node
      let tech = data.data.articles.technology

      let sel = document.querySelector(selector)
      bootstrap.forEach(el => {
        let art = Card(el)
        sel.appendChild(art)
      });
      javascript.forEach(el => {
        let art = Card(el)
        sel.appendChild(art)
      });
      jquery.forEach(el => {
        let art = Card(el)
        sel.appendChild(art)
      });
      node1.forEach(el => {
        let art = Card(el)
        sel.appendChild(art)
      });
      tech.forEach(el => {
        let art = Card(el)
        sel.appendChild(art)
      });
      return sel
  })
}

export { Card, cardAppender }
