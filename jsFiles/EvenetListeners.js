for (let i = 1; i <= 10; i++) {
    
    document.getElementById(`user${i}`).addEventListener("click", function() {
        getPostsWithID(i);
        OnClickedStyle(i);
        
    });
}