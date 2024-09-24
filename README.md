Here’s a **README** file for your project, explaining the functionality, structure, and how to get started with the code:

---

# Text Metrics and Replace Text Tool

## Overview

This is a simple **React** application designed to analyze and replace text. It calculates **unique word counts** and **character counts** in real-time as you type. Additionally, the application allows users to find and replace text within a given input, with the replaced text highlighted in **blue** and **bold**.

## Key Features

- **Lexi-Count**: Calculates the number of unique words in the text.
- **Char-Count**: Counts the number of characters, excluding spaces and punctuation.
- **Text Replacement**: Replaces specific text entered by the user and highlights the replacement in blue and bold.
- **Real-time updates**: Word and character counts are updated as you type in the text area.

## Technologies Used

- **React**: For building the user interface and managing state.
- **Styled-components**: For custom component styling and responsive design.

## Getting Started

### Prerequisites

You will need **Node.js** and **npm** (or **yarn**) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ArkatSreekanth/ArthAlfa_Assignment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ArthAlfa_Assignment
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

This will run the application locally at `http://localhost:3000/`.

## Usage

### Input Area

- **Enter Text Below**: Type or paste text into the input field. As you type, the word count (Lexi-Count) and character count (Char-Count) will automatically update based on the entered text.
  
### Replace Functionality

- **Find The Text**: Input the text string you want to find within the existing text.
- **Enter The Text To Replace**: Input the text string to replace the found text.
- **Replace Button**: Click the button to replace all occurrences of the text. The replaced text will be styled in blue and bold.

### Code Functionality

- **State Management**: The `useState` hook is used to track the entered text, word count, character count, and the find/replace values.
  
- **Real-time Metrics**: The `useEffect` hook is triggered whenever the text is updated. It calculates the word count and character count.
  
- **Replace Functionality**: Uses JavaScript `RegExp` to replace the target text with the replacement value.

## Contributing

Feel free to open issues or pull requests to improve this project. Contributions, bug reports, and feedback are welcome!

## License

This project is licensed under the **MIT License**.

---

This **README** gives users a clear overview of how to set up and use the project. You can add more details as you further develop or enhance your project.
