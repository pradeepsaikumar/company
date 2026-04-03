import express from 'express'
import Contact from '../models/Contact.js'
import { protect } from '../middleware/auth.js'
const router = express.Router()
router.post('/', async (req,res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body
    if (!name||!email||!message) return res.status(400).json({ message:'Name, email and message required' })
    await Contact.create({ name, email, phone, service, budget, message })
    res.status(201).json({ success:true, message:"We'll be in touch soon!" })
  } catch { res.status(500).json({ message:'Server error' }) }
})
router.get('/', protect, async (_,res) => {
  try { res.json(await Contact.find().sort({createdAt:-1})) } catch { res.status(500).json({ message:'Server error' }) }
})
router.patch('/:id/read', protect, async (req,res) => {
  try { await Contact.findByIdAndUpdate(req.params.id,{read:true}); res.json({success:true}) } catch { res.status(500).json({message:'Server error'}) }
})
router.delete('/:id', protect, async (req,res) => {
  try { await Contact.findByIdAndDelete(req.params.id); res.json({success:true}) } catch { res.status(500).json({message:'Server error'}) }
})
export default router
