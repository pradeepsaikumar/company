import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import contactRoutes from './routes/contact.js'
import blogRoutes from './routes/blog.js'
import newsletterRoutes from './routes/newsletter.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }))
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/blog', blogRoutes)
app.use('/api/newsletter', newsletterRoutes)
app.get('/api/health', (_, res) => res.json({ status: 'ok', project: 'DeepRapIT', timestamp: new Date().toISOString() }))

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected')
    app.listen(PORT, () => console.log(`🚀 DeepRapIT backend → http://localhost:${PORT}`))
  })
  .catch(err => { console.error('❌ MongoDB error:', err.message); process.exit(1) })
