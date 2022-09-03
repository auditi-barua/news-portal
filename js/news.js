const loadData = () => {
    fetch(' https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(data => displayDataDetails(data.data))
}
const displayDataDetails = (data) => {
    const newsContainer = document.getElementById('news-container')
    data.forEach(news =>{
        console.log(news);
        const newsDiv = document.createElement('div')
        newsDiv.classList.add('col')
        newsDiv.innerHTML = `
        <div class="card">
        <img src="${data.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
        `;
        newsContainer.appendChild(newsDiv);
    })
}
document.getElementById('li-1').addEventListener('click',function(){
  category()
})
const loadCategory = async id => {
    const url = 'https://openapi.programming-hero.com/api/news/category/{category_id}'
    const res = await fetch(url);
    const data = await res.json();
    displayCategory(data.data);
}
const displayCategory = category =>{
    console.log(category);
    const modalTitle = document.getElementById('categories-container');
    modalTitle.innerText = phone.name;
    const categoryDetails = document.getElementById('loading');
    console.log(phone.mainFeatures.sensors[0]);
    phoneDetails.innerHTML = `
        <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}</p>
        <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Storage Information '}</p>
        <p>Others: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth Information'}</p>
        <p>Sensor: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : 'no sensor'}</p>
    `;
}

// handle search button click
document.getElementById('loading').addEventListener('click', function(){
    // start loader
    
})

// search input field enter key handler
//document.getElementById('search-field').addEventListener('keypress', function (e) {
  //  if (e.key === 'Enter') {
    //    processSearch(10);
    //}
//});



const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}



loadData();