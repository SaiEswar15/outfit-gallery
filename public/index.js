document.onkeydown = function(e) {
    //Disable F12 key
    if (e.key === 'F12') {
        alert("Outfit gallery doesn't allow you to inspect")
        return false;
    }

    // Disable Ctrl+Shift+I (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        alert("Outfit gallery doesn't allow you to inspect")
        return false;
    }

    // Disable Ctrl+Shift+J (JavaScript Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        alert("Outfit gallery doesn't allow you to View JavaScript Console")
        return false;
    }

    // Disable Ctrl+U (View Page Source)
    if (e.ctrlKey && e.key === 'U') {
        alert("Outfit gallery doesn't allow you to View Page Source")
        return false;
    }

    if (e.ctrlKey && e.key === 'u') {
        alert("Outfit gallery doesn't allow you to View Page Source")
        return false;
    }

    // Disable Ctrl+c (copy)
    if (e.ctrlKey && e.key === 'C') {
        alert("Outfit gallery doesn't allow you to copy")
        return false;
    }

    if (e.ctrlKey && e.key === 'c') {
        alert("Outfit gallery doesn't allow you to copy")
        return false;
    }

    // Disable Ctrl+c (copy)
    if (e.ctrlKey && e.key === 'V') {
        alert("Outfit gallery doesn't allow you to paste")
        return false;
    }

    if (e.ctrlKey && e.key === 'v') {
        alert("Outfit gallery doesn't allow you to paste")
        return false;
    }
}

document.oncontextmenu = ()=>{
    return false;
}