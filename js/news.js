
const load_data = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(response => response.json())
        .then(data => display_categories(data.data.news_category))
        .catch(error => console.log(error));
}
const display_categories = category_data => {
    // console.log(category_data);
    const news_category = document.getElementById('news_category');
    category_data.forEach(category => {
        const news_category_item = document.createElement('li');
        news_category_item.classList.add('category_item');
        news_category_item.innerHTML = `
        <a class="${category.category_id}" onclick="load_news_data('${category.category_id}')">${category.category_name}</a>
        `;
        news_category.appendChild(news_category_item);
    })

}
const load_news_data = id => {
    toggle_spinner(true);
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
        .then(res => res.json())
        .then(data => display_news(data.data))
        .catch(error => console.log(error));
}

const display_news = data => {
    founded_news(data)
    
    const show_news_here = document.querySelector('#show_news_here');
    show_news_here.innerHTML = '';
    data.forEach(data => {
        console.log(data);
        const news_area = document.createElement('div');

        news_area.classList.add('news_area')
        news_area.innerHTML = `
        <div class="card mb-3" id="news-container" style="max-width: 540px;">
          <div class="row g-4">
            <div class="col-md-4">
              <img src="${data.thumbnail_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text deails">${data.details}</p>
                <div class="d-flex">
                <img src="${data.author.img}" class="img-fluid rounded-circle" style="width:20px;" alt="">
                <h5 class="ms-3">${data.author.name}</h5>
                <p class="ms-3">${data.author.published_date}</p>
                <p class="ms-3">${data.total_view}</p>
                <p class="ms-3">${data.rating.number}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
        show_news_here.appendChild(news_area);
    })
    toggle_spinner(false)
}

const toggle_spinner = is_loading => {
    const load_section = document.querySelector('#loader');
    if (is_loading) {
        load_section.classList.remove('d-none');
    } else {
        load_section.classList.add('d-none');
    };
};

const founded_news = data =>{
    const news_total_found = document.getElementById('news_total_found');
    news_total_found.innerHTML = `
    ${data.length} items found for category Entertainment
    `;
}

load_data();
