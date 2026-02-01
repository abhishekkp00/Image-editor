// Get elements
const imageInput = document.getElementById('imageInput');
const resetBtn = document.getElementById('reset-btn');
const downloadBtn = document.getElementById('download-btn');
const placeholder = document.querySelector('.placeholder');
const bottomContainer = document.querySelector('.bottom');

// Get all filter inputs
const brightnessSlider = document.getElementById('brightness');
const contrastSlider = document.getElementById('contrast');
const saturationSlider = document.getElementById('saturation');
const hueRotateSlider = document.getElementById('hue-rotate');
const blurSlider = document.getElementById('blur');
const grayscaleSlider = document.getElementById('grayscale');
const sepiaSlider = document.getElementById('sepia');
const opacitySlider = document.getElementById('opacity');
const invertSlider = document.getElementById('invert');

// Get preset buttons
const presetButtons = document.querySelectorAll('.preset-btn');

// Canvas setup
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.classList.add('hidden');
bottomContainer.appendChild(canvas);

let image = new Image();
let originalImageData;

// Filter values
let filters = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotate: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
};

// Preset configurations
const presets = {
    drama: {
        brightness: 90,
        contrast: 150,
        saturation: 120,
        hueRotate: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },
    vintage: {
        brightness: 110,
        contrast: 90,
        saturation: 80,
        hueRotate: 20,
        blur: 0,
        grayscale: 0,
        sepia: 40,
        opacity: 100,
        invert: 0
    },
    oldSchool: {
        brightness: 105,
        contrast: 110,
        saturation: 70,
        hueRotate: 15,
        blur: 0,
        grayscale: 0,
        sepia: 50,
        opacity: 100,
        invert: 0
    },
    cyberpunk: {
        brightness: 110,
        contrast: 140,
        saturation: 150,
        hueRotate: 280,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },
    softGlow: {
        brightness: 120,
        contrast: 85,
        saturation: 110,
        hueRotate: 10,
        blur: 2,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },
    noir: {
        brightness: 90,
        contrast: 130,
        saturation: 0,
        hueRotate: 0,
        blur: 0,
        grayscale: 100,
        sepia: 0,
        opacity: 100,
        invert: 0
    },
    warmSunset: {
        brightness: 115,
        contrast: 105,
        saturation: 130,
        hueRotate: 20,
        blur: 0,
        grayscale: 0,
        sepia: 20,
        opacity: 100,
        invert: 0
    },
    coolTone: {
        brightness: 95,
        contrast: 110,
        saturation: 110,
        hueRotate: 200,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },
    faded: {
        brightness: 110,
        contrast: 80,
        saturation: 70,
        hueRotate: 0,
        blur: 0,
        grayscale: 0,
        sepia: 10,
        opacity: 90,
        invert: 0
    },
    retroPop: {
        brightness: 105,
        contrast: 120,
        saturation: 160,
        hueRotate: 340,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    }
};

// Image upload handler
imageInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            image.src = event.target.result;
            image.onload = function() {
                // Hide placeholder and show canvas
                placeholder.style.display = 'none';
                canvas.classList.remove('hidden');
                
                // Set canvas size
                canvas.width = image.width;
                canvas.height = image.height;
                
                // Draw image
                ctx.drawImage(image, 0, 0);
                originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                
                // Apply filters
                applyFilters();
            };
        };
        reader.readAsDataURL(file);
    }
});

// Filter event listeners
brightnessSlider.addEventListener('input', function() {
    filters.brightness = this.value;
    document.getElementById('brightness-value').textContent = this.value;
    applyFilters();
});

contrastSlider.addEventListener('input', function() {
    filters.contrast = this.value;
    document.getElementById('contrast-value').textContent = this.value;
    applyFilters();
});

saturationSlider.addEventListener('input', function() {
    filters.saturation = this.value;
    document.getElementById('saturation-value').textContent = this.value;
    applyFilters();
});

hueRotateSlider.addEventListener('input', function() {
    filters.hueRotate = this.value;
    document.getElementById('hue-rotate-value').textContent = this.value;
    applyFilters();
});

