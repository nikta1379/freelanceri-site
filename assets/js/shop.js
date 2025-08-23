const productGrid = document.getElementById('productGrid')
const search = document.getElementById('search')

const services = [
  {
    title: 'طراحی لوگو مینیمال',
    desc: 'لوگو حرفه‌ای با سبک ساده و برندینگ قوی',
    price: '۳۵۰٬۰۰۰ تومان',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    title: 'ویرایش ویدیو تبلیغاتی',
    desc: 'تدوین با پریمیر و افتر افکت برای شبکه‌های اجتماعی',
    price: '۵۰۰٬۰۰۰ تومان',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    title: 'طراحی سایت شرکتی',
    desc: 'سایت واکنش‌گرا با پنل مدیریت و سئو اولیه',
    price: '۱٬۵۰۰٬۰۰۰ تومان',
    image: 'https://via.placeholder.com/400x300'
  }
]

function renderCards(list) {
  productGrid.innerHTML = ''
  list.forEach(service => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
      <img src="${service.image}" alt="${service.title}" />
      <div class="card-content">
        <h3>${service.title}</h3>
        <p>${service.desc}</p>
        <div class="price">${service.price}</div>
        <button>ارسال درخواست</button>
      </div>
    `
    productGrid.appendChild(card)
  })
}

search.addEventListener('input', () => {
  const query = search.value.toLowerCase()
  const filtered = services.filter(s =>
    s.title.toLowerCase().includes(query)
  )
  renderCards(filtered)
})

renderCards(services)
