define({ "api": [
  {
    "type": "POST",
    "url": "auth.evolunt.addislaunch.com/auth/login",
    "title": "User login",
    "name": "LoginUser",
    "group": "Auth",
    "description": "<p>Login a user and create or update the corrosponding token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\"username\": \"john@gebeya.com\",\n\t\"password\": \"password\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "last_login",
            "description": "<p>Last Login Date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"token\": \"ekouK8J8qrx02pwWgnO40xOcX592M4ZIone8fB15g3fkblqMvc2+KV1O84vKG3haZGIK5kIY4YE8\",\n    \"user\": {\n        \"_id\": \"5a65d40aa21a2c0014947526\",\n        \"last_modified\": \"2018-01-22T12:07:38.862Z\",\n        \"date_created\": \"2018-01-22T12:07:38.862Z\",\n        \"name\": \"Muday\",\n        \"city\": \"Addis Ababa\",\n        \"website\": \"muday.com\",\n        \"user\": {\n            \"_id\": \"5a65d40aa21a2c0014947525\",\n            \"last_modified\": \"2018-01-22T12:07:38.679Z\",\n            \"date_created\": \"2018-01-22T12:07:38.679Z\",\n            \"username\": \"muday@evolunt.com\",\n            \"role\": \"charity\",\n            \"realm\": \"user\"\n        },\n        \"followers\": [],\n        \"following\": [],\n        \"location\": [],\n        \"picture\": \"\"\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "PUT",
    "url": "auth.evolunt.addislaunch.com/auth/logout",
    "title": "User logout",
    "name": "LogoutUser",
    "group": "Auth",
    "description": "<p>Logout a user and revoke the corrosponding token.</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n\t\"logout\": true\t\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "auth.evolunt.addislaunch.com/auth/signup",
    "title": "User Signup",
    "name": "SignupUser",
    "group": "Auth",
    "description": "<p>Creates a new User and corresponding User Type.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role ie charity and volunteer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User Last Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\"email\": \"john@gebeya.com\",\n\t\"password\": \"password\",\n\t\"first_name\": \"John\",\n\t\"last_name\": \"Doe\",\n\t\"role\": \"volunteer\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "realm",
            "description": "<p>User Realm</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "last_login",
            "description": "<p>Last Login Date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n \"_id\": \"5a15583bcf847f1a25edccf6\",\n \"last_modified\": \"2017-11-22T10:58:03.496Z\",\n \"date_created\": \"2017-11-22T10:58:03.496Z\",\n \"username\": \"jondow@email.com\",\n \"role\": \"volunteer\",\n \"realm\": \"user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "PUT",
    "url": "charity.evolunt.addislaunch.com/charities/:id",
    "title": "Update a Charity",
    "name": "UpdateCharity",
    "group": "Charity",
    "description": "<p>Update a charity with all or some part of the of the data.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\"first_name\": \"Jane\",\n\"last_name\":  \"Doe\",\n\"Description\": \"I am a girl who likes to help people\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n \"_id\": \"5a23d51464095d682c91779d\",\n \"last_modified\": \"2017-12-03T10:42:28.294Z\",\n \"date_created\": \"2017-12-03T10:42:28.294Z\",\n \"user\": {\n     \"_id\": \"5a23d51464095d682c91779c\",\n     \"last_modified\": \"2017-12-03T10:42:28.260Z\",\n     \"date_created\": \"2017-12-03T10:42:28.260Z\",\n     \"username\": \"jane@email.com\",\n     \"role\": \"charity\",\n     \"realm\": \"user\"\n },\n \"first_name\": \"Jane\",\n \"last_name\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/charity.js",
    "groupTitle": "Charity"
  },
  {
    "type": "PUT",
    "url": "charity.evolunt.addislaunch.com/charities/:id/pic",
    "title": "upload picture for a Charity",
    "name": "UpdateCharityOic",
    "group": "Charity",
    "description": "<p>upload picture for charity.</p>",
    "version": "0.0.0",
    "filename": "routesdocs/charity.js",
    "groupTitle": "Charity"
  },
  {
    "type": "GET",
    "url": "charity.evolunt.addislaunch.com/charities/:id",
    "title": "Get a Charity",
    "name": "getCharity",
    "group": "Charity",
    "description": "<p>Get a specific charity.</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"_id\": \"5a23d51464095d682c91779d\",\n    \"last_modified\": \"2017-12-03T10:42:28.294Z\",\n    \"date_created\": \"2017-12-03T10:42:28.294Z\",\n    \"user\": {\n        \"_id\": \"5a23d51464095d682c91779c\",\n        \"last_modified\": \"2017-12-03T10:42:28.260Z\",\n        \"date_created\": \"2017-12-03T10:42:28.260Z\",\n        \"username\": \"jane@email.com\",\n        \"role\": \"charity\",\n        \"realm\": \"user\"\n    },\n    \"__v\": 0,\n    \"first_name\": \"Jane\",\n    \"last_name\": \"Doe\",\n    \"followers\": [],\n    \"following\": [],\n    \"interests\": [],\n    \"location\": [],\n    \"picture\": \"/images/INSA-Ethiosat.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/charity.js",
    "groupTitle": "Charity"
  },
  {
    "type": "GET",
    "url": "charity.evolunt.addislaunch.com/charities/paginate",
    "title": "Get Charities",
    "name": "paginateCharity",
    "group": "Charity",
    "description": "<p>Get paginated list of charities.</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n \"page\": 1,\n \"total_docs\": 1,\n \"total_pages\": 1,\n \"per_page\": 10,\n \"docs\": [\n    {\n    \"_id\": \"5a2fa9217e6d190ec12a94b9\",\n    \"last_modified\": \"2017-12-12T10:02:09.777Z\",\n    \"date_created\": \"2017-12-12T10:02:09.777Z\",\n    \"user\": {\n        \"_id\": \"5a2fa9217e6d190ec12a94b8\",\n        \"last_modified\": \"2017-12-12T10:02:09.350Z\",\n        \"date_created\": \"2017-12-12T10:02:09.350Z\",\n        \"username\": \"jane@email.com\",\n        \"role\": \"charity\",\n        \"realm\": \"user\"\n    },\n    \"description\": \"I am a girl who likes to help people\",\n    \"followers\": [],\n    \"following\": [],\n    \"location\": [],\n    \"picture\": \"/images/0f3777c7b5e7c2bf2995533e4d974868--lion-love-dads.jpg\"\n}\n \t\t]\t\t\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/charity.js",
    "groupTitle": "Charity"
  },
  {
    "type": "POST",
    "url": "event-fund.evolunt.addislaunch.com/events/",
    "title": "Create Event",
    "name": "CreateEvent",
    "group": "Event",
    "description": "<p>Creates a new Event.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "User",
            "description": "<p>the id of the user creating the event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Titile",
            "description": "<p>title of the Event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>descrition of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Location",
            "description": "<p>location of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Date",
            "description": "<p>date of the Event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"created_by\":     \"5a2fa9217e6d190ec12a94b9\",\n   \"title\":          \"Feed the poor\",\n   \"description\":   \"We will be feeding the poor in Chirstmass\",\n  \"location\":       \"Addis Abbaa\",   \n  \"date_of_event\":  \"2017-12-12T10:02:09.350Z\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"_id\": \"5a65e82b6c3e4e63e2700f92\",\n    \"last_modified\": \"2018-01-22T13:33:31.180Z\",\n    \"date_created\": \"2018-01-22T13:33:31.180Z\",\n    \"charity\": {\n        \"_id\": \"5a65dfd9a2a3b8547fbd31d8\",\n        \"last_modified\": \"2018-01-22T12:58:01.366Z\",\n        \"date_created\": \"2018-01-22T12:58:01.366Z\",\n        \"name\": \"Muday\",\n        \"city\": \"Addis Ababa\",\n        \"website\": \"muday.com\",\n        \"user\": \"5a65dfd8a2a3b8547fbd31d7\",\n        \"followers\": [],\n        \"following\": [],\n        \"location\": [],\n        \"picture\": \"\"\n    },\n    \"title\": \"Feed the poor\",\n    \"description\": \"We will be feeding the poor in Chirstmass\",\n    \"location\": \"Addis Abbaa\",\n    \"date_of_event\": \"2017-12-12T10:02:09.350Z\",\n    \"intersetd_users\": [],\n    \"picture\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/event.js",
    "groupTitle": "Event"
  },
  {
    "type": "GET",
    "url": "event-fund.evolunt.addislaunch.com/events/",
    "title": "Get Events paginated",
    "name": "GetEvents",
    "group": "Event",
    "description": "<p>Gets events by pagination</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"page\": 1,\n    \"total_docs\": 3,\n    \"total_pages\": 1,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a34cdbffcd0c927d98b87ac\",\n            \"last_modified\": \"2017-12-16T07:39:43.954Z\",\n            \"date_created\": \"2017-12-16T07:39:43.954Z\",\n            \"created_by\": \"5a2fa9217e6d190ec12a94b9\",\n            \"title\": \"Feed the poor\",\n            \"description\": \"We will be feeding the poor in Chirstmass\",\n            \"location\": \"Addis Abbaa\",\n            \"date_of_event\": \"2017-12-12T10:02:09.350Z\",\n            \"__v\": 0,\n            \"intersetd_users\": [],\n            \"picture\": \"\"\n        },\n        {\n            \"_id\": \"5a34cef0dc4dcf29f5c78b75\",\n            \"last_modified\": \"2017-12-16T07:44:48.535Z\",\n            \"date_created\": \"2017-12-16T07:44:48.535Z\",\n            \"created_by\": \"5a2fa9217e6d190ec12a94b9\",\n            \"title\": \"Feed the poor\",\n            \"description\": \"We will be feeding the poor in Chirstmass\",\n            \"location\": \"Addis Abbaa\",\n            \"date_of_event\": \"2017-12-12T10:02:09.350Z\",\n            \"__v\": 0,\n            \"intersetd_users\": [],\n            \"picture\": \"\"\n        },\n        {\n            \"_id\": \"5a34eceb9edf904ba93879f6\",\n            \"last_modified\": \"2017-12-16T09:52:43.012Z\",\n            \"date_created\": \"2017-12-16T09:52:43.012Z\",\n            \"created_by\": \"5a2fa9217e6d190ec12a94b9\",\n            \"title\": \"Feed the poor\",\n            \"description\": \"We will be feeding the poor in Chirstmass\",\n            \"location\": \"Addis Abbaa\",\n            \"date_of_event\": \"2017-12-12T10:02:09.350Z\",\n            \"__v\": 0,\n            \"intersetd_users\": [],\n            \"picture\": \"\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/event.js",
    "groupTitle": "Event"
  },
  {
    "type": "GET",
    "url": "event-fund.evolunt.addislaunch.com/events/:id",
    "title": "Get a specifc id",
    "name": "GetSingleEvents",
    "group": "Event",
    "description": "<p>Gets a single event by pagination</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n           \"_id\": \"5a34eceb9edf904ba93879f6\",\n           \"last_modified\": \"2017-12-16T09:52:43.012Z\",\n           \"date_created\": \"2017-12-16T09:52:43.012Z\",\n           \"created_by\": \"5a2fa9217e6d190ec12a94b9\",\n           \"title\": \"Feed the poor\",\n           \"description\": \"We will be feeding the poor in Chirstmass\",\n           \"location\": \"Addis Abbaa\",\n           \"date_of_event\": \"2017-12-12T10:02:09.350Z\",\n           \"__v\": 0,\n           \"intersetd_users\": [],\n           \"picture\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/event.js",
    "groupTitle": "Event"
  },
  {
    "type": "DELETE",
    "url": "event-fund.evolunt.addislaunch.com/events/:id",
    "title": "Delete an Event",
    "name": "RemoveSingleEvents",
    "group": "Event",
    "description": "<p>Delete single event by pagination</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n           \"_id\": \"5a34eceb9edf904ba93879f6\",\n           \"last_modified\": \"2017-12-16T09:52:43.012Z\",\n           \"date_created\": \"2017-12-16T09:52:43.012Z\",\n           \"created_by\": \"5a2fa9217e6d190ec12a94b9\",\n           \"title\": \"Feed the poor\",\n           \"description\": \"We will be feeding the poor in Chirstmass\",\n           \"location\": \"Addis Abbaa\",\n           \"date_of_event\": \"2017-12-12T10:02:09.350Z\",\n           \"__v\": 0,\n           \"intersetd_users\": [],\n           \"picture\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/event.js",
    "groupTitle": "Event"
  },
  {
    "type": "PUT",
    "url": "event-fund.evolunt.addislaunch.com/events/:id/pic",
    "title": "upload picture for an Event",
    "name": "UpdateEventPic",
    "group": "Event",
    "description": "<p>upload picture for an event.</p>",
    "version": "0.0.0",
    "filename": "routesdocs/event.js",
    "groupTitle": "Event"
  },
  {
    "type": "POST",
    "url": "feed.evolunt.addislaunch.com/feeds/charity/:id/postFeed",
    "title": "Post as charity",
    "name": "CreateFeedCharity",
    "group": "Feed",
    "description": "<p>Creates a new Feed as a charity.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "post",
            "description": "<p>the text the user wants to post in her time line use this end point if the user is a volunteer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\"post\":\"Mamit's 5th POST\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"data\": {\n        \"actor\": \"dorMamit\",\n        \"duration\": \"5.56ms\",\n        \"foreign_id\": \"dorMamit1518509313646\",\n        \"id\": \"15c8e8e0-1095-11e8-8080-80013d4dae38\",\n        \"message\": \"Mamit's 5th POST\",\n        \"object\": \"1\",\n        \"origin\": null,\n        \"target\": \"\",\n        \"time\": \"2018-02-13T08:08:33.646000\",\n        \"verb\": \"post\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/feed.js",
    "groupTitle": "Feed"
  },
  {
    "type": "POST",
    "url": "feed.evolunt.addislaunch.com/feeds/volunteer/:id/postFeed",
    "title": "Post as volunteer",
    "name": "CreateFeedVolunteer",
    "group": "Feed",
    "description": "<p>Creates a new Feed as a volunteer.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "post",
            "description": "<p>the text the user wants to post in her time line use this end point if the user is a volunteer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\"post\":\"Mamit's 5th POST\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"data\": {\n        \"actor\": \"dorMamit\",\n        \"duration\": \"5.56ms\",\n        \"foreign_id\": \"dorMamit1518509313646\",\n        \"id\": \"15c8e8e0-1095-11e8-8080-80013d4dae38\",\n        \"message\": \"Mamit's 5th POST\",\n        \"object\": \"1\",\n        \"origin\": null,\n        \"target\": \"\",\n        \"time\": \"2018-02-13T08:08:33.646000\",\n        \"verb\": \"post\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/feed.js",
    "groupTitle": "Feed"
  },
  {
    "type": "DELETE",
    "url": "feed.evolunt.addislaunch.com/feeds/:id/delete/:uuid",
    "title": "Delete a post",
    "name": "RemoveFeed",
    "group": "Feed",
    "description": "<p>Delete single Feed by passing the id of the post in the :uuid part of the URL</p>",
    "version": "0.0.0",
    "filename": "routesdocs/feed.js",
    "groupTitle": "Feed"
  },
  {
    "type": "PUT",
    "url": "feed.evolunt.addislaunch.com/feeds/:id/update/:uuid",
    "title": "Update a Post",
    "name": "UpdatePost",
    "group": "Feed",
    "description": "<p>Update a post by passing the id of the post in the :uuid part of the URL</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "post",
            "description": "<p>the text the user wants to edit</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\"post\":\"Mamit's 5th POST EDITED\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"data\": {\n        \"actor\": \"dorMamit\",\n        \"duration\": \"5.56ms\",\n        \"foreign_id\": \"dorMamit1518509313646\",\n        \"id\": \"15c8e8e0-1095-11e8-8080-80013d4dae38\",\n        \"message\": \"Mamit's 5th POST\" EDITED,\n        \"object\": \"1\",\n        \"origin\": null,\n        \"target\": \"\",\n        \"time\": \"2018-02-13T08:08:33.646000\",\n        \"verb\": \"post\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/feed.js",
    "groupTitle": "Feed"
  },
  {
    "type": "GET",
    "url": "feed.evolunt.addislaunch.com/feeds/:id/getTimeline",
    "title": "Get Time line",
    "name": "getTimeLine",
    "group": "Feed",
    "description": "<p>Get all posts from this user follows</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"results\": {\n        \"results\": [\n            {\n                \"actor\": \"dorMamit\",\n                \"foreign_id\": \"dorMamit1518509313646\",\n                \"id\": \"15c8e8e0-1095-11e8-8080-80013d4dae38\",\n                \"message\": \"Mamit's 5th POST\",\n                \"object\": \"1\",\n                \"origin\": \"user:5a82925ef441221a1c152c40\",\n                \"target\": \"\",\n                \"time\": \"2018-02-13T08:08:33.646000\",\n                \"verb\": \"post\"\n            },\n            {\n                \"actor\": \"dorMamit\",\n                \"foreign_id\": \"dorMamit1518508201708\",\n                \"id\": \"7f04a2c0-1092-11e8-8080-800136663646\",\n                \"message\": \"Mamit's 4th POST Edit 1\",\n                \"object\": \"1\",\n                \"origin\": \"user:5a82925ef441221a1c152c40\",\n                \"target\": \"\",\n                \"time\": \"2018-02-13T07:50:01.708000\",\n                \"verb\": \"post\"\n            }\n        ],\n        \"next\": \"\",\n        \"duration\": \"9.35ms\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/feed.js",
    "groupTitle": "Feed"
  },
  {
    "type": "GET",
    "url": "feed.evolunt.addislaunch.com/feeds/:id/getUserFeed",
    "title": "",
    "name": "getUserFeed",
    "group": "Feed",
    "description": "<p>Get all the user posted in her time line</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"results\": {\n        \"results\": [\n            {\n                \"actor\": \"dorMamit\",\n                \"foreign_id\": \"dorMamit1518509313646\",\n                \"id\": \"15c8e8e0-1095-11e8-8080-80013d4dae38\",\n                \"message\": \"Mamit's 5th POST\",\n                \"object\": \"1\",\n                \"origin\": \"user:5a82925ef441221a1c152c40\",\n                \"target\": \"\",\n                \"time\": \"2018-02-13T08:08:33.646000\",\n                \"verb\": \"post\"\n            },\n            {\n                \"actor\": \"dorMamit\",\n                \"foreign_id\": \"dorMamit1518508201708\",\n                \"id\": \"7f04a2c0-1092-11e8-8080-800136663646\",\n                \"message\": \"Mamit's 4th POST Edit 1\",\n                \"object\": \"1\",\n                \"origin\": \"user:5a82925ef441221a1c152c40\",\n                \"target\": \"\",\n                \"time\": \"2018-02-13T07:50:01.708000\",\n                \"verb\": \"post\"\n            }\n        ],\n        \"next\": \"\",\n        \"duration\": \"9.35ms\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/feed.js",
    "groupTitle": "Feed"
  },
  {
    "type": "POST",
    "url": "event-fund.evolunt.addislaunch.com/funds/",
    "title": "Create Fund",
    "name": "Create",
    "group": "Fund",
    "description": "<p>Creates a new Fund.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "User",
            "description": "<p>The id of the user creating the Fund</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": "<p>Title of the Fund</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Descrition",
            "description": "<p>description of the Fund</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Location",
            "description": "<p>location of the Fund</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Amount",
            "description": "<p>amount of the fund</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\"created_by\":     \"5a2fa9217e6d190ec12a94b9\",\n\t\"title\":          \"Feed the poor\",\n\t\"description\":   \"We will be feeding the poor in Chirstmass\",\n\t\"location\":       \"Addis Abbaa\",\n\t\"amount\":  \"50000\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"_id\": \"5a34eceb9edf904ba93879f6\",\n    \"last_modified\": \"2017-12-16T09:52:43.012Z\",\n    \"date_created\": \"2017-12-16T09:52:43.012Z\",\n    \"created_by\": \"5a2fa9217e6d190ec12a94b9\",\n    \"title\": \"Feed the poor\",\n    \"description\": \"We will be feeding the poor in Chirstmass\",\n    \"location\": \"Addis Abbaa\",\n    \"amount\": \"500\",\n    \"intersetd_users\": [],\n    \"picture\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/fund.js",
    "groupTitle": "Fund"
  },
  {
    "type": "GET",
    "url": "event-fund.evolunt.addislaunch.com/Funds/",
    "title": "Get Funds paginated",
    "name": "GetFunds",
    "group": "Fund",
    "description": "<p>Gets Funds by pagination</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"page\": 1,\n    \"total_docs\": 1,\n    \"total_pages\": 1,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a34ced0dc4dcf29f5c78b74\",\n            \"last_modified\": \"2017-12-16T07:44:16.559Z\",\n            \"date_created\": \"2017-12-16T07:44:16.559Z\",\n            \"created_by\": \"5a2fa9217e6d190ec12a94b9\",\n            \"title\": \"Feed the poor\",\n            \"description\": \"We will be feeding the poor in Chirstmass\",\n            \"location\": \"Addis Abbaa\",\n            \"amount\": 50000,\n            \"__v\": 0,\n            \"contibuted_users\": [],\n            \"picture\": \"\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/fund.js",
    "groupTitle": "Fund"
  },
  {
    "type": "GET",
    "url": "event-fund.evolunt.addislaunch.com/Funds/:id",
    "title": "Get a specifc id",
    "name": "GetSingleFunds",
    "group": "Fund",
    "description": "<p>Gets a single Fund</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"_id\": \"5a34ced0dc4dcf29f5c78b74\",\n    \"last_modified\": \"2017-12-16T07:44:16.559Z\",\n    \"date_created\": \"2017-12-16T07:44:16.559Z\",\n    \"created_by\": \"5a2fa9217e6d190ec12a94b9\",\n    \"title\": \"Feed the poor\",\n    \"description\": \"We will be feeding the poor in Chirstmass\",\n    \"location\": \"Addis Abbaa\",\n    \"amount\": 50000,\n    \"__v\": 0,\n    \"contibuted_users\": [],\n    \"picture\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/fund.js",
    "groupTitle": "Fund"
  },
  {
    "type": "DELETE",
    "url": "event-fund.evolunt.addislaunch.com/funds/:id",
    "title": "Delete an Fund",
    "name": "RemoveSingleFunds",
    "group": "Fund",
    "description": "<p>Delete single Fund</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"_id\": \"5a34ced0dc4dcf29f5c78b74\",\n    \"last_modified\": \"2017-12-16T07:44:16.559Z\",\n    \"date_created\": \"2017-12-16T07:44:16.559Z\",\n    \"created_by\": \"5a2fa9217e6d190ec12a94b9\",\n    \"title\": \"Feed the poor\",\n    \"description\": \"We will be feeding the poor in Chirstmass\",\n    \"location\": \"Addis Abbaa\",\n    \"amount\": 50000,\n    \"__v\": 0,\n    \"contibuted_users\": [],\n    \"picture\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/fund.js",
    "groupTitle": "Fund"
  },
  {
    "type": "PUT",
    "url": "event-fund.evolunt.addislaunch.com/Funds/:id/pic",
    "title": "upload picture for a Fund",
    "name": "UpdateFundPic",
    "group": "Fund",
    "description": "<p>upload picture for an Fund.</p>",
    "version": "0.0.0",
    "filename": "routesdocs/fund.js",
    "groupTitle": "Fund"
  },
  {
    "type": "",
    "url": "Events",
    "title": "Model",
    "name": "Events",
    "group": "Models",
    "parameter": {
      "examples": [
        {
          "title": "Volunteer Model:",
          "content": "{\n  user:           { type: Schema.Types.ObjectId, ref: 'User' },\n  picture:        { type: String, default: '' },\n  first_name:     { type: String },\n  last_name:      { type: String },\n  locations:       [{ type: String }],\n  interests:        [{ type: String }],\n  following:      [{ type: Schema.Types.ObjectId, ref: 'User' }],\n  followers:      [{ type: Schema.Types.ObjectId, ref: 'User' }],\n  birth_date:     {type:  Date},\n  gender:         {type: String}, \n  user_name:      {type: String},       \n  date_created:   { type: Date },\n  last_modified:  { type: Date }\n}",
          "type": "json"
        },
        {
          "title": "Charity Model:",
          "content": "{\n  user:           { type: Schema.Types.ObjectId, ref: 'User' },\n  picture:        { type: String, default: '' },\n  name:           { type: String },\n  city:           { type: String },\n  website:        { type: String },\n  phone_number:   { type: Number },\n  description:    { type: String },\n  causes:         { type: Number },\n  location:       [{ type: String }],\n  interests:      [{ type: String }],\n  following:      [{ type: Schema.Types.ObjectId, ref: 'User' }],\n  followers:      [{ type: Schema.Types.ObjectId, ref: 'User' }],\n  user_name:      {type: String},       \n  date_created:   { type: Date },\n  last_modified:  { type: Date }\n}",
          "type": "json"
        },
        {
          "title": "Fund Model:",
          "content": "{\n  charity:        { type: Schema.Types.ObjectId, ref: 'Charity' },\n  volunteer:      { type: Schema.Types.ObjectId, ref: 'Volunteer' },\n  picture:          { type: String, default: '' },\n  title:            { type: String },\n  description:      { type: String },\n  location:         { type: String },\n  event:           { type: Schema.Types.ObjectId, ref: 'Event' },\n  amount:             {type: Number},\n  contibuted_users: [{ type: Schema.Types.ObjectId, ref: 'User' }], \n  date_created:     { type: Date },\n  last_modified:    { type: Date }\n}",
          "type": "json"
        },
        {
          "title": "Events Model:",
          "content": "{\n  created_by:     { type: Schema.Types.ObjectId, ref: 'User' },\n  charity:        { type: Schema.Types.ObjectId, ref: 'Charity' },\n  volunteer:      { type: Schema.Types.ObjectId, ref: 'Volunteer' },\n  picture:        { type: String, default: '' },\n  title:          { type: String },\n  description:    { type: String },\n  location:       { type: String },\n  fund:           { type: Schema.Types.ObjectId, ref: 'Fund' },\n  date_of_event:  { type: Date},\n  intersetd_users:[{ type: Schema.Types.ObjectId, ref: 'User' }], \n  date_created:   { type: Date },\n  last_modified:  { type: Date }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/models.js",
    "groupTitle": "Models"
  },
  {
    "type": "PUT",
    "url": "volunteer.evolunt.addislaunch.com/volunteer/:id",
    "title": "Update a Volunteer",
    "name": "UpdateVolunteer",
    "group": "Volunteer",
    "description": "<p>Update a Volunteer with all or some part of the of the data.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\"first_name\": \"Jane\",\n\"last_name\":  \"Doe\",\n\"Description\": \"I am a girl who likes to help people\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n \"_id\": \"5a23d51464095d682c91779d\",\n \"last_modified\": \"2017-12-03T10:42:28.294Z\",\n \"date_created\": \"2017-12-03T10:42:28.294Z\",\n \"user\": {\n     \"_id\": \"5a23d51464095d682c91779c\",\n     \"last_modified\": \"2017-12-03T10:42:28.260Z\",\n     \"date_created\": \"2017-12-03T10:42:28.260Z\",\n     \"username\": \"jane@email.com\",\n     \"role\": \"volunteer\",\n     \"realm\": \"user\"\n },\n \"first_name\": \"Jane\",\n \"last_name\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/volunteer.js",
    "groupTitle": "Volunteer"
  },
  {
    "type": "PUT",
    "url": "volunteer.evolunt.addislaunch.com/volunteer/:id/pic",
    "title": "upload picture for a Volunteer",
    "name": "UpdateVolunteerPic",
    "group": "Volunteer",
    "description": "<p>upload picture for Volunteer.</p>",
    "version": "0.0.0",
    "filename": "routesdocs/volunteer.js",
    "groupTitle": "Volunteer"
  },
  {
    "type": "PUT",
    "url": "volunteer.evolunt.addislaunch.com/:id/Unfollow",
    "title": "Follow a Volunteer",
    "name": "followVolunteer",
    "group": "Volunteer",
    "description": "<p>The volunteer who's ID is given in the URL with :id will 'Unfollow' the volunteer who's  id is given in the body as toFollow. In order to make one volunteer to 'Unfollow' another pass the id of the 'follower' in the URL and the id of the person to be Unfollowed in the body.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idToFollow",
            "description": "<p>The Id of the volunteer that is going to be Unfollowed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\t\"idToFollow\":\"5a82925ef441221a1c152c40\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"follower\": {\n        \"_id\": \"5a8291e7f441221a1c152c3d\",\n        \"last_modified\": \"2018-02-13T07:21:11.173Z\",\n        \"date_created\": \"2018-02-13T07:21:11.173Z\",\n        \"user\": {\n            \"_id\": \"5a8291e6f441221a1c152c3c\",\n            \"last_modified\": \"2018-02-13T07:21:10.762Z\",\n            \"date_created\": \"2018-02-13T07:21:10.762Z\",\n            \"username\": \"mamo@evolunt.com\",\n            \"role\": \"volunteer\",\n            \"realm\": \"user\"\n        },\n        \"first_name\": \"Mamo\",\n        \"last_name\": \"Dor\",\n        \"gender\": \"Male\",\n        \"user_name\": \"dorMamo\",\n        \"followers\": [],\n        \"following\": [],\n        \"locations\": [],\n        \"picture\": \"\"\n    },\n    \"toFollow\": {\n        \"_id\": \"5a82925ef441221a1c152c40\",\n        \"last_modified\": \"2018-02-13T07:23:10.854Z\",\n        \"date_created\": \"2018-02-13T07:23:10.854Z\",\n        \"user\": {\n            \"_id\": \"5a82925ef441221a1c152c3f\",\n            \"last_modified\": \"2018-02-13T07:23:10.851Z\",\n            \"date_created\": \"2018-02-13T07:23:10.851Z\",\n            \"username\": \"mamit@evolunt.com\",\n            \"role\": \"volunteer\",\n            \"realm\": \"user\"\n        },\n        \"first_name\": \"Mamit\",\n        \"last_name\": \"Dor\",\n        \"gender\": \"Female\",\n        \"user_name\": \"dorMamit\",\n        \"followers\": [],\n        \"following\": [],\n        \"locations\": [],\n        \"picture\": \"\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/volunteer.js",
    "groupTitle": "Volunteer"
  },
  {
    "type": "PUT",
    "url": "volunteer.evolunt.addislaunch.com/:id/follow",
    "title": "Follow a Volunteer",
    "name": "followVolunteer",
    "group": "Volunteer",
    "description": "<p>The volunteer who's ID is given in the URL with :id will follow the volunteer who is id is given in the body as toFollow. In order to make one volunteer to follow another pass the id of the 'follower' in the URL and the id of the person to be followed in the body.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idToFollow",
            "description": "<p>The Id of the volunteer that is going to be followed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n\t\t\"idToFollow\":\"5a82925ef441221a1c152c40\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"follower\": {\n        \"_id\": \"5a8291e7f441221a1c152c3d\",\n        \"last_modified\": \"2018-02-13T07:21:11.173Z\",\n        \"date_created\": \"2018-02-13T07:21:11.173Z\",\n        \"user\": {\n            \"_id\": \"5a8291e6f441221a1c152c3c\",\n            \"last_modified\": \"2018-02-13T07:21:10.762Z\",\n            \"date_created\": \"2018-02-13T07:21:10.762Z\",\n            \"username\": \"mamo@evolunt.com\",\n            \"role\": \"volunteer\",\n            \"realm\": \"user\"\n        },\n        \"first_name\": \"Mamo\",\n        \"last_name\": \"Dor\",\n        \"gender\": \"Male\",\n        \"user_name\": \"dorMamo\",\n        \"followers\": [],\n        \"following\": [\n            \"5a82925ef441221a1c152c40\"\n        ],\n        \"locations\": [],\n        \"picture\": \"\"\n    },\n    \"toFollow\": {\n        \"_id\": \"5a82925ef441221a1c152c40\",\n        \"last_modified\": \"2018-02-13T07:23:10.854Z\",\n        \"date_created\": \"2018-02-13T07:23:10.854Z\",\n        \"user\": {\n            \"_id\": \"5a82925ef441221a1c152c3f\",\n            \"last_modified\": \"2018-02-13T07:23:10.851Z\",\n            \"date_created\": \"2018-02-13T07:23:10.851Z\",\n            \"username\": \"mamit@evolunt.com\",\n            \"role\": \"volunteer\",\n            \"realm\": \"user\"\n        },\n        \"first_name\": \"Mamit\",\n        \"last_name\": \"Dor\",\n        \"gender\": \"Female\",\n        \"user_name\": \"dorMamit\",\n        \"followers\": [\n            \"5a8291e7f441221a1c152c3d\"\n        ],\n        \"following\": [],\n        \"locations\": [],\n        \"picture\": \"\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/volunteer.js",
    "groupTitle": "Volunteer"
  },
  {
    "type": "GET",
    "url": "volunteer.evolunt.addislaunch.com/volunteer/:id",
    "title": "Get a Volunteer",
    "name": "getVolunteer",
    "group": "Volunteer",
    "description": "<p>Get a specific Volunteer.</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"_id\": \"5a23d51464095d682c91779d\",\n    \"last_modified\": \"2017-12-03T10:42:28.294Z\",\n    \"date_created\": \"2017-12-03T10:42:28.294Z\",\n    \"user\": {\n        \"_id\": \"5a23d51464095d682c91779c\",\n        \"last_modified\": \"2017-12-03T10:42:28.260Z\",\n        \"date_created\": \"2017-12-03T10:42:28.260Z\",\n        \"username\": \"jane@email.com\",\n        \"role\": \"Volunteer\",\n        \"realm\": \"user\"\n    },\n    \"__v\": 0,\n    \"first_name\": \"Jane\",\n    \"last_name\": \"Doe\",\n    \"followers\": [],\n    \"following\": [],\n    \"interests\": [],\n    \"location\": [],\n    \"picture\": \"/images/INSA-Ethiosat.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/volunteer.js",
    "groupTitle": "Volunteer"
  },
  {
    "type": "GET",
    "url": "volunteer.evolunt.addislaunch.com/volunteer/paginate",
    "title": "Get volunteer",
    "name": "paginateVolunteer",
    "group": "Volunteer",
    "description": "<p>Get paginated list of volunteer.</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n    \"page\": 1,\n    \"total_docs\": 1,\n    \"total_pages\": 1,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a23d51464095d682c91779d\",\n            \"last_modified\": \"2017-12-03T10:42:28.294Z\",\n            \"date_created\": \"2017-12-03T10:42:28.294Z\",\n            \"user\": {\n                \"_id\": \"5a23d51464095d682c91779c\",\n                \"last_modified\": \"2017-12-03T10:42:28.260Z\",\n                \"date_created\": \"2017-12-03T10:42:28.260Z\",\n                \"username\": \"jane@email.com\",\n                \"role\": \"voulunteer\",\n                \"realm\": \"user\"\n            },\n            \"__v\": 0,\n            \"first_name\": \"Jane\",\n            \"last_name\": \"Doe\",\n            \"followers\": [],\n            \"following\": [],\n            \"interests\": [],\n            \"location\": [],\n            \"picture\": \"/images/INSA-Ethiosat.jpg\"\n        }\n    ]\n}\n \t\t]\t\t\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/volunteer.js",
    "groupTitle": "Volunteer"
  }
] });
