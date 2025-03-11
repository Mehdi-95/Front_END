🎯 Sports Club Management Project 🏆

Welcome to the Sports Club Management Project repository! 🎉 This project was developed as part of the ESA (Applied Software Engineering) and Visual Programming courses, bringing together essential sports club functionalities into a sleek and accessible web platform. 🌍💻

🚀 Quick Disclaimer

Originally, this project lived in a private Bitbucket repository, but hey, we moved it to GitHub because, well... GitHub rocks! 🤘 We've kept all branches and the full commit history intact, so feel free to explore. However, be warned: this isn’t the easiest project to set up—we took some shortcuts to make it work. 😅

If you're still curious, check out the Technologies Used section below to see the cool tools powering this system! ⚡

🎯 Project Overview

The Sports Club Management Project is a one-stop solution for managing sports clubs effortlessly. It handles everything from memberships (coaches, athletes, associates) to event organization and even payments for subscriptions and event fees. 💰

🌍 Multilingual? Yes! The platform supports dynamic translations for a seamless user experience.
🗺️ Interactive Maps? You bet! Integrated Mapbox mapping resources help visualize club and event locations.

🏆 Development Methodology

We followed the SCRUM methodology, working in 4 sprints:

Sprint 1: 1-month duration

Sprint 2-4: Each lasting 2 weeks

Regular Sprint Planning, Reviews, and Retrospectives

Agile all the way! 🚀

🛠 Technologies Used

Here's the tech stack that brings this project to life:

Core: .NET, Razor Pages

Database: SQL Server

External APIs & Services:

📍 Mapbox – Interactive maps

📧 Mailgun – Email notifications

💳 Easypay – Payment processing

🗝️ Azure Key Vault – Secure API key storage

☁️ Azure Object Storage – Store images & docs

🌍 Microsoft Translator – Multilingual support

🏗️ Project Structure

📂 Areas - ASP.NET Identity code and views📂 Controllers - MVC pattern controllers📂 Data - Entity Framework classes📂 Middlewares - Request processing handlers📂 Models - Organized MVC models📂 Resources - Static translations for multi-language support📂 Services - Business logic & application services📂 ViewComponents - Handy UI elements like language pickers📂 Views - MVC Views for front-end magic

🔄 CI/CD with Azure Pipelines

We automated builds, tests, and deployments using Azure Pipelines with two main workflows:

🛠 Development Pipeline (Dev Branch)

Build 🔨

Unit Tests 🧪 (xUnit)

Automation Tests 🤖 (Selenium)

Deploy to Development 🚀

🚀 Production Pipeline (Master Branch)

Build 🔨

Unit Tests 🧪 (xUnit)

Automation Tests 🤖 (Selenium)

Deploy to Production 🌍

🛡️ Testing Strategy

To ensure rock-solid quality, we implemented:

🔹 Unit Tests (xUnit) – Checking code correctness 💡🔹 Automation Tests (Selenium) – Simulating real user interactions 🎭🔹 Not 100% Coverage – But hey, we covered the essentials! 😉

🎨 UI & Design


🏛️ Architecture & Diagrams

📜 General Architecture:

📜 Class Diagram:

📢 Final Thoughts

This project is a great reference for sports club management systems. We hope it helps fellow developers build, learn, and innovate! 🚀

Got questions? Reach out & let’s connect! 🤝


## System Requirements

In the table below, functional requirements indicated by the client (responsible professor) are listed along with a brief description and priority. The requirements have been divided into 3 priority categories: **Must Have**, **Should Have**, and **Could Have**. Additionally, some requirements have been marked as **Won't Have**, indicating that they will not be implemented in the project.

