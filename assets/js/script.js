const modal = document.getElementById('ticketModal');
const openModalBtn = document.getElementById('comprarIngressos');
const closeModalBtn = document.getElementById('closeModal');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

const ticketForm = document.getElementById('ticketForm');
const ticketSelect = document.getElementById('ticketType');
const ticketQuantity = document.getElementById('ticketQuantity');
const priceDisplay = document.getElementById('priceDisplay');

function updateTotal() {
    const price = Number(ticketSelect.value);
    const quantity = Number(ticketQuantity.value);

    const total = price * quantity;

    priceDisplay.innerText = total + '€';
}

ticketSelect.addEventListener('change', updateTotal);
ticketQuantity.addEventListener('change', updateTotal);

ticketForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const ticketName = ticketSelect.options[ticketSelect.selectedIndex].text;
    const quantity = ticketQuantity.value;
    const totalValue = priceDisplay.innerText;

    alert(`Sucesso! Reservaste ${quantity}x ${ticketName}.\nTotal a pagar: ${totalValue}`);

    ticketForm.reset();
    priceDisplay.innerText = '15€';
    modal.style.display = 'none';
});

function filterEvents(category) {
    const cards = document.querySelectorAll('.event-card');

    cards.forEach(card => {
        if (category === 'todos' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}
