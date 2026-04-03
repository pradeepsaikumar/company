import express from 'express'
import Newsletter from '../models/Newsletter.js'
import { protect } from '../middleware/auth.js'
const router = express.Router()
router.post('/subscribe', async (req,res) => {
  try {
    const { email } = req.body
    if (!email) return res.status(400).json({message:'Email required'})
    const ex = await Newsletter.findOne({email})
    if (ex) return res.json({success:true,message:'Already subscribed!'})
    await Newsletter.create({email})
    res.status(201).json({success:true,message:'Subscribed!'})
  } catch { res.status(500).json({message:'Server error'}) }
})
router.get('/', protect, async (_,res) => { try { res.json(await Newsletter.find().sort({createdAt:-1})) } catch { res.status(500).json({message:'Server error'}) } })
router.delete('/:id', protect, async (req,res) => { try { await Newsletter.findByIdAndDelete(req.params.id); res.json({success:true}) } catch { res.status(500).json({message:'Server error'}) } })
export default router
