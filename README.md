# Slips in a box

A fun web app built with React, Tailwind, and Firebase that helps you decide where to go on your next date! Users can add date ideas as if writing them on slips of paper and putting them into a box. On command, the app will randomly select one of the date ideas, making the decision for you.

## Features

- **Add Date Ideas**: Users can input their favorite date ideas, just like filling out an Excel sheet.
- **Random Selection**: On command, one of the date ideas is randomly selected to help decide the location for the next date.
- **Responsive UI**: The app is styled with Tailwind CSS, ensuring it works well across different devices.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Firebase

## Live Demo

The app is live and accessible here: [slips-in-a-box](https://670cfc5a2b43df0008230c79--boxofslips.netlify.app/)

## Setup Instructions

To get the app running locally:

### Prerequisites

- Node.js (v16 or later)
- Firebase account and project for backend

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/slips-in-a-box.git
    cd slips-in-a-box
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up Firebase:**
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add a new web app to your project.
   - Copy the Firebase configuration and add it to a `.env` file in your project root:
     ```env
     VITE_FIREBASE_API_KEY=your_firebase_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     VITE_APP_FIREBASE_APP_ID=your_firebase_app_id
     ```

4. **Run the application:**
    ```bash
    npm run dev
    ```

5. **Open the app:**
   - Navigate to [http://localhost:8000](http://localhost:8000) in your web browser to see the app in action.

## Usage

1. **Add Your Date Ideas**:
   - Click the `Add` button on the navigatiion bar to start adding ideas!
   - Once done you should see your idea displayed on the main page

2. **Random Selection**:
   - Click the `Generate` button to randomly select one of the date ideas from the list.

## Project Structure

- **`src/`**: Contains all of the source code for the app.
  - **`components/`**: Reusable React components.
  - **`firebase.js`**: Configuration file for Firebase integration.
  - **`App.js`**: Main app component.
  - **`index.js`**: Entry point of the app.

## Contributing

Contributions are welcome! If you have ideas for new features or improvements, feel free to open an issue or submit a pull request.

### To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## Acknowledgments

- Inspired by the classic "draw a random idea from a box" concept.
- Built with the amazing power of **React** and **Firebase**.

## Contact

If you have any questions or suggestions, feel free to reach out to [zhangyuan1283@gmail.com].

---

Happy dating! 🎉
