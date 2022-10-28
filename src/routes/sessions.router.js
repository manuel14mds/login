import { Router } from 'express'
const router = Router()

router.get('/', async(req,res)=>{
    res.send('ók')
})
router.post('/register', async(req,res)=>{
    console.log(req.body)
    res.status(200).send('result')
})

export default router