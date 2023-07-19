// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})
// Function to set the active template and apply corresponding class
const setTemplate = (template) => {
    const previewSection = document.getElementById("preview-sc");
    previewSection.className = `print_area ${template}`;
    generateCV(); // Regenerate CV to apply template changes
};

// Event listeners for template selection buttons
document.getElementById("template1").addEventListener("click", () => setTemplate("template1"));
document.getElementById("template2").addEventListener("click", () => setTemplate("template2"));
document.getElementById("template3").addEventListener("click", () => setTemplate("template3"));
