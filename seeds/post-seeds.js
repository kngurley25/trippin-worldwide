const { Post } = require('../models');

const postData = [
    {
        user_id: 1,
        title: "Family trip to the City",
        description: "Sightseeing visit to Central Park, the MET, the Statue of Liberty, and Times Square",
        start_date: '2010-10-01',
        end_date: '2010-10-07'
    },
    {
        user_id: 2,
        title: "My London Trip",
        description: "Tour of all of the english pubs",
        start_date: '2011-09-01',
        end_date: '2011-09-07'
    },
    {
        user_id: 3,
        title: "A Paris Adventure",
        description: "A trip filled with art and pastries",
        start_date: '2012-08-01',
        end_date: '2012-08-07'
    },
    {
        user_id: 4,
        title: "Trip to Down Under",
        description: "Harbor views and museums",
        start_date: '2013-07-01',
        end_date: '2013-07-07'
    },
    {
        user_id: 5,
        title: "Beach Vacation",
        description: "Relaxing time with friends",
        start_date: '2014-06-01',
        end_date: '2014-06-07'
    },
    {
        user_id: 1,
        title: "New Adventures in Japan",
        description: "A tour of Tokoyo life and culture",
        start_date: '2015-05-01',
        end_date: '2015-05-07'
    },
    {
        user_id: 2,
        title: "The Bay Area",
        description: "A visit to the Golden Gate bridge, wineries, and state parks",
        start_date: '2016-04-01',
        end_date: '2016-04-07'
    },
    {
        user_id: 3,
        title: "Coastal visit to Spain",
        description: "Explored the city life and views of Spanish architecture",
        start_date: '2017-03-01',
        end_date: '2017-03-07'
    },
    {
        user_id: 4,
        title: "Island Visit",
        description: "Spent time on the beach and exploring the island landscape",
        start_date: '2018-02-01',
        end_date: '2018-02-07'
    },
    {
        user_id: 5,
        title: "Getaway through Italy",
        description: "Toured the Italian city life and countryside",
        start_date: '2019-01-01',
        end_date: '2019-01-07'
    },
    {
        user_id: 1,
        title: "Roman Holiday",
        description: "Sightseeing in capitol",
        start_date: '2020-12-01',
        end_date: '2020-12-07'
    },
    {
        user_id: 2,
        title: "Wine trip to Northern California",
        description: "Tour the city and traveled surrounding areas",
        start_date: '2021-11-01',
        end_date: '2021-11-07'
    },
    {
        user_id: 3,
        title: "When in Rome",
        description: "Summer college trip with best friends from school",
        start_date: '2019-10-01',
        end_date: '2019-10-07'
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;