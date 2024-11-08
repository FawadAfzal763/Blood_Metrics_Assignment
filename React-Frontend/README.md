Blood Metrics Health Insights API and Dashboard
This project provides a health insights API and a dashboard application for analyzing blood metrics data. The backend uses FastAPI and OpenAI's GPT model to generate insights, while the frontend, built with React and Tailwind CSS, displays these insights and highlights health risk levels.

Project Structure
The project is divided into two main parts:

Backend (FastAPI) - Provides an API to analyze blood metrics data and generate health insights.
Frontend (React) - Displays a dashboard with blood metrics, highlights risk levels, and presents insights generated by the backend API.
Backend Files (FastAPI)
main.py: The main entry point for the FastAPI application. Defines the API endpoint /api/insights which accepts blood metrics data and returns health insights.
models.py: Contains Pydantic models for request validation, such as PatientData, which validates the incoming blood metrics data structure.
openai_service.py: A service module that contains the openai_insight function, which connects to OpenAI’s GPT model to generate health insights based on provided data.
config.py: Loads environment variables, specifically the OpenAI API key from the .env file, using the dotenv package.
sampleData.json: A sample JSON file with test data for blood metrics, used to test the API.
.env: Environment file containing sensitive information like the OpenAI API key (not included in version control).
Frontend Files (React)
The frontend application is built with React and uses Tailwind CSS for styling.

src/components/health_risk_summary/HealthRiskSummary.js: A component that calculates and displays a summary of high-risk and borderline metrics for all patients.
src/components/metrics_table/MetricsTable.js: A component that renders a table with blood metrics data, highlighting high-risk values based on predefined thresholds.
src/components/openai_insights/OpenAIInsights.js: A component that fetches and displays insights from the backend API, showing health analysis based on the blood metrics data.
src/utils/HealthRiskUtils.js: Utility functions for determining risk levels (normal, borderline, or high-risk) based on thresholds for A1C, LDL, and Glucose values.
src/data/SampleData.json: Sample data used to populate the dashboard for testing purposes.
App.js: Main entry point of the React app, which renders the dashboard by combining different components (HealthRiskSummary, MetricsTable, OpenAIInsights).
App.css: Custom CSS for styling the application.
tailwind.config.js: Tailwind configuration file to customize styles.
Getting Started with Create React App
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back! This command will remove the single build dependency from your project, providing full control over configuration files.

You can learn more in the Create React App documentation.

Setup Instructions
Backend Setup
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd Backend
Set up a Virtual Environment:

bash
Copy code
python3 -m venv venv
Activate the Virtual Environment:

On Windows:
bash
Copy code
.\venv\Scripts\Activate
On macOS/Linux:
bash
Copy code
source venv/bin/activate
Install Dependencies:

bash
Copy code
pip install -r requirements.txt
Configure Environment Variables: Create a .env file and add your OpenAI API key:

plaintext
Copy code
openai_api=YOUR_OPENAI_API_KEY
Run the FastAPI Server:

bash
Copy code
uvicorn main:app --reload
The API should be accessible at http://127.0.0.1:8000.

Frontend Setup
Navigate to the Frontend Directory:

bash
Copy code
cd Blood-Metrics
Install Dependencies:

bash
Copy code
npm install
Run the React App:

bash
Copy code
npm start
The React app will run on http://localhost:3000.

API Usage
To use the /api/insights endpoint, send a POST request with blood metrics data structured like this:

json
Copy code
{
    "data": {
        "patient_1": {
            "id": "001",
            "a1c": 5.6,
            "ldl": 120,
            "glucose": 98
        },
        "patient_2": {
            "id": "002",
            "a1c": 6.1,
            "ldl": 145,
            "glucose": 110
        },
        "patient_3": {
            "id": "003",
            "a1c": 6.4,
            "ldl": 160,
            "glucose": 126
        }
    }
}
The API will respond with insights about each patient’s health, highlighting which patient is at higher risk.