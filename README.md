# Howes Health
A unique, web based, clinical dashboard to allow healthcare professionals to integrate wearable health tech into their clinical contacts

## Motivation
One of the biggest areas of change and focus in modern healthcare is the adoption and integration of digital technology. Having spent many years working in different healthcare settings I was amazed at how behind the health industry was in its use of digital technology and lack of available data from health professionals.

Every day we collect hundreds if not thousands of pieces of health data about ourselves through out mobile devices and wearable health tech but we don't really utilise this data, let alone our healthcare clinicians.

My motiviation for designing Howes Health was to bridge the gap between the data we collect each day and utilisation of this in a healthcare setting.

In the near future I will create a small React Native application that will enable a patient/client to export their Apple Health data to be served to the Howes Health web application server, making the application usable as a real world tool.
 
## Screenshots and Demo
### Screenshots
![Screenshots of Howes Health Application](https://media.giphy.com/media/YoVyzeLGVTdJEpLqwR/giphy.gif)

### Demo
<a href="https://youtu.be/GLRgLABFo7A" target="_blank" >Click to Watch Demo</a>

## Tech/framework used
<b>Built with</b>
- Ruby on Rails API
- React.js (Redux/Hooks)

## Installation
From your command line:
### Clone the repository
```bash
$ git clone https://github.com/eliothowes1090/howes_health.git
```

### Backend Setup
```bash
$ cd backend
$ bundle install
$ rails db:create db:migrate db:seed
$ rails s
```

### Frontend Setup
```bash
$ cd client
$ npm install
```

### Run the app
```bash
$ npm start
```

#### If you see the following:
```
? Something is already running on port 3000. Probably:
  puma 3.12.1 (tcp://localhost:3000) [backend]   (pid 49917)
  in /Users/eliothowes/Development/mod_5/howes_health/backend

Would you like to run the app on another port instead? (Y/n) 
```
#### Select 'Y'

### Other setup

A few things to know about the seed data. The contacts (appointments) are hard coded to the current date so if you log in the day after you have seeded the database you will not see any patients. To fix this run the following command:

```bash 
$ rails db:drop db:create db:migrate db:seed
```

To login use the username 'TestUser' and the password will be set to '12345'
