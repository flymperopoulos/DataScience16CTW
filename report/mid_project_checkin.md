### Change the World Mid-Project Checkin
###### Patrick Huston and Filippos Lymperopoulos | Spring 2016

#### Goals of the Project
**Did you accomplish your goals? If not, what happened?**

During the first week of the project we worked a lot on understanding the dataset we are using. Our goal for this project has been to be able to build an interface that uses a model to recommend pricing strategies to individuals interested to join the Airbnb community as hosts. We were able to explore different models, including lasso, elastic net, ridge regression and at the same time experiment with frontend rendering of our idea by writing a functional React+D3 application. We did not manage to connect the two yet, although we are working on this in the first few days of next week. We further decided not to move the data from its csv format to an sqlite3 database that we initially thought, as we believe that querying optimization was not a priority for the first week of exploration in the project.

Overall, we believe we are on track for the next week of the project.

**What have you accomplished thus far in the project? Make sure to provide pointers to any intermediate artifacts generated from your project.**

So far, we have accomplished the following:

- Initial data exploration to get a sense for the data and distributions. See  [Notebook1](https://github.com/flymperopoulos/DataScience16CTW/blob/master/model/model_exploration/dataExploration.ipynb) and [Notebook2](https://github.com/flymperopoulos/DataScience16CTW/blob/master/model/model_exploration/Patrick_Exploration.ipynb)
- Implementation of thought-out and easily extensible data cleaning and processing components in [Iteration1](https://github.com/flymperopoulos/DataScience16CTW/blob/master/model/Iteration_1.ipynb)
- Decided on initial models to try out and implemented them in [Iteration 1](https://github.com/flymperopoulos/DataScience16CTW/blob/master/model/Iteration_1.ipynb)
- Started initial work to set up React and Node app to expose the model’s predictive functionality through a web API - see [App](https://github.com/flymperopoulos/DataScience16CTW/tree/master/app)
- Basic D3 visualization working and connected to React - see [App](https://github.com/flymperopoulos/DataScience16CTW/tree/master/app)


**What is the minimum viable product that you will have done by next Friday? What are your stretch goals?**
