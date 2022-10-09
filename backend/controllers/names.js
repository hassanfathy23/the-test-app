const Name = require('../models/names')

module.exports = {
    createName: async (req, res) => {
      const { name } = req.body
      const newName = new Name({
        name: name
      })

      await newName.save()
      return res.status(201).json({msg: "name saved", name: newName})
    },
    getNames: async (req, res) => {
        const names = await Name.find()
        return res.status(200).json({msg: "names found", names: names})
    }
}