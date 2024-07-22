function showDetailsPanel(index) {
    // Retrieve flight details and populate the panel
    const flight = flights[index];
    if (flight) {
        document.getElementById('flight-number').value = flight.flightNumber || '';
        document.getElementById('details').value = flight.details || '';
        document.getElementById('flight-index').value = index;
        document.getElementById('details-panel').style.display = 'flex';
    }
}

function hideDetailsPanel() {
    document.getElementById('details-panel').style.display = 'none';
}

document.querySelector('.details-panel .close').addEventListener('click', hideDetailsPanel);
