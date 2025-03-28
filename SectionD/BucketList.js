// Add an event listener to the "Add Item" button
document.getElementById('addButton').addEventListener('click', addItem);

// Function to add an item to the bucket list
function addItem() {
    // Get the value from the input field
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim(); // Trim whitespace from the input

    // Check if the input is empty
    if (itemText === '') {
        alert('Please enter an item.'); // Alert the user if input is empty
        return; // Exit the function
    }

    // Create a new list item (li) element
    const li = document.createElement('li');
    li.textContent = itemText; // Set the text of the list item

    // Create a remove button for the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove'; // Set the button text

    // Add an event listener to the delete button
    deleteButton.addEventListener('click', function() {
        li.remove(); // Remove the list item when the button is clicked
    });

    // Append the delete button to the list item
    li.appendChild(deleteButton);
    // Append the list item to the bucket list
    document.getElementById('bucketList').appendChild(li);
    // Clear the input field after adding the item
    itemInput.value = ''; 
}