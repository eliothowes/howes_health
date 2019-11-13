# Howes Health
A unique, web based, clinical dashboard to allow healthcare professionals to integrate wearable health tech into their clinical contacts

## Motivation
One of the biggest areas of change and focus in modern healthcare is the adoption and integration of digital technology. Having spent many years working in different healthcare settings I was amazed at how behind the health industry was in its use of digital technology and lack of available data from health professionals.

Every day we collect hundreds if not thousands of pieces of health data about ourselves through out mobile devices and wearable health tech but we don't really utilise this data, let alone our healthcare clinicians.

My motiviation for designing Howes Health was to bridge the gap between the data we collect each day and utilisation of this in a healthcare setting.

In the near future I will create a small React Native application that will enable a patient/client to export their Apple Health data to be served to the Howes Health web application server, making the application usable as a real world tool.
 
## Screenshots
<a href="https://youtu.be/GLRgLABFo7A" target="_blank"><img src="https://img.youtube.com/vi/GLRgLABFo7A/0.jpg" 
alt="Screenshot of Howes Health Application" width="240" height="180" border="10" /></a>

## Tech/framework used
<b>Built with</b>
- Ruby on Rails API
- React.js (Redux/Hooks)

## Installation
```bash
# Clone this repository
$ git clone https://github.com/eliothowes1090/howes_health.git

## Backend Setup
# Go into the repository
$ cd backend
$ bundle install
$ rails db:create db:migrate db:seed
$ rails s

## Frontend Setup
# Go into the repository
$ cd client
# Install dependencies
$ npm install

# Run the app
$ npm start
# If you see the following: 'Would you like to run the app on another port instead?' select 'yes'
```
A few things to know about the seed data. The contacts (appointments) are hard coded to the current date so if you log in the day after you have seeded the database you will not see any patients. To fix this run the following command:

```bash 
$ rails db:drop db:create db:migrate db:seed
```

To login use the username 'TestUser' and the password will be set to '12345'
