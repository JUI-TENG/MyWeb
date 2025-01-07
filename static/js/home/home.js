$(document).ready(function () {
    $("#industry_category").click(function () {
        $("#inds_list").toggle()
    })
})

// Toggle the list visibility
document.getElementById('industry_category').addEventListener('click', function () {
    const list = document.querySelector('.left-pane ul');
    list.classList.toggle('hidden');
});

// Handle list item clicks
document.querySelectorAll('.list-item').forEach(item => {
    item.addEventListener('click', function () {
        // Display URL
        const urlDisplay = document.querySelector('.right-pane .url-display');
        urlDisplay.textContent = this.dataset.url;

        // Populate table
        const tableBody = document.querySelector('.right-pane table tbody');
        tableBody.innerHTML = '';
        const details = JSON.parse(this.dataset.details);
        details.forEach(detail => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${detail.code}</td><td>${detail.company}</td>`;
            tableBody.appendChild(row);
        });
    });
});