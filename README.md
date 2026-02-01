# Image Editor

A modern, browser-based image editor built with vanilla JavaScript, HTML, and CSS. This application provides real-time image filtering and editing capabilities with a clean, intuitive interface.

## Features

### Real-time Image Filters
- **Brightness**: Adjust image luminosity (0-200%)
- **Contrast**: Enhance or reduce color differences (0-200%)
- **Saturation**: Control color intensity (0-200%)
- **Hue Rotation**: Shift color spectrum (0-360°)
- **Blur**: Apply Gaussian blur effect (0-20px)
- **Grayscale**: Convert to black and white (0-100%)
- **Sepia**: Apply vintage sepia tone (0-100%)
- **Opacity**: Adjust transparency (0-100%)
- **Invert**: Invert image colors (0-100%)

### Preset Filters
Ten professionally designed preset filters for quick image transformation:
- **Drama**: High contrast with enhanced brightness for bold images
- **Vintage**: Warm, nostalgic look with sepia tones
- **Old School**: Classic film photography aesthetic
- **Cyberpunk**: Vibrant, futuristic color grading
- **Soft Glow**: Gentle brightness boost with subtle blur
- **Noir**: Classic black and white with high contrast
- **Warm Sunset**: Golden hour color temperature
- **Cool Tone**: Blue-shifted, calm atmosphere
- **Faded**: Washed-out, retro appearance
- **Retro Pop**: Saturated, punchy colors

### User Interface
- Live value displays for all filter adjustments
- Smooth animations and transitions
- Custom-styled range sliders with visual feedback
- Responsive layout with scrollable filter panel
- Image preview with canvas rendering
- One-click preset application

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS variables, animations, and custom properties
- **JavaScript**: Vanilla JS for image manipulation and event handling
- **Canvas API**: Real-time image filtering and rendering

## Installation

1. Clone the repository:
```bash
git clone https://github.com/abhishekkp00/Image-Editor.git
cd Image-Editor
```

2. Open `index.html` in your web browser:
```bash
# Using a local server (recommended)
python -m http.server 8000
# or
npx serve
```

3. Navigate to `http://localhost:8000` in your browser

## Usage

1. **Upload Image**: Click the "Choose image" button to select an image from your device
2. **Adjust Filters**: Use the sliders in the Filters section to manually adjust individual parameters
3. **Apply Presets**: Click any preset button to instantly apply predefined filter combinations
4. **Reset**: Click the "Reset" button to restore all filters to default values
5. **Download**: Click the "Download" button to save your edited image

## Project Structure

```
Image-Editor/
│
├── index.html          # Main HTML structure
├── styles.css          # Application styling and animations
├── theme.css           # CSS variables and theme configuration
├── script.js           # Image processing and event handling logic
└── README.md           # Project documentation
```

## Key Features Implementation

### Filter System
All filters are applied using CSS filter functions combined with Canvas API for rendering. The application uses the `CanvasRenderingContext2D.filter` property to apply real-time transformations.

### Preset System
Presets are predefined combinations of filter values stored as JavaScript objects. Each preset can be applied with a single click, automatically updating all slider values and the preview.

### Performance
The application uses Canvas API for efficient image rendering. Filters are applied in real-time without requiring server-side processing.

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Future Enhancements

- Additional filter effects (sharpen, vignette, temperature)
- Crop and resize functionality
- Image rotation and flip
- Undo/redo functionality
- Export in multiple formats (PNG, JPEG, WebP)
- Mobile responsive design improvements
- Custom preset creation and saving
- Batch image processing

## Contact

For questions or suggestions, please open an issue on the GitHub repository.
