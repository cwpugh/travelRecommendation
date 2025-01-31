const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

    function searchKeyword() {
        const input = document.getElementById('keywordInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

        fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
            const keyword = data.conditions.find(item => item.name.toLowerCase() === input);

            if (condition) {
              const symptoms = condition.symptoms.join(', ');
              const prevention = condition.prevention.join(', ');
              const treatment = condition.treatment;

              resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

              resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
              resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
              resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
            } else {
              resultDiv.innerHTML = 'Keyword not found.';
            }
          })
          .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
          });
      }
        btnSearch.addEventListener('click', searchKeyword);

    function clearSearch() {
          document.getElementById("keywordInput").value = "";
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';
        }
        btnClear.addEventListener('click', clearSearch);
