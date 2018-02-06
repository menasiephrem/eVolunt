define({ "api": [
  {
    "type": "POST",
    "url": ":7000/auth/login",
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
    "url": ":7000/auth/logout",
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
    "url": ":7000/auth/signup",
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
    "url": ":7100/charities/:id",
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
    "url": ":7100/charities/:id/pic",
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
    "url": ":7100/charities/:id",
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
    "url": ":7100/charities/paginate",
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
    "url": ":7400/events/",
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
    "url": ":7400/events/",
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
    "url": ":7400/events/:id",
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
    "url": ":7400/events/:id",
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
    "url": ":7400/events/:id/pic",
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
    "url": ":7400/funds/",
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
    "url": ":7400/Funds/",
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
    "url": ":7400/Funds/:id",
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
    "url": ":7400/funds/:id",
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
    "url": ":7400/Funds/:id/pic",
    "title": "upload picture for a Fund",
    "name": "UpdateFundPic",
    "group": "Fund",
    "description": "<p>upload picture for an Fund.</p>",
    "version": "0.0.0",
    "filename": "routesdocs/fund.js",
    "groupTitle": "Fund"
  },
  {
    "type": "PUT",
    "url": ":7300/volunteer/:id",
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
          "content": "{\n \"_id\": \"5a23d51464095d682c91779d\",\n \"last_modified\": \"2017-12-03T10:42:28.294Z\",\n \"date_created\": \"2017-12-03T10:42:28.294Z\",\n \"user\": {\n     \"_id\": \"5a23d51464095d682c91779c\",\n     \"last_modified\": \"2017-12-03T10:42:28.260Z\",\n     \"date_created\": \"2017-12-03T10:42:28.260Z\",\n     \"username\": \"jane@email.com\",\n     \"role\": \"Volunteer\",\n     \"realm\": \"user\"\n },\n \"first_name\": \"Jane\",\n \"last_name\": \"Doe\"\n}",
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
    "url": ":7300/volunteer/pic/:id",
    "title": "upload picture for a Volunteer",
    "name": "UpdateVolunteerPic",
    "group": "Volunteer",
    "description": "<p>upload picture for Volunteer.</p>",
    "version": "0.0.0",
    "filename": "routesdocs/volunteer.js",
    "groupTitle": "Volunteer"
  },
  {
    "type": "GET",
    "url": ":7300/volunteer/:id",
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
    "url": ":7300/volunteer/paginate",
    "title": "Get volunteer",
    "name": "paginateVolunteer",
    "group": "Volunteer",
    "description": "<p>Get paginated list of volunteer.</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n \"page\": 1,\n \"total_docs\": 1,\n \"total_pages\": 1,\n \"per_page\": 10,\n \"docs\": [\n     {\n         \"_id\": \"5a23d51464095d682c91779d\",\n         \"last_modified\": \"2017-12-03T10:42:28.294Z\",\n         \"date_created\": \"2017-12-03T10:42:28.294Z\",\n         \"user\": {\n             \"_id\": \"5a23d51464095d682c91779c\",\n             \"last_modified\": \"2017-12-03T10:42:28.260Z\",\n             \"date_created\": \"2017-12-03T10:42:28.260Z\",\n             \"username\": \"jane@email.com\",\n             \"role\": \"voulunteer\",\n             \"realm\": \"user\"\n         },\n         \"__v\": 0,\n         \"first_name\": \"Jane\",\n         \"last_name\": \"Doe\",\n         \"followers\": [],\n         \"following\": [],\n         \"interests\": [],\n         \"location\": [],\n         \"picture\": \"/images/INSA-Ethiosat.jpg\"\n     }\n \t\t]\t\t\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routesdocs/volunteer.js",
    "groupTitle": "Volunteer"
  }
] });
