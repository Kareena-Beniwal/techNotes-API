const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})
//'..': This represents the parent directory of the current directory. When used in a file path, it means "go up one level" in the directory structure.

// ^ : start of the sentence
//$ : end of the sentence
// | : or in Node.js


module.exports = router