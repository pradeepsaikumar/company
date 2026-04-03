import express from 'express'
import Blog from '../models/Blog.js'
import { protect } from '../middleware/auth.js'
const router = express.Router()
router.get('/', async (_,res) => { try { res.json(await Blog.find({published:true}).sort({date:-1})) } catch { res.status(500).json({message:'Server error'}) } })
router.get('/:slug', async (req,res) => {
  try {
    const p = await Blog.findOne({slug:req.params.slug,published:true})
    if (!p) return res.status(404).json({message:'Not found'})
    res.json(p)
  } catch { res.status(500).json({message:'Server error'}) }
})
router.post('/', protect, async (req,res) => {
  try {
    const {title,slug,excerpt,content,category,author,readTime,date} = req.body
    if (!title||!content||!slug) return res.status(400).json({message:'Title, slug and content required'})
    res.status(201).json(await Blog.create({title,slug,excerpt,content,category,author,readTime,date}))
  } catch (e) { res.status(e.code===11000?400:500).json({message:e.code===11000?'Slug already exists':'Server error'}) }
})
router.put('/:id', protect, async (req,res) => {
  try { const p=await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true}); if(!p) return res.status(404).json({message:'Not found'}); res.json(p) } catch { res.status(500).json({message:'Server error'}) }
})
router.delete('/:id', protect, async (req,res) => {
  try { await Blog.findByIdAndDelete(req.params.id); res.json({success:true}) } catch { res.status(500).json({message:'Server error'}) }
})
export default router
