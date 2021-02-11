# NBA 2019 Championship Predictions - Machine Learning

## Personal Analysis Report

### Using `Winning Rates` as a predicator
* The model was evaluated using `Linear Regression`. The training and testing scores are almost 1.00.

![Residual plot](https://github.com/arcebri1/FinalProject/blob/fyc_analysis/NBA_Model_Img/01_LinearRegression.png?raw=true)

* [Script link](https://github.com/arcebri1/FinalProject/blob/fyc_analysis/NBA_ML_Scripts/01_Linear_Regression_winning_rate_predictions.ipynb)

### Using `WINorLOSS` as a predicator
* `Random Forest` model suggests `Team points` and `Opponent Points` are the most important facotrs.

![RF bar plot](https://github.com/arcebri1/FinalProject/blob/fyc_analysis/NBA_Model_Img/02_RandomForest_bar.png?raw=true)

* `SVM` and `KNN` models
      
   * The test accuracies are 1.00 in `SVM` and 0.93 in `KNN` models.
      
* [Script link: RF](https://github.com/arcebri1/FinalProject/blob/fyc_analysis/NBA_ML_Scripts/02_Random_Forest_win_lose_predictions.ipynb)
* [Script link: SVM and KNN](https://github.com/arcebri1/FinalProject/blob/fyc_analysis/NBA_ML_Scripts/05_SVM_KNN_win_lose_predictions.ipynb)

### Using `Team` as a predictor
* The models were evaluated using `Logistic Regression`, `SVM` and `KNN`. None of these can have satisfactory testing scores or accuracies.

* [Script link: LR](https://github.com/arcebri1/FinalProject/blob/fyc_analysis/NBA_ML_Scripts/03_Logistic_Regression_team_predictions.ipynb)
* [Script link: SVM and KNN](https://github.com/arcebri1/FinalProject/blob/fyc_analysis/NBA_ML_Scripts/04_SVM_KNN_team_predictions.ipynb)

### Summary
Using win/lose outcome as a predictor will be more accurate than using team name. In order to build a model to predict the 2019 champion using team name, more variables should be incorporated or calculated to predict the appropriate models.

### Abbreviations
* SVM: support vector machine
* KNN: k-nearest neighbors 