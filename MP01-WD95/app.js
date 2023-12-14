function generateGift() {
    // Retrieve user input
    const recipient = document.getElementById('recipient').value;
    const occasion = document.getElementById('occasion').value;
    const budget = document.getElementById('budget').value;

    // Generate a simple gift idea (you can replace this with your algorithm)
    const giftIdea = `Get a special gift for ${recipient} for the ${occasion} within a budget of $${budget}.`;

    // Display the generated gift idea
    document.getElementById('giftIdea').textContent = giftIdea;
}
