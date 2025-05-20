# Love Calculator

A simple and trendy web application that calculates love compatibility between two names using a fun algorithm. Built with HTML, CSS, JavaScript, and Font Awesome for a romantic heart icon.

## Features

- **Input Two Names**: Enter your name and your partner's name to calculate love compatibility.
- **Fun Algorithm**: Calculates a percentage (0-100%) based on the sum of ASCII character codes of the names, modulo 100.
- **Dynamic Messages**: Displays different messages based on the compatibility score:
  - **100%**: "[percentage]% 💖 [name1] and [name2] are soul mates!"
  - **>80%**: "[percentage]% 😍 Great compatibility for [name1] and [name2]!"
  - **>50%**: "[percentage]% 😊 Nice spark between [name1] and [name2]."
  - **≤50%**: "[percentage]% 😕 [name1] and [name2] might be better as friends."
- **Trendy Design**: Features a romantic gradient background, a pulsing Font Awesome heart icon, and a clean, modern layout with plain CSS.
- **Responsive**: Works seamlessly on both desktop and mobile devices.
- **Large, Centered Percentage**: The compatibility percentage is displayed prominently in a larger font, centered above the message.

## Technologies Used

- **HTML**: Structure of the web application.
- **CSS**: Custom styling for a romantic and modern look, with a gradient background and animations.
- **JavaScript**: Handles the love calculation logic and dynamic result display.
- **Font Awesome**: Provides the heart icon for visual appeal.

## Setup Instructions

1. **Clone or Download**: Download the `index.html` file or clone the repository containing the Love Calculator.
2. **No Dependencies**: The application uses a CDN for Font Awesome (`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css`), so no local dependencies need to be installed.
3. **Run the Application**: Open the `index.html` file in a web browser (e.g., Chrome, Firefox, Safari).

## Usage

1. Open the `index.html` file in a web browser.
2. Enter your name in the first input field ("Your Name").
3. Enter your partner's name in the second input field ("Your Partner's Name").
4. Click the "Calculate Love" button.
5. View the result, which shows a large, centered percentage followed by a compatibility message with emojis.

## Example

- Input: "Alice" and "Bob"
- Possible Output: "85% 😍 Great compatibility for alice and bob!"

## Notes

- The application requires an internet connection to load the Font Awesome CSS from the CDN.
- Names are case-insensitive and trimmed of whitespace before calculation.
- If either name is empty, an error message ("Please enter both names!") will be displayed.

## Future Enhancements

- Add more complex algorithms for calculating compatibility.
- Include additional animations or visual effects for the result display.
- Allow users to save or share their results.

## License

This project is open-source and available under the MIT License.
