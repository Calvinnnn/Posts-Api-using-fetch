let currentSelectedUser = null;

function OnClickedStyle(i){
    // Remove 'clicked' class from previously selected user
    if (currentSelectedUser != null) {
        document.getElementById(`user${currentSelectedUser}`).classList.remove("clicked");
    }
    
    // Add 'clicked' class to current user
    document.getElementById(`user${i}`).classList.add("clicked");
    
    // Update the current selected user
    currentSelectedUser = i;
}