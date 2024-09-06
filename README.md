# Crime Rate Predictor - Unlock Safety: Reduce Crime Rate Together
<img src="https://github.com/AbhayRautela213/Crime-Rate-Prediction/assets/99676980/4cc6a668-1af7-485f-88e1-94892dd4e75d">
Crime Rate Predictor is an application that uses machine learning techniques to predict crime rates in 19 Indian metropolitan cities. The goal of this project is to assist law enforcement agencies in understanding crime patterns and allocating resources effectively to reduce crime rates and improve public safety.

## About the Application

Crime rate prediction has become an important tool for law enforcement agencies to help them better understand patterns of crime and anticipate where crime is likely to occur. By predicting future crime trends, law enforcement agencies can better allocate resources to areas that are likely to experience increases in criminal activity. This could lead to a decrease in crime overall, as well as an increase in public safety. Additionally, crime rate prediction can help police departments develop better strategies for responding to crime as it happens.

The dataset is prepared manually based on the publication available on the Indian National Crime Rate Bureau (NCRB) official website. This data provides statistics on crimes committed in 19 metropolitan cities during the year 2014 to 2021. With the help of this application, we can predict the crime rates for 10 different categories of crime that are likely to occur in 19 Indian metropolitan cities over the next few years. It includes statistics on 10 different categories of crime, including murder, kidnapping, crime against women, crime against children, crime committed by juveniles, crime against senior citizens, crime against SC, crime against ST, economic offences, and cybercrimes.

The system uses scikit-learn's Random Forest Regression model, which takes year, city name, and crime type data as inputs. Random Forest Regression is a type of an ensemble learning techniques that can be used to predict continuous values from a collection of data. It works by creating a large number of "decision trees" which each make a prediction about the target variable. Then it averages all the predictions to come up with a final prediction. This makes it more accurate than a single decision tree. The model predicts the crime rate with an accuracy of 93.20% on the testing dataset.

## Features

- Crime rate prediction for 10 different categories of crime
- Prediction for 19 Indian metropolitan cities
- Historical crime data from 2014 to 2021
- Random Forest Regression model for accurate predictions
- Model accuracy of 93.20% on testing dataset

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/AbhayRautela213/Crime-Rate-Prediction.git

2. Navigate to the project directory:

   ```shell
   cd Crime-Rate-Prediction

3. Install the required dependencies:

   ```shell
   pip install -r requirements.txt
   
4. Run the application:

   ```shell
   python app.py


## Usage

- Launch the application by running `app.py`.
- Select the desired city, crime type, and year for which you want to predict the crime rate.
- Click on the "Predict" button to generate the crime rate prediction.
- The predicted crime rate will be displayed on the screen.

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make the necessary changes and commit them.
- Submit a pull request, clearly explaining the changes you made.

Please ensure that your contributions adhere to the project's coding conventions and are accompanied by appropriate tests.

## Contact

If you have any questions, suggestions, or issues regarding this project, please feel free to [contact me](mailto:abhayrautela213@gmail.com).
