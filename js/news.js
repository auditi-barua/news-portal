const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(data => displayData(data.data))
}
 
const displayData = (data) =>{
   const datasContainer = document.getElementById('news-container')
   data.forEach(data => {
    console.log(data);
    const dataDiv = document.createElement('div')
    dataDiv.classList.add('col')
    dataDiv.innerHTML = `
             <div class="card">
              <img src="${data.image_url}" class="card-img-top" alt="...">
              <div class="card-body">
             <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
           </div>
    `;
    datasContainer.appendChild(dataDiv);
   })
}
loadData();