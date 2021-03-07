const express = require("express");
const router = express.Router();

const uuid = require("uuid");

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
         // http://localhost:3000/api/courses/4?type=id
         http: course = courses.filter((course) => course.id === courseVal);
         break;
      case "grade":
         // http://localhost:3000/api/courses/11?type=grade
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

router.get("/:grade/:full", (req, res) => {
   console.log(req.params);
   let courseGrade = parseInt(req.params.grade);
   let courseFull = req.params.full;
   let course = courses
      .filter((course) => course.grade === courseGrade)
      .filter((course) => course.full.toString() === courseFull);
   if (course.length > 0) {
      res.status(200).json({
         msg: "Courses Found",
         course,
      });
   } else {
      res.status(400).json({
         err: "Courses Not Found",
      });
   }
});

router.post("/newCourse", (req, res) => {
   console.log(req.body);
   let data = req.body;
   let newCourse = {
      id: uuid.v4(),
      class: data.class,
      teacher: data.teacher,
      grade: data.grade,
      full: false,
   };
   if (!newCourse.class || !newCourse.teacher || !newCourse.grade) {
      res.status(400).json({ msg: "ERROR: Please provide class info..." });
   } else {
      courses.push(newCourse);
      res.status(200).json(courses);
   }
});

module.exports = router;
