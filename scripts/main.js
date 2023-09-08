window.addEventListener('DOMContentLoaded', () => {
  setTimeout(showNews(), 1000);
  setTimeout(hideNews(), 1000);
})

const btnShow = document.querySelector('.news-content__btn_hide');
const btnHide = document.querySelector('.news-content__btn_show');
const newsShow = document.querySelector('.news-content_show');
const newsHide = document.querySelector('.news-content_hide');

function showNews() {
  btnShow.addEventListener('click', () => {
    newsShow.classList.remove('news-content_show_close');
    newsShow.classList.add('news-content_show_open');
    if (newsShow.classList.value == 'row news-content news-content_show news-content_show_open') {
      newsHide.classList.add('news-content_hide_close');
    }
  })
}

function hideNews() {
  btnHide.addEventListener('click', () => {
    newsShow.classList.remove('news-content_show_open');
    newsHide.classList.remove('news-content_hide_close');
    if (newsShow.classList.value != 'row news-content news-content_show news-content_show_open') {
      newsShow.classList.add('news-content_show_close');
    }
  })
}

const swiper = new Swiper('.news-content__swiper', {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn__next',
    prevEl: '.swiper-btn__prev',
  },
});