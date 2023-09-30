const articles = document.querySelectorAll('.article');

articles.forEach((article) => {
  const title = article.querySelector('.title');
  const content = article.querySelector('.content');

  // Add click event listener to each article's title
  title.addEventListener('click', () => {
    // Hide all other article contents
    articles.forEach((otherArticle) => {
      const otherContent = otherArticle.querySelector('.content');
      if (otherArticle !== article) {
        otherContent.style.display = 'none';
      }
    });

    // Toggle the display of the clicked article's content
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});




