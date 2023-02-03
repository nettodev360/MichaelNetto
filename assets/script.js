var portfolioItems = document.querySelectorAll('.portfolio-item');
      
      portfolioItems.forEach(function(item) {
        item.addEventListener('click', function() {
          alert('You clicked ' + item.querySelector('img').getAttribute('alt'));
        });
      });