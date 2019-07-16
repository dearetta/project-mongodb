const router = require('express').Router()
const greeting = require('../controllers/home')

router.get('/', greeting.sayGreetings)
router.get('/goodbye', greeting.sayGoodbye)

module.exports = router