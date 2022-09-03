const load_data = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(response => response.json())
    .then(data => display_category(data.data.news_category))
    .catch(error => console.log(error));
}
load_data()

const display_category = category_data =>{
     console.log(category_data);
    const show_category = document.getElementById('newscategory_item');
    category_data.forEach(category =>{
        console.log(category.category_name);
        const li_show_category= document.createElement('li');
        li_show_category.classList.add('çategory_item');
        li_show_category.innerHTML = `
        <a onclick="display_category(${category.category_id})">${category.category_name}</a>
        `;
        show_category.appendChild(li_show_category);
    });
   // toggleSpinner(false);
}
display_category();

 
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(data => displayDataDetails(data.data))
}
loadData();
const displayDataDetails = data =>{
    console.log(data);
    const newsContainer = document.getElementById('news-container')
    data.forEach(news => {
       const newsDiv = document.createElement('card');
       newsDiv.classList.add('row');
        newsDiv.innerHTML = `
        <div class="col-md-4 ">
        <img src="${data.image_url}" class="img-fluid rounded-start g-4" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">${data.details}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
     
        `;
        newsContainer.appendChild(newsDiv);
    })

}
displayDataDetails();


 








