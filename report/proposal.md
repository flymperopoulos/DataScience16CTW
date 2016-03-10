### Change the World Proposal
###### Patrick Huston and Filippos Lymperopoulos | Spring 2016

#### Summary of the Project
**What is the main idea of the project?  What is your MVP?  What are your stretch goals?**

For this project we decided to explore the Airbnb public dataset. There are several different ways to use this publicly available resource. Features of the dataset that seem interesting to play around with:

  - listing name location (lat, long, neighborhood)
  - cost
  - number of reviews
  - count of guests
  - etc.

We are interested in seeing how listings vary in terms of price, popularity and likeness given their location, name and reviews. In our MVP we want to provide visualizations relevant to our dataset.

**In what way will it change the world?  Why do you care about changing the world in this way?**

We are inspired by Airbnb’s work and we want to explore how it affects people's’ lives and how we can further help Airbnb users stay where it is considered “best” and cheapest for them. 

**What do you want to learn through doing this project?**

Here’s a list of some of our learning goals:
  - Learn how to deal with a large, multifaceted dataset, and compile and massage it into a useful format
  - Create compelling visualizations of the data
  - Apply a thought-out development workflow to facilitate our work
  - Break out of the sanitized Kaggle competition environment
  - Do some real work

**Where will you get the data for your project?**

We plan to get data directly from AirBnb - all of the data is publically available, including listings, calendar, reviews, and neighborhoods. http://insideairbnb.com/get-the-data.html

**What form will your final deliverable will take?**

Our final deliverable will take the form of some combination of iPython notebooks and visualization code written in d3 or maybe some python libraries. 

#### Workflow and Schedule
**What will your workflow be while working on this project?  How will this workflow support successful collaboration with your teammate?**

Initially we want to process our data and create own custom dataset that will contain the information (processed feature information). We will consider placing our dataset in a database and write certain scripts to increase our requests. We are planning on validating the use of a database and the authoring of scripts for sqlite parsing in the first three days of the project and from then on start exploring the processed dataset we have concluded in using. We will develop certain API methods that will be universal for the interpretation of our data. The process will be broken down into three main parts:
data exploration
understand what the dataset is and feels like, observe any correlations between features of the dataset and develop certain visualizations that help us interpret our system
model development 
after solidifying our understanding of the dataset, we will spend some time investigating the development of a model that will make some simple set of predictions
final explorations and write-up development
having certain models in hand, we will try to revisit the exploration part of our project and with the newly-acquired knowledge we gained, create some interesting visualizations that will constitute our final deliverable

**Where are you planning to be with this project by the mid-project checkin?  (Think about this carefully, I'm going to ask you to report on how this went).**

For our mid-project check-in (Friday, March 4th) - we plan on having the following components implemented- 
  - Data cleaning and compilation
  - Data exploration w/ visualizations
  - Initial model development - first iteration with a focus on exploration

#### Assessment
**How should your final deliverable be assessed?  This assessment plan must be specific enough that I can apply it to your final deliverable.**

  - Readability and accessibility to viewers that are not familiar with the dataset (along the guidelines of 538 blog posts)
  - Application/use of a predictive model as a backend API in a web-based exploratory tool
  - Can the model exploration stand alone as a piece of research/exploratory paper
  - Documentation + style of our code; i.e. comments, structure, modularity (APIs for others to implement)
  - Publish our results to be available to the world
  - Recommendation for future areas of explorations based on the work we’ve done
  - Are the visualizations/conclusions compelling? 
  - Solid and rigorous analysis of findings 