blurSlider.addEventListener('input', function() {
    filters.blur = this.value;
    document.getElementById('blur-value').textContent = this.value;
    applyFilters();
});

grayscaleSlider.addEventListener('input', function() {
    filters.grayscale = this.value;
    document.getElementById('grayscale-value').textContent = this.value;
    applyFilters();
});

sepiaSlider.addEventListener('input', function() {
    filters.sepia = this.value;
    document.getElementById('sepia-value').textContent = this.value;
    applyFilters();
});

opacitySlider.addEventListener('input', function() {
    filters.opacity = this.value;
    document.getElementById('opacity-value').textContent = this.value;
    applyFilters();
});

invertSlider.addEventListener('input', function() {
    filters.invert = this.value;
    document.getElementById('invert-value').textContent = this.value;
    applyFilters();
});

// Preset buttons event listeners
presetButtons.forEach(button => {
    button.addEventListener('click', function() {
        const presetName = this.getAttribute('data-preset');
        applyPreset(presetName);
    });
});

// Apply preset function
function applyPreset(presetName) {
    if (!presets[presetName]) return;
    
    const preset = presets[presetName];
    
    // Update filter values
    filters = {...preset};
    
    // Update slider values and displays
    brightnessSlider.value = preset.brightness;
    document.getElementById('brightness-value').textContent = preset.brightness;
    
    contrastSlider.value = preset.contrast;
    document.getElementById('contrast-value').textContent = preset.contrast;
    
    saturationSlider.value = preset.saturation;
    document.getElementById('saturation-value').textContent = preset.saturation;
    
    hueRotateSlider.value = preset.hueRotate;
    document.getElementById('hue-rotate-value').textContent = preset.hueRotate;
    
    blurSlider.value = preset.blur;
    document.getElementById('blur-value').textContent = preset.blur;
    
    grayscaleSlider.value = preset.grayscale;
    document.getElementById('grayscale-value').textContent = preset.grayscale;
    
    sepiaSlider.value = preset.sepia;
    document.getElementById('sepia-value').textContent = preset.sepia;
    
    opacitySlider.value = preset.opacity;
    document.getElementById('opacity-value').textContent = preset.opacity;
    
    invertSlider.value = preset.invert;
    document.getElementById('invert-value').textContent = preset.invert;
    
    // Apply filters
    applyFilters();
}

// Apply filters function
function applyFilters() {
    if (!originalImageData) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Build filter string
    let filterString = `
        brightness(${filters.brightness}%)
        contrast(${filters.contrast}%)
        saturate(${filters.saturation}%)
        hue-rotate(${filters.hueRotate}deg)
        blur(${filters.blur}px)
        grayscale(${filters.grayscale}%)
        sepia(${filters.sepia}%)
        opacity(${filters.opacity}%)
        invert(${filters.invert}%)
    `;
    
    // Apply filters and draw
    ctx.filter = filterString;
    ctx.drawImage(image, 0, 0);
}

// Reset button
resetBtn.addEventListener('click', function() {
    filters = {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hueRotate: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    };
    
    brightnessSlider.value = 100;
    document.getElementById('brightness-value').textContent = 100;
    
    contrastSlider.value = 100;
    document.getElementById('contrast-value').textContent = 100;
    
    saturationSlider.value = 100;
    document.getElementById('saturation-value').textContent = 100;
    
    hueRotateSlider.value = 0;
    document.getElementById('hue-rotate-value').textContent = 0;
    
    blurSlider.value = 0;
    document.getElementById('blur-value').textContent = 0;
    
    grayscaleSlider.value = 0;
    document.getElementById('grayscale-value').textContent = 0;
    
    sepiaSlider.value = 0;
    document.getElementById('sepia-value').textContent = 0;
    
    opacitySlider.value = 100;
    document.getElementById('opacity-value').textContent = 100;
    
    invertSlider.value = 0;
    document.getElementById('invert-value').textContent = 0;
    
    applyFilters();
});

// Download button
downloadBtn.addEventListener('click', function() {
    if (!originalImageData) {
        alert('Please upload an image first!');
        return;
    }
    
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = canvas.toDataURL();
    link.click();
});
