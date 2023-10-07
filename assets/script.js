document.addEventListener("DOMContentLoaded", function() {
      fetch("https://restcountries.com/v3.1/all")
          .then(response => response.json())
          .then(data => {
              const countryList = document.getElementById("countryList");
              
              data.forEach(country => {
                  const countryName = country.cca2;
                  const flag = country.flags.svg;
  
                  const listItem = document.createElement("li");
                  listItem.innerHTML = `<a class="dropdown-item" href="#" onclick="displayCountryInfo('${countryName}', '${flag}')">${countryName}</a>`;
                  countryList.appendChild(listItem);
              });
          })
          .catch(error => console.log(error));
  });
  
  function displayCountryInfo(countryName, flag) {
      const countryInfo = document.getElementById("countryInfo");
      countryInfo.innerHTML = `<h2>${countryName}</h2><img src="${flag}" alt="${countryName} Flag">`;
  }
  
  fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const items = data.slice(0, 6);
    //  احصل على أول 6 عناصر فقط
    items.forEach(item => {
      const title = item.title;
      const body = item.price;
      // قم بعرض العناصر في صفحة HTML أو حيث تحتاج إليه
      console.log(`Title: ${title}`);
      console.log(`Body: ${body}`);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });