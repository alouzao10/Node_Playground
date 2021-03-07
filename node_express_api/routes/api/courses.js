const express = require("express");
const router = express.Router();

const courses = require("../../data/Courses.js");

router.get("/", (req, res) => {
   res.status(200).json(courses);
});

router.get("/:id", (req, res) => {
   let queryString = req.query;
   let courseVal = parseInt(req.params.id);
   let course;
   switch (queryString.type) {
      case "id":
         course = courses.filter((course) => course.id === courseVal);
         break;
      case "grade":
         course = courses.filter((course) => course.grade === courseVal);
         break;
      default:
         break;
   }
   if (course.length > 0) {
      res.status(200).json({ msg: "Your courses were found", course });
   } else {
      res.status(400).json({ err: "Courses Not Found" });
   }
});

router.get("/:grade/:id", (req, res) => {
   let courseGrade = parseInt(req.params.grade);
   let courseID = parseInt(req.params.id);
   let course = courses
      .filter((course) => course.grade === courseGrade)
      .filter((course) => course.id === courseID);
   if (course.length > 0) {
      res.status(200).json({
         msg: `Your course id: ${courseID}, was found for grade: ${courseGrade}`,
         course,
      });
   } else {
      res.status(400).json({
         err: `Course id: ${courseID}, Was Not Found For grade: ${courseGrade}`,
      });
   }
});

module.exports = router;