| ID    | Module              | Description                                                                                                                                                        | Priority    |
|-------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| RF1   | Authentication      | The system should allow users to register in the application.                                                                                                       | Must Have   |
| RF2   | Authentication      | The system should allow users to log in to the application.                                                                                                         | Must Have   |
| RF3   | Authentication      | The system should allow users to recover their account password via email.                                                                                          | Must Have   |
| RF4   | Authentication      | The system should send a confirmation email to the user upon registration.                                                                                           | Must Have   |
| RF5   | Authentication      | The system should allow an authenticated user to log out.                                                                                                            | Must Have   |
| RF6   | Authentication      | The system should allow the user to authenticate in the application through other platforms (Google, Microsoft).                                                    | Could Have  |
| RF7   | Authentication      | The system should allow the user to activate their account through a link.                                                                                            | Must Have   |
| RF8   | Authentication      | The system should allow a user to change their password.                                                                                                             | Must Have   |
| RF9   | Authentication      | The system should allow a user to change their personal information.                                                                                                  | Must Have   |
| RF10  | Authentication      | The system should allow a user to change their profile picture.                                                                                                       | Could Have  |
| RF11  | Authentication      | The system should allow changing a user's status (online/offline).                                                                                                     | Won't Have  |
| RF12  | Authentication      | The system should allow managing profile settings (site color theme, notifications).                                                                                  | Should Have |
| RF13  | Authentication      | The system should support Portuguese and English languages.                                                                                                           | Must Have   |
| RF14  | Authentication      | The system should allow changing the application's language.                                                                                                          | Must Have   |
| RF15  | Club Management     | The system should allow club manager users to view club members.                                                                                                       | Must Have   |
| RF16  | Club Management     | The system should allow club manager users to view the status (active and inactive) of club members.                                                                  | Should Have |
| RF17  | Club Management     | The system should allow club manager users to remove privileges from members who have not paid their dues.                                                           | Must Have   |
| RF18  | Club Management     | The system should allow club manager users to generate access codes for users to join the club.                                                                       | Must Have   |
| RF19  | Club Management     | The system should allow users to use the access code generated by club managers to join the club.                                                                    | Should Have |
| RF20  | Club Management     | The system should allow the user to use the access link (with the generated code) sent by email to access the club.                                                   | Should Have |
| RF21  | Club Management     | The system should allow generating a QR code with the access code.                                                                                                     | Could Have  |
| RF22  | Club Management     | The system should allow the use of the generated QR code.                                                                                                             | Could Have  |
| RF23  | Club Management     | The system should allow club managers to view a list of generated codes and the respective users who joined with those codes.                                       | Could Have  |
| RF24  | Club Management     | The system should allow club staff users to view athletes belonging to the club.                                                                                       | Could Have  |
| RF25  | Club Management     | The system should allow club manager users to remove club members.                                                                                                      | Must Have   |
| RF26  | Club Management     | The system should allow users to associate with multiple clubs.                                                                                                         | Must Have   |
| RF27  | Athlete Plans       | The system should allow athlete users to update their EMD (Electrical Muscle Development).                                                                            | Could Have  |
| RF28  | Club Management     | The system should allow club staff to manage teams.                                                                                                                    | Must Have   |
| RF29  | Club Management     | The system should allow the club administrator user to manage the existing club modalities.                                                                           | Must Have   |
| RF30  | Club Management     | The system should allow the club administrator user to manage the club's terms and conditions.                                                                        | Could Have  |
| RF31  | Club Management     | The system should allow users to view clubs on the map.                                                                                                                | Could Have  |
| RF32  | Club Management     | The system should allow users to view club pages.                                                                                                                      | Should Have |
| RF33  | Club Management     | The system should allow users to search for clubs.                                                                                                                      | Must Have   |
| RF34  | Payment             | The system should allow the visualization of subscription plans.                                                                                                        | Must Have   |
| RF35  | Payment             | The system should allow club administrators to make payments for subscription plans.                                                                                    | Must Have   |
| RF36  | Payment             | The system should allow club administrators to enter the easypay platform API Key for payment processing.                                                            | Must Have   |
| RF37  | Payment             | The system should allow users to use various payment methods, including MBWay, Multibanco Reference, Credit/Debit Card.                                              | Must Have   |
| RF38  | Payment             | The system should allow authenticated users to view their account statement.                                                                                            | Must Have   |
| RF39  | Payment             | The system should allow users to pay club membership fees with the desired frequency.                                                                                   | Must Have   |
| RF40  | Payment             | The system should allow the club administrator user to manage the subscription plan.                                                                                   | Must Have   |
| RF41  | Payment             | The system should allow club manager users to update the membership fee amounts to be paid by members.                                                                 | Must Have   |
| RF42  | Payment             | The system should allow authenticated users to pay for event participation.                                                                                             | Should Have |
| RF43  | BackOffice Control  | The system should allow the system administrator user to manage subscription plans for services.                                                                       | Must Have   |
| RF44  | Payment             | The system should allow authenticated users to select the payment method to be used.                                                                                    | Must Have   |
| RF45  | Events              | The system should allow club staff users to manage different types of events and details.                                                                               | Must Have   |
| RF46  | Events              | The system should allow club staff users to mark the event route on the map.                                                                                             | Must Have   |
| RF47  | Events              | The system should allow authenticated users to manage their event registrations.                                                                                          | Must Have   |
| RF48  | Events              | The system should allow all users to view existing public events and details.                                                                                          | Must Have   |
| RF49  | Events              | The system should allow all users associated with a club to view existing private events and details.                                                                   | Must Have   |
| RF50  | Events              | The system should allow users to view information related to the event map (route, elevation, and relevant information about them).                                | Must Have   |
| RF51  | Events              | The system should allow users to share events on different platforms.                                                                                                    | Won't Have  |
| RF52  | Events              | The system should allow viewing the number of participants in an event.                                                                                                    | Could Have  |
| RF53  | Events              | The system should allow viewing event results.                                                                                                                              | Could Have  |
| RF54  | Events              | The system should allow viewing events on a calendar.                                                                                                                        | Should Have |
| RF55  | Athlete Plans       | The system should allow coach and club administrator users to manage training/nutrition plans and goals for athletes.                                                | Should Have |
| RF56  | Athlete Plans       | The system should allow coaches and club administrators to manage training/nutrition plan templates.                                                                   | Could Have  |
| RF57  | Athlete Plans       | The system should allow athlete users to view training/nutrition plans and goals.                                                                                         | Should Have |
| RF58  | Athlete Plans       | The system should allow trainers to select the frequency of training/nutrition plans.                                                                                    | Could Have  |
| RF59  | Athlete Plans       | The system should allow athlete users to manage their bioimpedance data.                                                                                                   | Should Have |
| RF60  | Statistics (Club)   | The system should allow club manager users to view statistics on the number of different users in the club.                                                          | Should Have |
| RF61  | Statistics (Club)   | The system should allow club manager users to filter different existing statistics.                                                                                       | Could Have  |
| RF62  | Statistics (Club)   | The system should present club administrators with statistics on club revenue (from events and dues) on a monthly or annual basis.                                 | Should Have |
| RF63  | BackOffice Control  | The system should allow the system administrator user to view statistics on the most and least subscribed plan.                                                        | Must Have   |
| RF64  | BackOffice Control  | The system should allow the system administrator user to view statistics on the number of clubs created and canceled.                                                    | Must Have   |
| RF65  | BackOffice Control  | The system should allow the system administrator user to view statistics on the number of clubs with overdue payments.                                                    | Must Have   |
| RF66  | BackOffice Control  | The system should allow the system administrator user to view statistics on the number of users in the club.                                                            | Must Have   |
| RF67  | BackOffice Control  | The system should allow the system administrator user to view which users are online and offline.                                                                      | Won't Have  |
| RF68  | BackOffice Control  | The system should allow the system administrator user to view the number of codes used and generated in clubs for member registrations.                               | Could Have  |
| RF69  | BackOffice Control  | The system should allow the system administrator user to filter different existing statistics.                                                                           | Could Have  |
| RF70  | BackOffice Control  | The system should allow users to update the terms and conditions of the provided services.                                                                            | Won't Have  |
| RF71  | Notifications      | The system should notify the club administrator user when they have reached the maximum capacity of their subscription plan.                                           | Must Have   |
| RF72  | Notifications      | The system should notify club members about the existence of new events.                                                                                                  | Could Have  |
| RF73  | Notifications      | The system should notify event participants about changes (including event cancellations) in the events.                                                              | Could Have  |
| RF74  | Notifications      | The system should notify athlete users about the existence of new plans/goals.                                                                                             | Could Have  |
| RF75  | Notifications      | The system should notify athlete users about changes in plans/goals.                                                                                                       | Could Have  |
| RF76  | Notifications      | The system should notify club members when the due date for their dues is approaching.                                                                                    | Should Have |
| RF77  | Notifications      | The system should notify club members and club administrators of overdue dues and subscriptions, respectively.                                                          | Should Have |
| RF78  | Notifications      | The system should notify the athlete user who updated their EMD.                                                                                                             | Could Have  |
| RF79  | Notifications      | The system should notify users when a new club member joins.                                                                                                               | Won't Have  |
| RF80  | Notifications      | The system should allow users to indicate which notifications they wish to receive.                                                                                       | Should Have |
| RF81  | Notifications      | The system should notify the club administrator user when a new secretarial user code is generated and requires validation.                                             | Must Have   |
| RF82  | Notifications      | The system should notify the invited user by email containing a link generated by the club management for membership.                                                | Must Have   |
| RF83  | Club Management     | The system should allow users to view the club's terms and conditions.                                                                                                      | Must Have   |
| RF84  | BackOffice Control  | The system should allow users to view the service's terms and conditions.                                                                                                   | Must Have   |
| RF85  | Club Management     | The system should allow users to view the club's modalities.                                                                                                                 | Must Have   |
| RF86  | Athlete Plans       | The system should allow viewing athlete bioimpedance data.                                                                                                                   | Should Have |
| RF87  | BackOffice Control  | The system should allow the system administrator user to view monthly, annual, and subscription plan revenue statistics.                                                  | Must Have   |
| RF88  | Statistics (Club)   | The system should allow club manager users to view statistics on the number of active and inactive members.                                                              | Must Have   |
| RF89  | Statistics (Club)   | The system should allow club manager users to view statistics on modalities, comparing them to the number of members in those.                                           | Must Have   |
| RF90  | Statistics (Club)   | The system should allow club manager users to view statistics on the number of different types of users per year.                                                        | Must Have   |
| RF91  | Club Management     | The system should allow athlete and coach users to view the teams they belong to.                                                                                            | Must Have   |
| RF92  | Notifications      | The system should notify the club administrator user when the secretarial user intends to delete a secretarial user type and requires validation.                       | Must Have   |
| RF93  | Club Management     | The system should allow the club administrator user to edit club information.                                                                                                | Must Have   |
| RF94  | BackOffice Control  | The system should allow the system administrator user to create and edit modalities to be used by clubs.                                                                 | Must Have   |
| RF95  | BackOffice Control  | The system should allow system administrators to add and remove other users as system administrators.                                                                | Must Have   |
| RF96  | Athlete Plans       | The system should allow athletes to view a schedule with their goals.                                                                                                        | Must Have   |
| RF97  | Athlete Plans       | The system should allow athletes to view the history of their bioimpedance.                                                                                                  | Must Have   |
| RF98  | Notifications      | The system should notify users when they register for or withdraw from events, either voluntarily or due to non-payment.                                              | Should Have |
| RF99  | Notifications      | The system should notify athletes when they are added or removed from teams.                                                                                                | Should Have |
| RF100 | Notifications      | The system should notify users about their subscriptions and payments.                                                                                                      | Should Have |
| RF101 | Notifications      | The system should notify users about changes in dues and discontinued plans.                                                                                                 | Should Have |
| RF102 | Notifications      | The system should notify the athlete user when the expiration date of their EMD is approaching.                                                                             | Won't Have  |
