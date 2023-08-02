
# Project Title

*Live Link: https://a12-summer-school.web.app/
* Admin Id: admin@gmail.com
* Admin Password: Admin123@
* Instructor Id: instructor@gmail.com
* Instructor Password: Instructor123@

* In Home page there is nav bar, one slider banner, top classes section sort by enrolled students,6 instructor, a connect us section and a footer
* In all classes page all the class in database is showed and only user can select class
* In All Instructor page All instructor is available
* Dashboard route is conditional.if user is logged in then it will appear
* In dashboard user, admin & instructor will see different dashboard
* User dashboard have Selected Classes which is selected from all classes, Enrolled Classes will have the class data that is paid, Payment integretion is done with stripe. when user pay for any class class will be deleted from selected class,available seats will be decreased by 1 and enrolled students will increase by 1. At last there is payment history route where payment history will be available
* In admin dashboard there is manage class and manage users route. In manage class admin can approve or deny status and send feedback.In manage users admin can make user instructor or admin
* In instructor dashboard there is add class and my class route. From add class instructor can add class.And From my classes instructor can see the class he/she added and also feedback if the status is denied
* There is an error page
* Package Used: axios, tanstack query, material-tailwind, stripe, firebase, helmet async, react hook form, react icons, sweet alert2


