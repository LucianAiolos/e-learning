const CourseModel = require('../models/model')

module.exports.loadAllCourses = async ( req, res ) => {
  try {
    insertCourses()
    results = await CourseModel.find()
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept')
    res.json(results)
  }
  catch(err) {
    console.log(err)
  }
}

const insertCourses = async () => {
  await CourseModel.insertMany(data, (err, elem) => {
    if(!err) console.log('Course Inserted Successfully with elements\n:' + elem)
    else console.log("Error while Inserting Course " + err)
  })
}