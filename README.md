# TBC x USAID Single-Page Application

## Project Overview

The TBC x USAID Single-Page Application is a web project that showcases the collaboration between TBC and USAID. The application is built using a stack comprising HTML, CSS, and vanilla JavaScript, providing a clean and efficient structure for easy maintenance and scalability. The project focuses on delivering an immersive and responsive user experience across various devices and browsers.

## Project Structure

The project is organized into folders that separate concerns, making it modular and easy to navigate:

1. **app folder** - Houses JavaScript files for specific sections:

   - **header folder** - Contains the JavaScript logic for the header.
   - **sections folder** - Includes sub-folders for each section:
     - **courses folder** - Manages the dynamic display of various courses.
     - **partners folder** - Handles the slider showcasing different partners.
     - **questions folder** - Implements the accordion feature for organized information presentation.

2. **assets folder** - Stores image and font resources for the application:

   - **fonts folder** - Hosts font files.
   - **images folder** - Organized into sub-folders for courses, icons, and partner images.

3. **css folder** - Contains CSS files for styling:
   - **header folder** - Styles for the header.
   - **sections folder** - Includes individual CSS files for each section.
   - **footer folder** - Styles for the footer.

## Technologies Used

- **HTML, CSS, JavaScript**: Core technologies for web development.
- **Style.css**: Aggregated CSS file that imports other CSS files for a modular approach.
- **CSS Prefixer**: Utilized for cross-browser compatibility by automatically adding vendor prefixes to CSS rules.
- **Transitions**: Implemented for smooth visual effects, enhancing user experience.
- **Burger Menu**: Incorporated with transform transitions for seamless navigation in the mobile version.
- **Accordion and Slider**: Utilize JavaScript for interactive and engaging content presentation.
- **Responsive Design**: Ensures optimal viewing and interaction across a wide range of devices.
- **Browser Compatibility**: Tested and optimized for Firefox, Chrome, Edge, and Safari.

## Sections Overview

### Courses

The Courses section utilizes a dynamic data array mapped with JavaScript to display various courses, ensuring easy maintenance and scalability.

### Partners Slider

The Partners section features a visually appealing slider with CSS transitions, enhancing the user experience and providing touch-screen functionality for mobile devices.

### Accordion Feature

The Accordion section employs a collapse transition for a user-friendly interface, allowing users to expand and collapse content for structured information presentation.

### Header Mobile Version

For the mobile version, a burger menu is incorporated with smooth transform transitions, providing a responsive and visually pleasing experience.

## How to Use

1. **Clone the Repository**: Use the command `git clone https://github.com/IASIKO/TBCxUSAID`.
2. **Open index.html**: Access the application by opening the `index.html` file in your preferred web browser.

## Conclusion

The TBC x USAID Single-Page Application demonstrates a professional and modular approach to web development, utilizing a stack of technologies to deliver a responsive, visually appealing, and user-friendly experience. The project's structure and features make it easy to maintain and scale in the future.
